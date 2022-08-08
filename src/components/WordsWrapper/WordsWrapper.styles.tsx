import styled from "styled-components";

export const WordsTable = styled.table`
  display: flex;
  flex-wrap: wrap;
  max-height: 200px;
  padding: 0.4rem;
  background-color: #f1f1f1;
  border-radius: 8px;
  overflow-y: auto;
  border-radius: 10px;
  background-color: #f1f1f2;
`;

export const TdElement = styled.td`
  margin: 0.4rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  background-color: orange;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
