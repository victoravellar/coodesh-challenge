import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  width: 1200px;
  height: 400px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    height: unset;
    padding: 15px;
  }
`;

export const WordBoxContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-between;
`;
