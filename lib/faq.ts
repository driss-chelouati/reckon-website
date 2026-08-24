/* The same five questions close the landing page, /how-it-works, /failure-modes
   and /pricing. Only the numbered link out of the section differs, so the
   answers live here and the link is a prop. */
export type QaItem = { q: string; verdict: string; a: string };

export const faqItems: QaItem[] = [
  {
    q: "Is this a component library?",
    verdict: "No.",
    a: "It ships components and tokens, but that is not what you are buying. The product is the rules layer that decides what gets computed, what gets shown and what gets refused — plus the machinery that makes those rules checkable.",
  },
  {
    q: "Will it work with the agent I already use?",
    verdict: "If it reads a rules file, yes.",
    a: "It is built for Claude Design users generating business UI. Because the layer is plain markdown loaded as project instructions, anything else that reads a rules file will use it too. There is nothing proprietary to integrate.",
  },
  {
    q: "Do I have to accept your visual style?",
    verdict: "No. The judgement, yes.",
    a: "The tokens are yours to set and brand fit is a config change. The judgement rules are not configurable, because that is the product. If you want a different opinion about derivation, you want a different product.",
  },
  {
    q: "What happens when the library updates?",
    verdict: "Nothing breaks.",
    a: "The rules are written against behaviour rather than internals, so upstream releases move underneath them. Where a rule does need to change, it changes in one file you can read in an afternoon.",
  },
  {
    q: "Does it make the model slower?",
    verdict: "Once. Then faster.",
    a: "Marginally slower on the first generation. Considerably faster by the fourth, because you are not re-prompting it to fix a total that never tied.",
  },
];
