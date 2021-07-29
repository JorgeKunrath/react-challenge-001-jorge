import styled from "styled-components/macro";
import theme from "../../theme";

function get(obj, key) {
  return function (props) {
    return props[obj][key];
  };
}

function isHide(size) {
  return function (props) {
    return get("$hide", size)(props) ? "display: none" : "";
  };
}

const Wrapper = styled.div`
  grid-column: var(--col);
  grid-row: var(--row);

  @media not all and (min-width: ${theme.size.m}) {
    --col: ${get("$col", "s")};
    --row: ${get("$row", "s")};
    ${isHide("s")};
  }
  @media (min-width: ${theme.size.m}) {
    --col: ${get("$col", "m")};
    --row: ${get("$row", "m")};
    ${isHide("m")};
  }
  @media (min-width: ${theme.size.l}) {
    --col: ${get("$col", "l")};
    --row: ${get("$row", "l")};
    ${isHide("l")};
  }
`;

function getSizes(list) {
  return function (size) {
    return list
      .find((s) => s[0] === size)
      ?.replace(size, "")
      ?.replace("-", " / ");
  };
}

/**
 * Item Child of `Container`
 *
 * sizes (max columns): s (4) | m (6) | l (12)
 *
 * separate sizes by space, columns by hyphen (for span).
 *
 * works like the grid definition, to span 4 columns use as 1-5.
 *
 * @param {*} col {string}
 * @param {*} row {string}
 * @param {*} hide {string}
 * @param {*} rest {any} will be passed to styled component
 *
 * @example <Item col="s1-3 m4" row="s1-3 m3" hide="m l" as="img">
 *
 * @returns
 */
export default function Item({ children, col, row, hide, ...rest }) {
  const findCol = getSizes(col?.split(" ") || []);
  const findRow = getSizes(row?.split(" ") || []);

  const cols = {
    s: findCol("s"),
    m: findCol("m"),
    l: findCol("l"),
  };

  const rows = {
    s: findRow("s"),
    m: findRow("m"),
    l: findRow("l"),
  };

  const hides = {
    s: hide?.includes("s"),
    m: hide?.includes("m"),
    l: hide?.includes("l"),
  };

  return (
    <Wrapper $col={cols} $row={rows} $hide={hides} {...rest}>
      {children}
    </Wrapper>
  );
}
