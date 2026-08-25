/* Number formatting shared by the pages that draw figures. Both /who-its-for
   and /fixtures set money in tabular mono, so both need the same two-decimal
   grouped form — a figure that renders differently in two places is the exact
   thing those pages are arguing against. */

/* A figure carries its currency — rule 021, which /rules states and the
   specimens have to obey like anything else. The sign sits outside the symbol,
   which is the conventional order and keeps the minus first where a reader
   looking for direction will find it. */

/** 132400 → "$132,400.00", -2400 → "-$2,400.00" */
export const money = (n: number) => {
  const grouped = Math.abs(n).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (n < 0 ? "-$" : "$") + grouped;
};
