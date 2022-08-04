type View = "Word List" | "Favorites";

interface WordsHeaderProps {
  view: View;
  setView: (view: View) => void;
  text: string;
}

function WordsHeader({ view, setView, text }: WordsHeaderProps) {
  return (
    <h1
      style={{ color: view === text ? "red" : "gray", cursor: "pointer" }}
      onClick={() => setView(view)}
    >
      {text}
    </h1>
  );
}

export default WordsHeader;
