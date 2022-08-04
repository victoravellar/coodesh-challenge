import { TdElement, WordsTable } from "../WordsWrapper/WordsWrapper.styles";

interface FavoritesWordsProps {
  favoriteWords: string[];
  removeWordFromFavorites: (word: string) => void;
  getWord: (word: string) => void;
}

function FavoritesWords({
  favoriteWords,
  removeWordFromFavorites,
  getWord,
}: FavoritesWordsProps) {
  return (
    <WordsTable>
      {favoriteWords.map((word) => (
        <>
          <TdElement>
            <span onClick={() => getWord(word)}>{word}</span>
            <span onClick={() => removeWordFromFavorites(word)}>x</span>
          </TdElement>
        </>
      ))}
    </WordsTable>
  );
}

export default FavoritesWords;
