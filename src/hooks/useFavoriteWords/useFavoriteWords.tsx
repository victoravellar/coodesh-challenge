import { useState } from "react";

export default function useFavoriteWords() {
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);

  function setWordAsFavorite(word: string) {
    setFavoriteWords((oldArray) => [...oldArray, word]);
  }

  function removeWordFromFavorites(word: string) {
    setFavoriteWords(favoriteWords.filter((wordOnList) => wordOnList !== word));
  }

  return {
    favoriteWords,
    setWordAsFavorite,
    removeWordFromFavorites,
  };
}
