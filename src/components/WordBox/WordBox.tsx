import { Meaning } from "../../utils/types/interfaces";
import { WordBoxWrapper, Audio } from "./WordBox.styles";
interface WordBoxProps {
  word: string;
  audio: string;
  meanings: Meaning[];
  phonetic: string | null;
}

function WordBox({ word, audio, meanings, phonetic }: WordBoxProps) {
  return (
    <div key={word}>
      <WordBoxWrapper>
        <h3>{word}</h3>
        <h4>{phonetic ? phonetic : "Phonetic is unavailable"}</h4>
      </WordBoxWrapper>
      <div>
        {audio ? (
          <Audio controls>
            <source src={audio} type="audio/mpeg" />
            <source src={audio} type="audio/ogg" />
            Your browser does not support the audio element.
          </Audio>
        ) : (
          <h2>Audio is unavailable</h2>
        )}
      </div>
      <div>
        <h1>Meanings</h1>
        {meanings.map((meaning) => {
          return (
            <p>
              <h2>
                {meaning.partOfSpeech} - {meaning.definitions[0].definition}
              </h2>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default WordBox;
