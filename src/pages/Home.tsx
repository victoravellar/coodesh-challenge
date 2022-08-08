import { useEffect } from "react";
import useFavoriteWords from "../hooks/useFavoriteWords/useFavoriteWords";
import useWord from "../hooks/useWord/useWord";
import {
  ButtonsWrapper,
  HomeContainer,
  HomeWrapper,
  WordBoxContainer,
} from "./Home.styles";
import { WordBox, WordsView, Button } from "../components";

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
    useFavoriteWords();

  useEffect(() => {
    getWord(wordToBeSearch);
  }, [wordToBeSearch]);

  function searchForPreviusWord() {
    const previousWord = wordList[wordList.length - 2];
    setWordToBeSearch(previousWord);
  }

  return (
    <HomeWrapper>
      <HomeContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <WordBoxContainer>
            <WordBox
              word={word}
              audio={audio}
              meanings={meanings}
              phonetic={phonetic}
            />
            <ButtonsWrapper>
              <Button press={() => searchForPreviusWord()}>Back</Button>
              <Button press={() => setWordToBeSearch(pickRandomWord())}>
                Next
              </Button>
              {!favoriteWords.includes(word) ? (
                <Button press={() => setWordAsFavorite(word)}>
                  Set word as favorite
                </Button>
              ) : (
                <Button press={() => removeWordFromFavorites(word)}>
                  Remove from favorites
                </Button>
              )}
            </ButtonsWrapper>
          </WordBoxContainer>
        )}
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
