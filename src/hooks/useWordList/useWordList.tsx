import { useState } from "react";

export default function useWordList() {
  const [wordList, setWordList] = useState<string[]>([]);

  return {
    wordList,
    setWordList,
  };
}
