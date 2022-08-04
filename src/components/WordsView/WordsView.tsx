import { useState } from "react";
import { FavoritesWords, WordsList } from "../index";
import WordsHeader from "../WordsHeader/WordsHeader";
import { WordsHeaderWrapper } from "./WordsView.styles";

interface WordsViewProps {
  wordList: string[];
  getWord: (word: string) => void;
  favoriteWords: string[];
  removeWordFromFavorites: (word: string) => void;
}

function WordsView({
  wordList,
  getWord,
  favoriteWords,
  removeWordFromFavorites,
}: WordsViewProps) {
  const [view, setView] = useState<"Word List" | "Favorites">("Word List");

  const isWordListView = view === "Word List";

  return (
    <div>
      <WordsHeaderWrapper>
        <WordsHeader
          text="Word List"
          setView={() => setView("Word List")}
          view={view}
        />
        <WordsHeader
          text="Favorites"
          setView={() => setView("Favorites")}
          view={view}
        />
      </WordsHeaderWrapper>
      {isWordListView ? (
        <WordsList wordsList={wordList} getWord={getWord} />
      ) : (
        <FavoritesWords
          favoriteWords={favoriteWords}
          getWord={getWord}
          removeWordFromFavorites={removeWordFromFavorites}
        />
      )}
    </div>
  );
}

export default WordsView;
