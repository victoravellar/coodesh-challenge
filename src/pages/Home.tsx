import { useEffect } from "react";
import useFavoriteWords from "../hooks/useFavoriteWords/useFavoriteWords";
import useWord from "../hooks/useWord/useWord";
import { HomeContainer, HomeWrapper, WordBoxContainer } from "./Home.styles";
import { WordBox, WordsView } from "../components";

function Home() {
  const {
    wordData,
    isLoading,
    wordToBeSearch,
    getWord,
    wordList,
    setWordToBeSearch,
    pickRandomWord,
  } = useWord();
  const { word, audio, meanings, phonetic } = wordData;
  const { setWordAsFavorite, favoriteWords, removeWordFromFavorites } =
    useFavoriteWords(word);

  useEffect(() => {
    getWord(wordToBeSearch);
  }, [wordToBeSearch]);

  function searchForPreviusWord() {
    const previousWord = wordList[wordList.length - 2];
    setWordToBeSearch(previousWord);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HomeWrapper>
      <HomeContainer>
        <WordBoxContainer>
          <WordBox
            word={word}
            audio={audio}
            meanings={meanings}
            phonetic={phonetic}
          />
          <div>
            <button onClick={() => searchForPreviusWord()}>Voltar</button>
            <button onClick={() => setWordToBeSearch(pickRandomWord())}>
              Próximo
            </button>
            {!favoriteWords.includes(word) && (
              <button onClick={setWordAsFavorite}>Set word as favorite</button>
            )}
          </div>
        </WordBoxContainer>
        <WordsView
          wordList={wordList}
          removeWordFromFavorites={removeWordFromFavorites}
          getWord={getWord}
          favoriteWords={favoriteWords}
        />
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
