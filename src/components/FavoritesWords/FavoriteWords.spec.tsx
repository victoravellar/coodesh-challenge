import { render, screen } from "@testing-library/react";
import FavoritesWords from "./FavoritesWords";

const removeWordFromFavoritesMock = jest.fn();
const getWordMock = jest.fn();

const makeSut = (favoritesWordsList: string[] = []) =>
  render(
    <FavoritesWords
      favoriteWords={favoritesWordsList}
      removeWordFromFavorites={removeWordFromFavoritesMock}
      getWord={getWordMock}
    />
  );

describe("Component - <FavoritesWords />", () => {
  test("Should render text saying that user doest not have favorites words", () => {
    makeSut();
    const userWithoutFavoritesWords = screen.getByText(
      "You dont have any word save as favorite"
    );
    expect(userWithoutFavoritesWords).toBeInTheDocument();
  });

  test("Should render user favorites words", () => {
    const favoritesWords = ["hello", "hi", "nice", "good"];
    makeSut(favoritesWords);

    for (const word of favoritesWords) {
      expect(screen.getByText(word)).toBeInTheDocument();
    }
  });
});
