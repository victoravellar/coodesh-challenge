import { TdElement, WordsTable } from "../WordsWrapper/WordsWrapper.styles";

interface WordsListProps {
  wordsList: string[];
  getWord: (word: string) => void;
}

function WordsList({ wordsList, getWord }: WordsListProps) {
  return (
    <WordsTable>
      {wordsList.map((word) => (
        <TdElement onClick={() => getWord(word)}>{word}</TdElement>
      ))}
    </WordsTable>
  );
}

export default WordsList;
