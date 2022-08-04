import styled from "styled-components";

export const WordBoxWrapper = styled.div`
  background-color: #e6d0df;
  height: 200px;
  display: flex;
  font-size: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
