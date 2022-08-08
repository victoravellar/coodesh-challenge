import { TypographyHeaderStyles } from "./TypographyHeader.styles";

type View = "Word List" | "Favorites";

interface TypographyHeaderProps {
  view: View;
  setView: (view: View) => void;
  text: string;
}

function TypographyHeader({ view, setView, text }: TypographyHeaderProps) {
  return (
    <TypographyHeaderStyles
      isSelected={view === text}
      onClick={() => setView(view)}
    >
      {text}
    </TypographyHeaderStyles>
  );
}

export default TypographyHeader;
