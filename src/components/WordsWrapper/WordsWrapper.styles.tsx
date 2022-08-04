import styled from "styled-components";

export const WordsTable = styled.table`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  max-height: 150px;
  overflow-y: auto;
`;

export const TdElement = styled.td`
  border: 1px solid black;
  margin: 4px;
  padding: 10px;
  font-size: 22px;
  cursor: pointer;
`;
