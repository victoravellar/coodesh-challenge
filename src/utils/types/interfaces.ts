interface Phonetics {
  audio: string;
  text: string;
}

interface Definitions {
  definition: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definitions[];
}
export interface Word {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
}

export interface WordFormatted {
  word: string;
  audio: string;
  meanings: Meaning[];
  phonetic: string;
}
