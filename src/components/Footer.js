import styled from "styled-components";

import theme from "../theme";

import IconHapu from "./icons/Hapu";
import IconFacebook from "./icons/Facebook";
import IconInstagram from "./icons/Instagram";
import IconTwitter from "./icons/Twitter";
import Spacer from "./common/Spacer";

const Footer = styled.footer`
  background-color: var(--white);
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  max-width: min(var(--site-width), calc(100% - 2 * 1rem));
  margin: 0 auto;

  .logo {
    justify-self: center;
    align-self: center;
    margin: 1rem 0;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a {
      margin: 0.25rem 1rem;
      color: var(--gray-24);
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
    }
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      line-height: 1;
      :not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }

  @media (min-width: ${theme.size.m}) {
    grid-template-columns: 1fr 2.5fr 1fr;

    .logo {
      justify-self: flex-start;
    }
    .social {
      justify-content: flex-end;
    }
  }
`;

const Copywright = styled.div`
  max-width: min(var(--site-width), calc(100% - 2 * 1rem));
  margin: 0 auto;
  text-align: center;
  font-size: 0.8rem;
  color: var(--gray-24);

  @media not all and (min-width: ${theme.size.m}) {
    border-top: 1px solid var(--gray-88);
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <Spacer axis="y" size="0.5rem" when={{ m: "1rem", l: "1.5rem" }} />
      <MainContent>
        <div className="logo">
          <IconHapu />
        </div>
        <nav>
          <a href="#demo">Share Your Nanny</a>
          <a href="#demo">Our Story</a>
          <a href="#demo">Blog</a>
          <a href="#demo">Terms &amp; Privacy</a>
        </nav>
        <div className="social">
          <a href="#demo" title="Facebook" target="_blank" rel="noopener noreferrer">
            <IconFacebook />
          </a>
          <a href="#demo" title="Instagram" target="_blank" rel="noopener noreferrer">
            <IconInstagram />
          </a>
          <a href="#demo" title="Twitter" target="_blank" rel="noopener noreferrer">
            <IconTwitter />
          </a>
        </div>
      </MainContent>
      <Spacer axis="y" size="2.5rem" when={{ l: "3.5rem" }} />
      <Copywright>
        <Spacer axis="y" size="1.5rem" />
        <small>Copyright © 2017 Hapu PTY Limited All rights reserved</small>
        <Spacer axis="y" size="1.5rem" when={{ m: "2rem" }} />
      </Copywright>
    </Footer>
  );
}
