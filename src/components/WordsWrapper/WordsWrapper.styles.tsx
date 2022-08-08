import styled from "styled-components";

export const WordsTable = styled.table`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid black;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 10px;
`;

export const TdElement = styled.td`
  border: 3px solid black;
  margin: 0.4rem;
  padding: 1rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
