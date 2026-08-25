/* Number formatting shared by the pages that draw figures. Both /who-its-for
   and /fixtures set money in tabular mono, so both need the same two-decimal
   grouped form — a figure that renders differently in two places is the exact
   thing those pages are arguing against. */

/** 132400 → "132,400.00", -2400 → "-2,400.00" */
export const money = (n: number) =>
  n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
