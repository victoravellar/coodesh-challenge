import { useState } from "react";
import HttpService from "../../remote/HttpService";
import useWordList from "../useWordList/useWordList";
import words from "word-list-json";
import { WordFormatted } from "../../utils/types/interfaces";
import { WordFactory } from "../../factories/WordFactory";

export default function useWord() {
  const [wordData, setWordData] = useState<WordFormatted>({
    word: "",
    audio: "",
    meanings: [],
    phonetic: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [wordToBeSearch, setWordToBeSearch] = useState(pickRandomWord());
  const { wordList, includeWordOnWordList } = useWordList();

  function pickRandomWord() {
    const randomNumber = Math.floor(Math.random() * words.length);
    return words[randomNumber];
  }

  async function getWord(searchWord: string): Promise<void> {
    try {
      setLoading(true);
      const response = await HttpService.getWord(searchWord);
      const wordFactory = new WordFactory(response);
      setWordData({
        word: wordFactory.word,
        audio: wordFactory.audio,
        meanings: wordFactory.meanings,
        phonetic: wordFactory.phonetic,
      });
      includeWordOnWordList(wordFactory.word);
    } catch {
      getWord(pickRandomWord());
    } finally {
      setLoading(false);
    }
  }

  return {
    wordData,
    isLoading,
    getWord,
    setWordToBeSearch,
    pickRandomWord,
    wordToBeSearch,
    wordList,
  };
}
