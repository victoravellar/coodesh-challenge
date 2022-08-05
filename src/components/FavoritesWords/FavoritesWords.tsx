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
    <div data-testid="favorites">
      {favoriteWords.length === 0 ? (
        <p>You dont have any word save as favorite</p>
      ) : (
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
      )}
    </div>
  );
}

export default FavoritesWords;
