import { useEffect, useState } from "react";
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
  const [firstRender, setFirstRender] = useState(true);
  const { setWordAsFavorite, favoriteWords, removeWordFromFavorites } =
    useFavoriteWords();

  useEffect(() => {
    if (firstRender) return;
    getWord(wordToBeSearch);
  }, [wordToBeSearch, firstRender]);

  if (firstRender) {
    return (
      <Wrapper>
        <Button press={() => setFirstRender(false)} width={48}>
          Search for random word
        </Button>
      </Wrapper>
    );
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
                <Button
                  press={() => setWordToBeSearch(pickRandomWord())}
                  width={48}
                >
                  Next word
                </Button>
                {!favoriteWords.includes(word) ? (
                  <Button press={() => setWordAsFavorite(word)} width={48}>
                    Set word as favorite
                  </Button>
                ) : (
                  <Button
                    press={() => removeWordFromFavorites(word)}
                    width={48}
                  >
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
