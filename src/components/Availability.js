import styled from "styled-components";
import theme from "../theme";

const Availability = styled.div`
  background-color: white;
  border-bottom: 1px solid var(--gray-88);
  padding: 1.5rem 0;
  line-height: 1.5;

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inner > div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-bottom: 1rem;
  }

  span {
    margin: 0.25rem;
  }

  .when {
    font-weight: 500;
    font-size: 0.85rem;
  }

  @media (min-width: ${theme.size.m}) {
    .inner {
      flex-direction: row;
    }
    img {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  @media (min-width: ${theme.size.l}) {
    .inner > div {
      flex-direction: row;
    }
    .when {
      font-size: 1rem;
    }
  }
`;

export default Availability;
