import styled from "styled-components";

const ShareHost = styled.div`
  background-color: white;
  text-align: center;

  .inner {
    display: flex;
    flex-direction: column;
  }

  .cta {
    display: flex;
    align-items: center;
    width: max-content;
    max-width: 100%;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    color: white;
    font-weight: 400;
    text-align: left;
    background-color: var(--secondary);
    border-radius: var(--radius);

    svg {
      margin-right: 1rem;
      flex-shrink: 0;
    }

    span {
      line-height: 1.5;
      flex-grow: 1;

      small {
        display: block;
        font-size: 0.8em;
      }
    }
  }
`;

export default ShareHost;
