import styled from "styled-components";

import theme from "../theme";
import IconSymbol from "./icons/Symbol";

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 0 1rem;

  .inner {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const Brand = styled.div`
  background-color: var(--primary);
  height: 64px;
  padding: 13px;
  display: flex;
  align-items: flex-end;
  border-radius: 0 0 100px 100px;
  margin-right: 1.5rem;
`;

const Slot = styled.div`
  margin: 1rem 0 0.5rem;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  display: block;
  margin: 0 0.25rem;
  padding: 0.5em 1em;
  color: white;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
`;

const FeaturedLink = styled(Link)`
  background-color: var(--primary);
  padding: 1em 1.25em;
  border-radius: var(--radius);
`;

const Nav = styled(Slot)`
  @media (max-width: ${theme.size.l}) {
    display: none;
  }
`;

const Ctas = styled(Slot)`
  margin-left: auto;

  @media (max-width: ${theme.size.m}) {
    ${Link}:not(${FeaturedLink}) {
      display: none;
    }
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <div className="inner">
        <Brand>
          <IconSymbol />
        </Brand>
        <Nav as="nav">
          <Link href="#demo">Create Your Nanny Share</Link>
          <Link href="#demo">Browse Shares</Link>
          <Link href="#demo">Our Story</Link>
        </Nav>
        <Ctas>
          <FeaturedLink href="#demo">Become a Nanny Share Host</FeaturedLink>
          <Link href="#demo">Sign In</Link>
        </Ctas>
      </div>
    </Wrapper>
  );
}
