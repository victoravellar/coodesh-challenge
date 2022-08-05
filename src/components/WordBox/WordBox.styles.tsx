import styled from "styled-components";

export const WordBoxWrapper = styled.div`
  background-color: black;
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

export const Audio = styled.audio`
  width: 100%;
  margin-top: 10px;
`;
