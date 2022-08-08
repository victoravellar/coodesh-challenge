import { ReactNode } from "react";
import { ButtonStyles } from "./Button.styles";

interface ButttonProps {
  children: ReactNode;
  press?: () => void;
}

export function Button({ children, press }: ButttonProps) {
  return <ButtonStyles onClick={press}>{children}</ButtonStyles>;
}
