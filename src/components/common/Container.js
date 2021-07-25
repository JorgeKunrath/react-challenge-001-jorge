import styled from "styled-components";

const Container = styled.div`
  display: grid;
  min-width: 0;
  grid-gap: 1rem;
  grid-template-columns: repeat(var(--repeat, 4), minmax(0, 1fr));
  @media (min-width: 768px) {
    --repeat: 6;
  }
  @media (min-width: 1368px) {
    --repeat: 12;
  }

  max-width: calc(var(--site-width) + 2 * 1rem);
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

// export default function Container({ as = "div", children }) {
//   return <Wrapper as={as}>{children}</Wrapper>;
// }

export default Container;
