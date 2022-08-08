import styled from "styled-components";

export const TypographyHeaderStyles = styled.h1<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "white" : "gray")};
  cursor: pointer;
  padding-bottom: 0.2rem;
  border-bottom: ${(props) => (props.isSelected ? "1px solid white" : "none")};
`;
