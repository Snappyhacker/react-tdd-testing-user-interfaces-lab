import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm SnappyHacker`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm snappyhacker/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/a picture of snappyhacker/i); // replace with your actual alt text
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "path/to/your-image.jpg"); // replace with the actual image path
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole("heading", { level: 2 });
  expect(aboutMeHeading).toHaveTextContent(/about me/i);
});

test("displays a biography paragraph", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/your biography goes here/i); // replace with your actual biography text
  expect(bioParagraph).toBeInTheDocument();
});

test("displays links to GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(githubLink).toHaveAttribute("href", "https://github.com/SnappyHacker");
  expect(linkedInLink).toHaveAttribute("href", "https://linkedin.com/in/SnappyHacker");
});
