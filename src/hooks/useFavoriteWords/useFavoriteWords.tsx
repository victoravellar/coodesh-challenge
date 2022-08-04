import { useState } from "react";

export default function useFavoriteWords(word: any) {
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);

  function setWordAsFavorite() {
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
