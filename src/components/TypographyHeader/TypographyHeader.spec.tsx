import { render, screen } from "@testing-library/react";
import TypographyHeader, { View } from "./TypographyHeader";

const getWordMock = jest.fn();

const makeSut = (text: View = "Favorites") => {
  render(
    <TypographyHeader view="Favorites" setView={getWordMock} text={text} />
  );
};

describe("Component - <TypographyHeader />", () => {
  test("Should render correct styles to selected element", () => {
    makeSut();
    const typographyHeader = screen.getByText("Favorites");
    expect(typographyHeader).toHaveStyle({
      color: "white",
      "border-bottom": "1px solid white",
    });
  });

  test("Should render correct styles to unselected element", () => {
    makeSut("Word List");
    const typographyHeader = screen.getByText("Word List");
    expect(typographyHeader).toHaveStyle({
      color: "gray",
      "border-bottom": "none",
    });
  });
});
