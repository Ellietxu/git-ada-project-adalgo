/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 *
 */

/**
 * @param {string} text
 * @returns {string} an updated text with every
 * "il/elle" replaced by "iel"
 * "ils/elles" replaced by "iels"
 * "ceux/celle" replaced by "celleux"
 */
export const inclusify = (text) => {
  return text
    .replace(/\bil\b/g, "iel")
    .replace(/\bIl\b/g, "Iel")
    .replace(/\bils\b/g, "iels")
    .replace(/\bIls\b/g, "Iels")
    .replace(/\belle\b/g, "iel")
    .replace(/\bElle\b/g, "Iel")
    .replace(/\belles\b/g, "iels")
    .replace(/\bElles\b/g, "Iels")
    .replace(/\bceux\b/g, "celleux")
    .replace(/\bCeux\b/g, "Celleux")
    .replace(/\bcelle\b/g, "celleux")
    .replace(/\bCelle\b/g, "Celleux");
};

/*
\b en regex signifie "frontière de mot" — c'est une position entre un caractère de mot (lettre, chiffre) et un non-mot (espace, ponctuation, début/fin de phrase).
Par exemple :
javascript/\bil\b/  // matche "il" seul, mais pas "cils" ni "ville"

Les regex sont sensibles à la casse par défaut.
Pour ignorer la casse, on ajoute le flag i à la regex :
javascript/\bil\b/i  // matche "il", "Il", "IL"...


*/
