import styled from "styled-components";

import IconPlay from "./icons/Play";

const Wrapper = styled.button`
  all: inherit;

  display: inline-flex;
  align-items: center;
  cursor: pointer;
  :focus {
    outline: 2px solid currentColor;
  }

  p {
    color: white;
    text-decoration: underline;
    text-align: left;
    line-height: 1.5;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    background-color: var(--primary);
    border-radius: 200px;

    svg {
      margin-left: 4px; // optical alignment
    }
  }
`;

export default function HeroCta({ children }) {
  const handleClick = () => {
    alert("ativou o vídeo");
  };

  return (
    <Wrapper onClick={handleClick}>
      <span>
        <IconPlay />
      </span>
      <p>{children}</p>
    </Wrapper>
  );
}
