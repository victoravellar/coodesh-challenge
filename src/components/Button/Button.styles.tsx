import styled from "styled-components";

export const ButtonStyles = styled.button<{ width: number }>`
  width: ${(props) => props.width}%;
  margin: 0.3rem 0;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: #ec7905;
`;
