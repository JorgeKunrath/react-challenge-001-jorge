import styled from "styled-components";
import theme from "../../theme";
import Container from "./Container";
import Item from "./Item";

const Hr = styled.hr`
  display: block;
  border: 0;
  border-bottom: 2px solid var(--gray-88);
  margin: var(--size) 0 var(--size);

  --size: 4rem;
  @media (min-width: ${theme.size.m}) {
    --size: 6rem;
  }
  @media (min-width: ${theme.size.l}) {
    --size: 7.5rem;
  }
`;

export default function Separator(props) {
  return (
    <Container {...props}>
      <Item col="s1-5 m2-6 l3-11">
        <Hr />
      </Item>
    </Container>
  );
}
