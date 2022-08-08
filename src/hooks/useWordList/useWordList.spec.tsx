import { renderHook, act } from "@testing-library/react";
import useWordList from "./useWordList";

const makeSut = () => {
  const { result } = renderHook(() => useWordList());
  return result;
};

describe("useWordList - Hook", () => {
  test("should render with initial data state", () => {
    const result = makeSut();
    expect(result.current.wordList).toEqual([]);
  });

  test("should add words to words list", () => {
    const result = makeSut();
    act(() => {
      result.current.includeWordOnWordList("one");
      result.current.includeWordOnWordList("two");
      result.current.includeWordOnWordList("three");
    });

    expect(result.current.wordList).toEqual(["one", "two", "three"]);
  });
});
