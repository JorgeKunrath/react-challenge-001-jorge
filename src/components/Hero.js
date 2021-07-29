import styled from "styled-components";

import images from "../images";
import theme from "../theme";
import Container from "./common/Container";

const Wrapper = styled.div`
  min-height: min(calc((75vmin + 75vmax) / 2), 75vh);
  padding: 6rem 0 3rem;
  display: flex;
  align-items: center;
  position: relative;

  background-image: linear-gradient(160deg, var(--overlay-gradient));

  * {
    color: white;
  }

  h1 {
    font-weight: 500;
  }
`;

const Picture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: overlay;
  }
`;

export default function Hero({ children }) {
  return (
    <Wrapper>
      <Picture>
        <source media={`(min-width: ${theme.size.m})`} srcSet={images.heroDesk} />
        <img src={images.heroMob} alt="" />
      </Picture>
      <Container style={{ alignItems: "center", zIndex: 1 }}>{children}</Container>
    </Wrapper>
  );
}
