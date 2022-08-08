import { Meaning, Word } from "../utils/types/interfaces";

export class WordFactory {
  wordData: Word;
  constructor(wordData: Word) {
    this.wordData = wordData;
  }

  get word(): string {
    return this.wordData.word;
  }

  get meanings(): Meaning[] {
    return this.wordData.meanings;
  }

  get phonetic(): string | null  {
    return this.wordData.phonetics[0]?.text || null
  }

  get audio(): string {
    return (
      this.wordData.phonetics.find((element) => element.audio)?.audio || ""
    );
  }
}
