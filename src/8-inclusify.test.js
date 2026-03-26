import { describe, expect, test } from "vitest";
import { inclusify } from "./8-inclusify";

describe("inclusify", () => {
  test("il/elle are properly replaced", () => {
    expect(inclusify("Aujourd'hui elle a push le code sur github")).toBe(
      "Aujourd'hui iel a push le code sur github",
    );
    expect(inclusify("Il a bu un café")).toBe("Iel a bu un café");
    expect(
      inclusify("Il a mangé tout les chocolats et elles ont été en racheter."),
    ).toBe("Iel a mangé tout les chocolats et iels ont été en racheter.");
    expect(inclusify("Ils se sont mis du mascara sur les cils")).toBe(
      "Iels se sont mis du mascara sur les cils",
    );
    expect(inclusify("Il est venu, il a vu, il a vaincu")).toBe(
      "Iel est venu, iel a vu, iel a vaincu",
    );
    expect(inclusify("Elle est allé sur l'île.")).toBe(
      "Iel est allé sur l'île.",
    );
  });
  // TODO: write similar tests celleux
  test("ceux/celle are properly replaced", () => {
    expect(inclusify("ceux qui dorment tard ratent le petit déjeuner")).toBe(
      "celleux qui dorment tard ratent le petit déjeuner",
    );
    expect(inclusify("Ceux qui aiment le café arrivent tôt")).toBe(
      "Celleux qui aiment le café arrivent tôt",
    );
    expect(
      inclusify("c'est celle qui chante et celle qui fait de la balancelle"),
    ).toBe("c'est celleux qui chante et celleux qui fait de la balancelle");
    expect(inclusify("Celle qui a gagné la médaille")).toBe(
      "Celleux qui a gagné la médaille",
    );
    expect(inclusify("ceux qui cuisinent et celle qui fait la vaisselle")).toBe(
      "celleux qui cuisinent et celleux qui fait la vaisselle",
    );
    expect(inclusify("ceux qui sont chanceux")).toBe(
      "celleux qui sont chanceux",
    );
  });
});
