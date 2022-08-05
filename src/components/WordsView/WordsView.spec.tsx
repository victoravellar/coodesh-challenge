import { fireEvent, render, screen } from "@testing-library/react";
import WordsView from "./WordsView";

const removeWordFromFavoritesMock = jest.fn();
const getWordMock = jest.fn();

describe("Component - <FavoritesWords />", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <WordsView
        wordList={[]}
        favoriteWords={[]}
        getWord={getWordMock}
        removeWordFromFavorites={removeWordFromFavoritesMock}
      />
    );
  });

  test("Should render wordsList view if wordList is selected", () => {
    const wordList = screen.getByText("Word List");
    fireEvent.click(wordList);
    expect(screen.getByTestId("words_list")).toBeInTheDocument();
  });

  test("Should render favorites view if favorites is selected", () => {
    const favorites = screen.getByText("Favorites");
    fireEvent.click(favorites);
    expect(screen.getByTestId("favorites")).toBeInTheDocument();
  });
});
