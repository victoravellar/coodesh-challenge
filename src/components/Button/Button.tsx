import { ReactNode } from "react";
import { ButtonStyles } from "./Button.styles";

interface ButttonProps {
  children: ReactNode;
  press?: () => void;
  width?: number;
}

export default function Button({ children, press, width = 100 }: ButttonProps) {
  return (
    <ButtonStyles width={width} onClick={press}>
      {children}
    </ButtonStyles>
  );
}
