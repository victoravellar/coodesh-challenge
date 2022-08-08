import { ReactNode } from "react";
import { ButtonStyles } from "./Button.styles";

interface ButttonProps {
  children: ReactNode;
  press?: () => void;
}

export default function Button({ children, press }: ButttonProps) {
  return <ButtonStyles onClick={press}>{children}</ButtonStyles>;
}
