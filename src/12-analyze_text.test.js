// TODO : test analyze_text.js
import { describe, test, expect } from "vitest";
import { analyze_text } from "./12-analyze_text";

describe("analyse_text", () => {
  test("", () => {
    expect(analyze_text("Hello world.")).toBe({
      letters: 11,
      worsd: 2,
      sentences: 1,
    });
    expect(analyze_text("Hello world. How are you?")).toBe({
      letters: 21,
      worsd: 5,
      sentences: 2,
    });
    expect(analyze_text("")).toBe({
      letters: 0,
      worsd: 0,
      sentences: 0,
    });
  });
});
