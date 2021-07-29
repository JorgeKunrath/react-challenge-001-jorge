// inspired by Josh Comeau
import styled from "styled-components";
import theme from "../../theme";

function getSize(direction, screen) {
  return function ({ axis, size, when }) {
    return axis === direction ? (screen ? when?.[screen] : size) : 0;
  };
}

const Spacer = styled.span`
  display: block;
  width: var(--width);
  min-width: var(--width);
  max-width: var(--width);
  height: var(--height);
  min-height: var(--height);
  max-height: var(--height);

  --width: ${getSize("x")};
  --height: ${getSize("y")};
  @media (min-width: ${theme.size.m}) {
    --width: ${getSize("x", "m")};
    --height: ${getSize("y", "m")};
  }
  @media (min-width: ${theme.size.l}) {
    --width: ${getSize("x", "l")};
    --height: ${getSize("y", "l")};
  }
`;

export default Spacer;
