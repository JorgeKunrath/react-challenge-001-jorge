import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: var(--col);
  grid-row: var(--row);

  @media (max-width: 767px) {
    --col: ${({ $col }) => $col.s};
    --row: ${({ $row }) => $row.s};
    ${({ $hide }) => $hide.s && "display: none"}
  }
  @media (min-width: 768px) and (max-width: 1367px) {
    --col: ${({ $col }) => $col.m};
    --row: ${({ $row }) => $row.m};
    ${({ $hide }) => $hide.m && "display: none"}
  }
  @media (min-width: 1368px) {
    --col: ${({ $col }) => $col.l};
    --row: ${({ $row }) => $row.l};
    ${({ $hide }) => $hide.l && "display: none"}
  }
`;

function _getSizes(list) {
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
 *
 * @example <Item col="s1-3 m4" row="s1-3 m3" hide="m l">
 *
 * @returns
 */
export default function Item({ children, col, row, hide, ...rest }) {
  const findCol = _getSizes(col?.split(" ") || []);
  const findRow = _getSizes(row?.split(" ") || []);

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
