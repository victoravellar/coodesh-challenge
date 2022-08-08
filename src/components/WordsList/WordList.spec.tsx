import { render, screen } from "@testing-library/react";
import WordsList from "./WordsList";

const getWordMock = jest.fn();

const makeSut = (wordsList: string[] = []) =>
  render(<WordsList wordsList={wordsList} getWord={getWordMock} />);

describe("Component - <WordsList />", () => {
  test("Should render text saying that user words list is empty", () => {
    makeSut();
    const emptyWordList = screen.getByText("Your words list is empty");
    expect(emptyWordList).toBeInTheDocument();
  });

  test("Should render user words list", () => {
    const wordsList = ["hello", "hi", "nice", "good"];
    makeSut(wordsList);

    for (const word of wordsList) {
      expect(screen.getByText(word)).toBeInTheDocument();
    }
  });
});
