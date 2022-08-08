import { render, screen } from "@testing-library/react";
import WordBox from "./WordBox";

interface SutProps {
  phonetic?: string | null;
  audio?: string;
}

const makeSut = ({
  phonetic = "phonetic",
  audio = "https//audio.com",
}: SutProps) =>
  render(
    <WordBox
      word="hello"
      audio={audio}
      meanings={[
        {
          partOfSpeech: "verb",
          definitions: [{ definition: "word definition" }],
        },
      ]}
      phonetic={phonetic}
    />
  );

describe("Component - <WordBox />", () => {
  test("Should render all words information", () => {
    makeSut({});
    const word = screen.getByText("hello");
    const phonetic = screen.getByText("phonetic");
    const meaning = screen.getByText("verb - word definition");

    expect(meaning).toBeInTheDocument();
    expect(word).toBeInTheDocument();
    expect(phonetic).toBeInTheDocument();
  });

  test("Should render is unavailable message", () => {
    makeSut({
      phonetic: null,
      audio: "",
    });
    const phoneticIsUnavailable = screen.getByText("Phonetic is unavailable");
    const audioIsUnavailable = screen.getByText("Audio is unavailable");

    expect(phoneticIsUnavailable).toBeInTheDocument();
    expect(audioIsUnavailable).toBeInTheDocument();
  });
});
