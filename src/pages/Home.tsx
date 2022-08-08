import { useEffect } from "react";
import useFavoriteWords from "../hooks/useFavoriteWords/useFavoriteWords";
import useWord from "../hooks/useWord/useWord";
import {
  ButtonsWrapper,
  HomeContainer,
  HomeWrapper,
  WordBoxContainer,
  Wrapper,
} from "./Home.styles";
import { WordBox, WordsView, Button } from "../components";
import { Spinner } from "../components/Spinner/Spinner.styles";

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
        <WordBoxContainer>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <WordBox
                word={word}
                audio={audio}
                meanings={meanings}
                phonetic={phonetic}
              />
              <ButtonsWrapper>
                <Wrapper>
                  <Button press={() => searchForPreviusWord()} width={48}>
                    Back
                  </Button>
                  <Button
                    press={() => setWordToBeSearch(pickRandomWord())}
                    width={48}
                  >
                    Next
                  </Button>
                </Wrapper>
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
            </>
          )}
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
