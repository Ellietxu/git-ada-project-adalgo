// TODO: test arrayToFrench function with one, two and multiple words

/* 
Le test doit vérifier quelle phrase est retournée
selon le nombre de mots dans [array]
 */
import { describe, it, expect } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

describe("arrayToFrench", () => {
  it("returns a sentence with one word", () => {
    expect(arrayToFrench(["bonjour"])).toBe("bonjour");
  });
  it("returns a sentence with two words", () => {
    expect(arrayToFrench(["noir", "blanc"])).toBe("noir et blanc");
  });
  it("returns a sentence with multiple words", () => {
    expect(arrayToFrench(["Un", "deux", "trois", "soleil"])).toBe(
      "Un, deux, trois et soleil",
    );
  });
});
