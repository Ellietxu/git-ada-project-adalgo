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
 * "ceux/celle" replaced by "cells"
 */
export const inclusify = (text) => {
  return text
    .replaceAll("il" && "elle", "iel")
    .replaceAll("ils" && "elles", "iels")
    .replaceAll("ceux" && "celle", "cells");
};
