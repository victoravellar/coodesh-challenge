import { Meaning } from "../../utils/types/interfaces";
import { WordBoxWrapper } from "./WordBox.styles";
interface WordBoxProps {
  word: any;
  audio: string;
  meanings: Meaning[];
  phonetic: string;
}

function WordBox({ word, audio, meanings, phonetic }: WordBoxProps) {
  return (
    <div key={word}>
      <WordBoxWrapper>
        <h3>{word}</h3>
        <h3>{phonetic}</h3>
      </WordBoxWrapper>
      <div>
        {audio ? (
          <audio controls>
            <source src={audio} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p>Audio is unavaliabe</p>
        )}
      </div>
      <div>
        <h2>Meanings</h2>
        {meanings.map((meaning) => {
          return (
            <p>
              <span>
                {meaning.partOfSpeech} - {meaning.definitions[0].definition}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default WordBox;
