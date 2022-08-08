import { useState } from "react";

export default function useWordList() {
  const [wordList, setWordList] = useState<string[]>([]);

  function includeWordOnWordList(word: string) {
    const wordIsOnList = wordList.includes(word);
    if (wordIsOnList) return;
    setWordList((oldList) => [...oldList, word]);
  }

  return {
    wordList,
    includeWordOnWordList,
  };
}
