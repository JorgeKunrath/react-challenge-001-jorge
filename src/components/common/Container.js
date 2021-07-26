import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(var(--repeat, 4), minmax(0, 1fr));

  max-width: min(var(--site-width), calc(100% - 2 * 1rem));
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.size.m - 1}px) {
    max-width: calc(min(100%, 550px) - 2 * 1rem);
  }
  @media (min-width: ${theme.size.m}px) {
    --repeat: 6;
  }
  @media (min-width: ${theme.size.l}px) {
    --repeat: 12;
  }
`;

export default Container;
