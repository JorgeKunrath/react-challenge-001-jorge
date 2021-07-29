import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import theme from "../theme";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;

  /* sr-only */
  label {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  input {
    min-width: 20%;
    font: inherit;
    border: 1px solid var(--gray-88);
  }

  button {
    all: inherit;
    color: white;
    cursor: pointer;
    background-color: var(--primary);

    &:focus {
      outline: 2px solid black;
    }
  }

  input,
  button {
    margin: 0.3rem 0;
    padding: 1em 1.5em;
    border-radius: var(--radius);
  }

  button:disabled {
    opacity: 0.5;
  }

  @media (min-width: ${theme.size.m}) {
    flex-direction: row;

    input,
    button {
      margin: 0 0.3rem;
    }
  }
`;

const Message = styled.div`
  margin: 0.75rem 0 -1rem;
  text-align: center;
  padding: 0.25em;
  font-size: 0.9rem;
  color: var(--gray-24);
  min-height: 1.75em;

  &.success {
    color: var(--primary);
  }
  &.error,
  &.missingData {
    color: #d64242;
  }

  @media (min-width: ${theme.size.m}) {
    margin: 0.75rem 0.3rem -1rem;
  }
`;

async function sendToAnalytics(abValue) {
  console.log("Now this value would be saved in some db", abValue);
}

async function saveConversion(abValue) {
  try {
    const hasSaved = window.localStorage.getItem("ab-conversion");
    if (hasSaved === null) {
      sendToAnalytics(abValue);
    }
    window.localStorage.setItem("ab-conversion", true);
  } catch (error) {
    console.log("Error in saveConversion:", error);
  }
}

export default function FormComponent({ abValue }) {
  const [status, setStatus] = useState("idle");
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const statusList = {
    idle: "",
    loading: "Submitting...",
    success: "Form submitted successfully",
    missingData: "Some field are missing, please check your form",
    error: "An error occurred, please try again",
  };

  async function handleSubmit(ev) {
    ev.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    if (name && email && status !== "loading") {
      setStatus("loading");

      const res = await fetch("https://api.jungledevs.com/api/v1/challenge-newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
        }),
      }).catch((e) => console.error("fails on submit:", e));
      const data = await res.json();

      if (res.ok) {
        saveConversion(abValue);
        setStatus("success");
        nameRef.current.value = "";
        emailRef.current.value = "";
      } else {
        if (data.name?.[0] === "This field may not be blank.") {
          setStatus("missingData");
        } else {
          setStatus("error");
        }
      }
    }
  }

  useEffect(() => {
    if (status === "idle") return;
    const timeoutId = setTimeout(() => {
      setStatus("idle");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [status]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          id="name"
          type="text"
          placeholder="Your name"
          required
          autoComplete="name"
          onChange={() => setStatus("idle")}
        />
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          placeholder="Your email"
          required
          autoComplete="email"
          onChange={() => setStatus("idle")}
        />
        <button disabled={status === "loading" ? 1 : 0}>Send</button>
      </Form>
      <Message className={status}>{statusList[status]}</Message>
    </>
  );
}
