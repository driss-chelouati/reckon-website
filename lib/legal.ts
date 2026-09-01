/* The two quiet documents: /legal and /privacy.

   EVERY VALUE HERE IS REAL AND CURRENT. None of it is placeholder — the
   operator, the jurisdiction, the host, the retention terms and the CNDP
   position are all statements of fact about how this site actually runs.
   Check before changing, and change the site before changing the words.

   One claim depends on the build rather than on this file: /privacy#fonts says
   the typefaces are served from this site and that no request goes to Google
   Fonts. app/layout.tsx self-hosts all three families via next/font/local. If
   fonts ever move to a CDN, that section becomes false and must be rewritten.

   The contact address is deliberately absent. It is assembled on click by
   components/MailReveal.tsx so it never ships as a contiguous string.

   Inline markup in the copy: **stars** → <b>, `backticks` → <code>,
   [text](href) → <a>. See components/inline.tsx. */

/** one block of prose inside a section */
export type Block =
  | { p: string }
  | { ul: string[] }
  | { facts: Fact[] };

/** a row of the boxed key/value list; `email` draws the reveal button */
export type Fact = { label: string; value?: string; email?: true };

export type Section = { id: string; title: string; body: Block[] };

export const operator = {
  name: "Driss Chelouati",
  practice: "Freelance product designer",
  booking: "https://cal.com/drisschelouati/intro-call",
  bookingLabel: "cal.com/drisschelouati",
};

/* The meta strip differs per document: /legal names the jurisdiction, /privacy
   points at the controller. Each page passes its own — sharing it silently gave
   /privacy the wrong second item. */
export const updated = "Last updated · August 2026";

export const legalMeta = [updated, "Jurisdiction · Morocco"];
export const privacyMeta = [updated, "Controller · see [legal notice](/legal)"];

/* ---------- /legal ---------- */

export const legalSections: Section[] = [
  {
    id: "operator",
    title: "Who runs this",
    body: [
      { p: "This website is operated by an independent freelance designer based in Morocco. Reckon is a project of that practice; it is not a company and has no separate legal personality." },
      {
        facts: [
          { label: "Name", value: operator.name },
          { label: "Practice", value: operator.practice },
          { label: "Email", email: true },
          { label: "Booking", value: `[${operator.bookingLabel}](${operator.booking})` },
        ],
      },
      { p: "Email is the reliable route and is read by a person. There is no support desk and no ticket queue. For anything about the design system itself — a bug, a rule that reads wrong, a component that misbehaves — the repository is the better place, because the answer is then visible to everyone with the same question." },
    ],
  },
  {
    id: "responsibility",
    title: "Responsibility for content",
    body: [
      { p: "The content published here is written and maintained by the operator, and every reasonable effort is made to keep it accurate and current. It is offered as description and opinion, not as professional advice, and no guarantee is given that it is complete or fit for a particular purpose." },
      { p: "Where the site describes what the design system does, it describes the version available at the time of writing. Software changes; the changelog is the authoritative record of what shipped and when." },
    ],
  },
  {
    id: "links",
    title: "External links",
    body: [
      { p: "This site links to third-party websites, including repositories, documentation and tools. Those pages are outside the operator’s control, and their content is the responsibility of whoever publishes them. Links are checked when they are added and not continuously afterwards; if one leads somewhere it should not, an email to the address above will get it removed." },
    ],
  },
  {
    id: "rights",
    title: "Copyright and licensing",
    body: [
      { p: "Two different things are published here and they carry different terms." },
      {
        ul: [
          "**The design system and its documentation** — released under **AGPL-3.0-or-later**, as stated on the download page and in the package’s own `LICENSE`. Designing an interface with it is use rather than derivation, so a product you build is not itself AGPL; copying the token files, the component implementations or the rules into a distributed project is derivation, and §13 means network use counts.",
          "**This website — its writing, layout and illustrations** — is not covered by that licence and remains the property of the operator. Quoting it with attribution is welcome; republishing it is not.",
        ],
      },
      { p: "Upstream material carries its own terms, which are recorded in the `NOTICE` file shipped with the package rather than relicensed here. Third-party names and trademarks referred to on this site remain the property of their owners, and their use here is descriptive." },
    ],
  },
  {
    id: "disputes",
    title: "Disputes",
    body: [
      { p: "Anything arising from the use of this website is governed by Moroccan law, and the courts of Rabat have jurisdiction, unless a mandatory consumer-protection rule in your own country says otherwise." },
      { p: "Before any of that, write. Almost everything is a misunderstanding that an email resolves in a day." },
    ],
  },
];

/* ---------- /privacy ---------- */

export const privacySections: Section[] = [
  {
    id: "short",
    title: "The short version",
    body: [
      { p: "Reading this site involves no cookies, no analytics, no tracking pixels, no advertising and no third-party fonts. Your browser talks to one server, that server writes a line in a log, and that is the whole of it. Personal data reaches the operator only if you send an email or book a call, and then only what you chose to put in it." },
      { p: "The sections below say the same thing at the length a regulator prefers." },
    ],
  },
  {
    id: "controller",
    title: "Who is responsible",
    body: [
      { p: "The controller for any personal data processed through this site is the operator named in the [legal notice](/legal), at the contact address given there." },
      { p: "Processing is subject to Moroccan Law 09-08 on the protection of individuals with regard to the processing of personal data. No declaration has been made to the CNDP, because the site operates no file of personal data: there is no form, no account and no mailing list, and nothing is collected beyond the server logs described below. If that changes, a declaration follows before the feature does." },
    ],
  },
  {
    id: "hosting",
    title: "Hosting and server logs",
    body: [
      { p: "The site is hosted on Vercel. Like every web server, it records technical details of each request so that pages can be delivered and abuse can be investigated." },
      {
        ul: [
          "**IP address** — the address your request came from",
          "**Timestamp** — when the request was made",
          "**Page requested** — the file or route you asked for",
          "**Referrer and user agent** — where you came from, and the browser reporting itself",
        ],
      },
      { p: "These entries are not combined with anything else, not used to build a profile, and not consulted unless something goes wrong. They are held for Vercel’s own default retention period and then discarded; the operator keeps no separate copy. Vercel’s servers may sit outside Morocco, which means a request can be logged in another country." },
    ],
  },
  {
    id: "fonts",
    title: "Webfonts",
    /* This claim is verified against the build, not just written here — see the
       note at the top of this file and the check in the port report. */
    body: [
      { p: "The typefaces are served from this site, alongside everything else. Your browser makes no request to Google Fonts or any other font service, and no third party learns that you opened a page here." },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: [
      { p: "No cookies are set. No analytics, tracking, heatmap or advertising service is used, and no consent banner is needed because there is nothing to consent to." },
      { p: "If measurement is ever added, it should be something that counts page views without identifying readers, and this section will say which tool and what it stores." },
    ],
  },
  {
    id: "email",
    title: "Email and booking",
    body: [
      { p: "If you write, the operator receives your address, your message and whatever else you chose to include. It is used to answer you and to carry on the conversation, and for nothing else. It is not added to a mailing list, because there is no mailing list." },
      { p: "Calls are booked through Cal.com, which handles the scheduling on the operator’s behalf and stores the name, email address and time you supply. What Cal.com does with it is governed by [their own privacy policy](https://cal.com/privacy). Nothing is booked, and nothing is shared, unless you choose to open that link." },
    ],
  },
  {
    id: "downloads",
    title: "Downloads",
    body: [
      { p: "The design system is downloaded as a file. No account, no email address and no form stands between you and it; the request appears in the server log described above, exactly like any other page request. Nothing in the downloaded package reports back — it contains no runtime, no telemetry and no network calls." },
    ],
  },
  {
    id: "retention",
    title: "How long anything is kept",
    body: [
      {
        ul: [
          "**Server logs** — Vercel’s default retention period, then discarded",
          "**Email correspondence** — kept while the conversation is live, and afterwards only where a record is needed for tax or contractual reasons",
          "**Booking records** — kept by Cal.com under its own retention terms",
        ],
      },
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      { p: "Under Moroccan data protection law you may ask what personal data is held about you, have it corrected if it is wrong, have it deleted, and object to its processing. Where the GDPR applies to a given activity, the equivalent rights include access, rectification, erasure, restriction, portability and objection." },
      { p: "An ordinary email to the address in the [legal notice](/legal) is enough. No form, no template, and no reason needs to be given." },
    ],
  },
  {
    id: "complaint",
    title: "Complaints",
    body: [
      { p: "If you are not satisfied with how a request was handled, you may complain to the Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP) in Morocco, or to the supervisory authority in your own country where one has jurisdiction." },
      { p: "Raising it directly first is usually faster, and it is the only route that lets the problem actually get fixed." },
    ],
  },
];
