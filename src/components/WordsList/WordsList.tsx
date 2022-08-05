import { TdElement, WordsTable } from "../WordsWrapper/WordsWrapper.styles";

interface WordsListProps {
  wordsList: string[];
  getWord: (word: string) => void;
}

function WordsList({ wordsList, getWord }: WordsListProps) {
  return (
    <div data-testid="words_list">
      {wordsList.length === 0 ? (
        <p>Your words list is empty</p>
      ) : (
        <WordsTable>
          {wordsList.map((word) => (
            <TdElement onClick={() => getWord(word)}>{word}</TdElement>
          ))}
        </WordsTable>
      )}
    </div>
  );
}

export default WordsList;
