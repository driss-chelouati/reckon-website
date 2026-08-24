import type { ReactElement } from "react";

/* The component inventory, 55 specimens. Each one is decorative markup built
   from the utility layer scoped under .ab — and that scoping is not stylistic.
   Several of those short names, .bar among them, collide with the landing
   page's chart classes once the stylesheet is shared, and the symptom is bars
   stretching to fill their row. Keep it. */
export type Specimen = { name: string; description: string; art: ReactElement };

export const specimens: Specimen[] = [
  {
    name: "Accordion",
    description: "Collapsible panels with headings. One open at a time, or several.",
    art: (
      <><div className="crd dvy" style={{ maxWidth: "180px" }}><div className="f ai g2 p3"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg><span className="bar" style={{ width: "60%" }}></span></div><div className="f as g2 p3"><svg className="ico up" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg><span className="f fc g2 f1" style={{ paddingTop: "2px" }}><span className="bar" style={{ width: "50%" }}></span><span className="bar m" style={{ width: "90%" }}></span></span></div><div className="f ai g2 p3"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg><span className="bar" style={{ width: "60%" }}></span></div></div></>
    ),
  },
  {
    name: "Alert",
    description: "A callout stating something the reader must know before acting.",
    art: (
      <><div className="crd f ai g2 p3" style={{ maxWidth: "184px" }}><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /> <line x1="12" x2="12" y1="8" y2="12" /> <line x1="12" x2="12.01" y1="16" y2="16" /></svg><span className="bar m" style={{ width: "70%" }}></span></div></>
    ),
  },
  {
    name: "Alert dialog",
    description: "A decision that must be answered before anything else can happen.",
    art: (
      <><div className="crd f fc g4 p4" style={{ maxWidth: "178px" }}><span className="f fc g2"><span className="bar" style={{ width: "50%" }}></span><span className="bar m" style={{ width: "90%" }}></span></span><span className="f ai je g2"><span className="bar m" style={{ width: "26px" }}></span><span className="crd prim" style={{ width: "28px", height: "16px", borderRadius: "4px" }}></span></span></div></>
    ),
  },
  {
    name: "Autocomplete",
    description: "An input that narrows a known set as you type, and never invents one.",
    art: (
      <><div className="f fc g2" style={{ maxWidth: "180px" }}><div className="crd flat r12 f ai jb g2 px3"><span className="bar" style={{ width: "40%" }}></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" /> <path d="M7 22h1a4 4 0 0 0 4-4" /> <path d="M7 2h1a4 4 0 0 1 4 4" /></svg></div><div className="crd r10 f fc g4 p4"><span className="bar m" style={{ width: "100%" }}></span><span className="bar m" style={{ width: "100%" }}></span><span className="bar m" style={{ width: "100%" }}></span></div></div></>
    ),
  },
  {
    name: "Avatar",
    description: "A person, with a fallback that never leaves an empty circle behind.",
    art: (
      <><div className="crd rf f ai jc" style={{ width: "48px", height: "48px", margin: "0 auto" }}><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /></svg></div></>
    ),
  },
  {
    name: "Badge",
    description: "Status as data. Every value the enum permits has a defined appearance.",
    art: (
      <><div className="crd rf f ai g2" style={{ maxWidth: "96px", padding: "8px 10px", margin: "0 auto" }}><span className="dt" style={{ width: "8px", height: "8px", background: "rgba(255,255,255,.55)" }}></span><span className="bar f1"></span></div></>
    ),
  },
  {
    name: "Breadcrumb",
    description: "The path to the current record. Every segment is a route that exists.",
    art: (
      <><div className="crd f ai g1 p3" style={{ maxWidth: "184px" }}><span className="bar f1"></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg><span className="bar m f1"></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg><span className="bar m f1"></span></div></>
    ),
  },
  {
    name: "Button",
    description: "One primary action per surface, and never two.",
    art: (
      <><div className="crd prim" style={{ maxWidth: "92px", borderRadius: "14px", padding: "15px 22px", margin: "0 auto" }}><span className="bar" style={{ background: "rgba(10,10,16,.42)" }}></span></div></>
    ),
  },
  {
    name: "Calendar",
    description: "A date picker with ranges and multiple selection.",
    art: (
      <><div className="crd f fc g4 p4" style={{ maxWidth: "150px" }}><span className="f ai g2"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg><span className="bar m" style={{ width: "60%" }}></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></span><span className="f ai g2"><span className="bar f1" style={{ background: "var(--g2)" }}></span><span className="bar f1" style={{ background: "var(--g2)" }}></span><span className="bar f1" style={{  }}></span><span className="bar f1" style={{ background: "transparent" }}></span><span className="bar f1" style={{  }}></span></span><span className="f ai g2"><span className="bar f1" style={{  }}></span><span className="bar f1" style={{ background: "transparent" }}></span><span className="bar f1" style={{  }}></span><span className="bar f1" style={{  }}></span><span className="bar f1" style={{  }}></span></span><span className="f ai g2"><span className="bar f1" style={{ background: "transparent" }}></span><span className="bar f1" style={{  }}></span><span className="bar f1" style={{ background: "var(--w)" }}></span><span className="bar f1" style={{  }}></span><span className="bar f1" style={{ background: "transparent" }}></span></span><span className="f ai g2"><span className="bar f1" style={{  }}></span><span className="bar f1" style={{  }}></span><span className="bar f1" style={{ background: "transparent" }}></span><span className="bar f1" style={{ background: "var(--g2)" }}></span><span className="bar f1" style={{ background: "var(--g2)" }}></span></span></div></>
    ),
  },
  {
    name: "Card",
    description: "A container that groups related information, and states what it is.",
    art: (
      <><div className="crd f fc g4 p4" style={{ maxWidth: "150px" }}><span className="f fc g2"><span className="bar" style={{ width: "60%" }}></span><span className="bar m" style={{ width: "90%" }}></span></span><span className="f fc g2"><span className="bar q" style={{ height: "16px", borderRadius: "4px" }}></span><span className="bar q" style={{ height: "16px", borderRadius: "4px" }}></span><span className="crd prim" style={{ height: "16px", borderRadius: "4px" }}></span></span></div></>
    ),
  },
  {
    name: "Checkbox",
    description: "Toggles that wait for submit, rather than committing on click.",
    art: (
      <><div className="f fc g3" style={{ maxWidth: "120px", margin: "0 auto" }}><span className="f ai g2"><span className="sq"></span><span className="bar m f1"></span></span><span className="f ai g2"><span className="sq w"></span><span className="bar m f1"></span></span></div></>
    ),
  },
  {
    name: "Checkbox group",
    description: "Shared state across a set, including the indeterminate parent.",
    art: (
      <><div className="f fc g3" style={{ maxWidth: "124px", margin: "0 auto" }}><span className="f ai g2"><span className="sq w"></span><span className="bar m f1"></span></span><span className="f ai g2" style={{ paddingLeft: "16px" }}><span className="sq"></span><span className="bar m f1"></span></span><span className="f ai g2" style={{ paddingLeft: "16px" }}><span className="sq w"></span><span className="bar m f1"></span></span><span className="f ai g2"><span className="sq"></span><span className="bar m f1"></span></span></div></>
    ),
  },
  {
    name: "Collapsible",
    description: "A panel controlled by its own trigger, with no hidden state.",
    art: (
      <><div className="crd dvy" style={{ maxWidth: "184px" }}><span className="f ai jb g2 px3"><span className="bar" style={{ width: "60%" }}></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></span><span className="f fc g2 p4"><span className="bar m" style={{ width: "80%" }}></span><span className="bar m" style={{ width: "70%" }}></span></span></div></>
    ),
  },
  {
    name: "Combobox",
    description: "An input over a known set, with the chosen values held as chips.",
    art: (
      <><div className="crd flat r12 f ai g2 p3" style={{ maxWidth: "184px" }}><span className="f ai g1" style={{ background: "var(--g3)", borderRadius: "5px", padding: "4px 5px 4px 8px" }}><span className="bar" style={{ width: "22px" }}></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /> <path d="m6 6 12 12" /></svg></span><span className="f ai g1" style={{ background: "var(--g3)", borderRadius: "5px", padding: "4px 5px 4px 8px" }}><span className="bar" style={{ width: "22px" }}></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /> <path d="m6 6 12 12" /></svg></span></div></>
    ),
  },
  {
    name: "Command",
    description: "A palette for searching and running the actions a screen permits.",
    art: (
      <><div className="crd dvy" style={{ maxWidth: "184px" }}><span className="f ai g2 px3"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" /></svg><span className="bar" style={{ width: "40%" }}></span></span><span className="f fc g4 p4"><span className="f ai jb g2"><span className="bar m" style={{ width: "65%" }}></span><span className="bar m" style={{ width: "14px" }}></span></span><span className="f ai jb g2"><span className="bar m" style={{ width: "65%" }}></span><span className="bar m" style={{ width: "14px" }}></span></span><span className="f ai jb g2"><span className="bar m" style={{ width: "65%" }}></span><span className="bar m" style={{ width: "14px" }}></span></span></span></div></>
    ),
  },
  {
    name: "Context menu",
    description: "A menu raised at the pointer, portalled clear of its container.",
    art: (
      <><div className="f fc" style={{ maxWidth: "180px" }}><span className="crd dash r10" style={{ minHeight: "64px" }}></span><span className="crd r10 f fc g3 p3" style={{ width: "96px", margin: "-12px 0 0 auto" }}><span className="bar m" style={{ width: "100%" }}></span><span className="bar m" style={{ width: "100%" }}></span><span className="bar m" style={{ width: "100%" }}></span></span></div></>
    ),
  },
  {
    name: "Date picker",
    description: "A field that opens a calendar, and accepts only real dates.",
    art: (
      <><div className="crd flat f ai g2 p3" style={{ maxWidth: "184px" }}><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v3" /> <path d="M16 2v3" /> <rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M3 9h18" /></svg><span className="bar" style={{ width: "60%" }}></span></div></>
    ),
  },
  {
    name: "Dialog",
    description: "A surface that opens over the page and states what it will do.",
    art: (
      <><div className="crd f fc g4 p4" style={{ maxWidth: "150px" }}><span className="bar" style={{ width: "60%%" }}></span><span className="f fc g2"><span className="bar q" style={{ height: "16px", borderRadius: "4px" }}></span><span className="bar q" style={{ height: "16px", borderRadius: "4px" }}></span></span><span className="f ai je g2"><span className="bar m" style={{ width: "26px" }}></span><span className="crd prim" style={{ width: "28px", height: "16px", borderRadius: "4px" }}></span></span></div></>
    ),
  },
  {
    name: "Drawer",
    description: "A panel from the edge of the screen, with a handle you can find.",
    art: (
      <><div className="f fc g2" style={{ maxWidth: "180px" }}><span className="crd dash" style={{ borderRadius: "12px", minHeight: "72px" }}></span><span className="crd f jc" style={{ padding: "8px 0 34px" }}><span className="bar" style={{ width: "44px", height: "4px", background: "var(--g2)" }}></span></span></div></>
    ),
  },
  {
    name: "Empty",
    description: "Nothing to show is a state that gets drawn, with a way out of it.",
    art: (
      <><div className="crd dash f fc ai g2 p4" style={{ maxWidth: "184px" }}><span className="dt" style={{ width: "30px", height: "30px" }}></span><span className="bar" style={{ width: "60%" }}></span><span className="bar m" style={{ width: "80%" }}></span></div></>
    ),
  },
  {
    name: "Field",
    description: "A control bound to its label, its hint and its error.",
    art: (
      <><div className="f fc g2" style={{ maxWidth: "180px" }}><span className="bar" style={{ width: "60px" }}></span><span className="crd flat r10" style={{ minHeight: "30px" }}></span><span className="bar m" style={{ width: "80%%" }}></span></div></>
    ),
  },
  {
    name: "Fieldset",
    description: "A group of controls under one legend, submitted together.",
    art: (
      <><div className="f fc g4" style={{ maxWidth: "180px" }}><span className="f fc g2"><span className="bar" style={{ width: "60px" }}></span><span className="crd flat r10" style={{ minHeight: "30px" }}></span></span><span className="f fc g2"><span className="bar" style={{ width: "60px" }}></span><span className="crd flat r10" style={{ minHeight: "30px" }}></span></span></div></>
    ),
  },
  {
    name: "Form",
    description: "Validation held on the field, and a submit that says what it commits.",
    art: (
      <><div className="f fc g4" style={{ maxWidth: "180px" }}><span className="f fc g2"><span className="bar" style={{ width: "60px" }}></span><span className="crd flat r10" style={{ minHeight: "30px" }}></span></span><span className="crd prim r10" style={{ minHeight: "30px" }}></span></div></>
    ),
  },
  {
    name: "Frame",
    description: "A framed region that names what it contains before it shows it.",
    art: (
      <><div style={{ maxWidth: "180px", background: "rgba(255,255,255,.045)", borderRadius: "16px", padding: "4px" }}><span className="f fc g2 p3"><span className="bar" style={{ width: "70%" }}></span></span><span className="crd f fc g2" style={{ padding: "18px" }}><span className="bar" style={{ width: "70%" }}></span><span className="bar m" style={{ width: "90%" }}></span></span></div></>
    ),
  },
  {
    name: "Group",
    description: "Controls that belong together, sharing one border.",
    art: (
      <><div className="crd f dvx" style={{ maxWidth: "170px" }}><span className="f1 px4"><span className="bar"></span></span><span className="f1 px4"><span className="bar"></span></span></div></>
    ),
  },
  {
    name: "Input",
    description: "The plain field, with every state it can be in already drawn.",
    art: (
      <><div className="crd flat f ai px4" style={{ maxWidth: "184px" }}><span className="bar" style={{ width: "60%" }}></span></div></>
    ),
  },
  {
    name: "Input group",
    description: "A field with what belongs beside it, inside the same border.",
    art: (
      <><div className="crd flat f ai jb g2" style={{ maxWidth: "184px", padding: "11px 14px" }}><span className="f ai g2 f1"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" /></svg><span className="bar" style={{ width: "60%" }}></span></span><span className="sq"></span></div></>
    ),
  },
  {
    name: "Kbd",
    description: "Shortcuts written the way the operating system writes them.",
    art: (
      <><div className="f ai jc g2" style={{ maxWidth: "120px", margin: "0 auto" }}><span className="crd r10 f ai jc" style={{ width: "38px", height: "38px", color: "rgba(255,255,255,.55)", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>⌘</span><span className="crd r10 f ai jc" style={{ width: "38px", height: "38px", color: "rgba(255,255,255,.55)", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>K</span></div></>
    ),
  },
  {
    name: "Label",
    description: "Bound to its control, so clicking it does what a label should.",
    art: (
      <><div className="f fc g3" style={{ maxWidth: "180px" }}><span className="bar w" style={{ width: "60px" }}></span><span className="crd flat r10" style={{ minHeight: "30px" }}></span></div></>
    ),
  },
  {
    name: "Menu",
    description: "Actions read from the record, with submenus where they belong.",
    art: (
      <><div className="f fc ai g2" style={{ maxWidth: "180px", alignItems: "flex-end" }}><span className="crd r12 f ai p2" style={{ width: "auto" }}><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" /> <circle cx="5" cy="12" r="1" /></svg></span><span className="crd r10 f fc g4 p4" style={{ width: "100%" }}><span style={{ paddingRight: "22px" }}><span className="bar m"></span></span><span className="f ai g4"><span className="f1"><span className="bar m"></span></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></span><span style={{ paddingRight: "22px" }}><span className="bar m"></span></span></span></div></>
    ),
  },
  {
    name: "Meter",
    description: "A value inside a range, with the range stated.",
    art: (
      <><div className="f fc g2" style={{ maxWidth: "180px" }}><span className="f ai jb"><span className="bar" style={{ width: "50%%" }}></span><span className="bar" style={{ width: "32px" }}></span></span><span className="trk2"><span style={{ width: "65%%" }}></span></span></div></>
    ),
  },
  {
    name: "Number field",
    description: "A number with its own increment, and limits it will not pass.",
    art: (
      <><div className="crd f ai g2" style={{ maxWidth: "184px", padding: "11px 14px" }}><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /></svg><span className="f1 f jc"><span className="bar" style={{ width: "44px" }}></span></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /> <path d="M12 5v14" /></svg></div></>
    ),
  },
  {
    name: "OTP field",
    description: "A segmented code entry that keeps its place as you type.",
    art: (
      <><div className="f ai jc g2" style={{ maxWidth: "180px", margin: "0 auto" }}><span className="crd flat r12 f ai jc" style={{ width: "36px", height: "36px" }}><span className="dt" style={{ width: "6px", height: "6px", background: "var(--g)" }}></span></span><span className="crd flat r12 f ai jc" style={{ width: "36px", height: "36px" }}><span className="dt" style={{ width: "6px", height: "6px", background: "var(--g)" }}></span></span><span className="crd flat r12 f ai jc" style={{ width: "36px", height: "36px" }}><span className="dt" style={{ width: "6px", height: "6px", background: "var(--g)" }}></span></span><span className="crd flat r12 f ai jc" style={{ width: "36px", height: "36px" }}><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" /> <path d="M7 22h1a4 4 0 0 0 4-4" /> <path d="M7 2h1a4 4 0 0 1 4 4" /></svg></span></div></>
    ),
  },
  {
    name: "Pagination",
    description: "Range and total derived from the set. There is no prop to pass.",
    art: (
      <><div className="f ai g3" style={{ maxWidth: "184px" }}><span className="crd r12 f ai p2"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></span><span className="f1 f ai g2"><span className="bar m f1"></span><span className="bar m f1"></span><span className="bar m f1"></span></span><span className="crd r12 f ai p2"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></span></div></>
    ),
  },
  {
    name: "Popover",
    description: "A panel anchored to what opened it, and dismissed the same way.",
    art: (
      <><div className="f fc ai g2" style={{ maxWidth: "180px" }}><span className="crd r12 f ai" style={{ padding: "11px 14px", width: "auto" }}><span className="bar" style={{ width: "44px" }}></span></span><span className="crd r10 f fc g3 p4" style={{ width: "100%" }}><span className="bar" style={{ width: "70%" }}></span><span className="f fc g2"><span className="bar m" style={{ width: "80%" }}></span><span className="bar m" style={{ width: "60%" }}></span></span></span></div></>
    ),
  },
  {
    name: "Preview card",
    description: "A preview raised on hover, never the only place the fact exists.",
    art: (
      <><div className="crd f ai g3 p4" style={{ maxWidth: "184px" }}><span className="dt" style={{ width: "34px", height: "34px" }}></span><span className="f fc g2 f1"><span className="bar" style={{ width: "70%" }}></span><span className="bar m" style={{ width: "100%" }}></span><span className="bar m" style={{ width: "90%" }}></span></span></div></>
    ),
  },
  {
    name: "Progress",
    description: "A task with a known end, distinct from one without.",
    art: (
      <><div style={{ maxWidth: "180px" }}><span className="trk2"><span style={{ width: "45%" }}></span></span></div></>
    ),
  },
  {
    name: "Radio group",
    description: "One of a set, where none and several are both impossible.",
    art: (
      <><div className="f fc g3" style={{ maxWidth: "120px", margin: "0 auto" }}><span className="f ai g2"><span className="sq rf"></span><span className="bar m f1"></span></span><span className="f ai g2"><span className="sq rf w"></span><span className="bar m f1"></span></span></div></>
    ),
  },
  {
    name: "Scroll area",
    description: "A scrolling region whose overlays are portalled out of it.",
    art: (
      <><div className="crd rel" style={{ maxWidth: "150px", padding: "12px" }}><span className="f fc g2"><span className="bar m" style={{ width: "80%" }}></span><span className="bar m" style={{ width: "90%" }}></span><span className="bar m" style={{ width: "70%" }}></span><span className="bar m" style={{ width: "85%" }}></span><span className="bar m" style={{ width: "90%" }}></span><span className="bar m" style={{ width: "80%" }}></span></span><span style={{ position: "absolute", top: "10px", right: "5px", width: "4px", height: "34px", borderRadius: "999px", background: "var(--g)" }}></span></div></>
    ),
  },
  {
    name: "Segmented control",
    description: "For switching a view. Never for taking an action.",
    art: (
      <><div className="crd flat r12 f" style={{ maxWidth: "170px", padding: "4px", gap: "4px" }}><span className="crd prim" style={{ flex: "1", borderRadius: "8px", padding: "9px 0" }}></span><span style={{ flex: "1", padding: "9px 0", display: "grid", placeItems: "center" }}><span className="bar m" style={{ width: "60%" }}></span></span><span style={{ flex: "1", padding: "9px 0", display: "grid", placeItems: "center" }}><span className="bar m" style={{ width: "60%" }}></span></span></div></>
    ),
  },
  {
    name: "Select",
    description: "A choice from a closed set, with nothing outside it accepted.",
    art: (
      <><div className="crd flat f ai jb g2" style={{ maxWidth: "184px", padding: "11px 14px" }}><span className="bar" style={{ width: "60%" }}></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></div></>
    ),
  },
  {
    name: "Separator",
    description: "A division that screen readers can hear as well as see.",
    art: (
      <><div className="f fc dvy" style={{ maxWidth: "180px" }}><span className="f fc g2 py3"><span className="bar" style={{ width: "60%" }}></span><span className="bar m" style={{ width: "100%" }}></span></span><span className="f ai g2 dvx py3"><span className="f1" style={{ padding: "2px 8px" }}><span className="bar m"></span></span><span className="f1" style={{ padding: "2px 8px" }}><span className="bar m"></span></span><span className="f1" style={{ padding: "2px 8px" }}><span className="bar m"></span></span><span className="f1" style={{ padding: "2px 8px" }}><span className="bar m"></span></span></span></div></>
    ),
  },
  {
    name: "Sheet",
    description: "A flyout from the side, on the dialog’s own rules.",
    art: (
      <><div className="f g2" style={{ maxWidth: "180px", height: "104px" }}><span className="crd dash f1" style={{ borderRadius: "12px" }}></span><span className="crd f fc jb g4 p3" style={{ width: "64px" }}><span className="f fc g2"><span className="bar" style={{ width: "60%" }}></span><span className="bar m" style={{ width: "100%" }}></span></span><span className="f je"><span className="crd prim" style={{ width: "26px", height: "15px", borderRadius: "4px" }}></span></span></span></div></>
    ),
  },
  {
    name: "Skeleton",
    description: "Loading shaped like the thing that is loading, so nothing jumps.",
    art: (
      <><div className="f ai g3 mskr" style={{ maxWidth: "180px" }}><span className="dt" style={{ width: "32px", height: "32px" }}></span><span className="f fc g2 f1"><span className="bar m" style={{ width: "100%" }}></span><span className="bar m" style={{ width: "100%" }}></span></span></div></>
    ),
  },
  {
    name: "Slider",
    description: "A value from a range, with the value legible without dragging.",
    art: (
      <><div className="f ai g1" style={{ maxWidth: "180px" }}><span className="bar w" style={{ width: "35%" }}></span><span className="sq w rf" style={{ width: "16px", height: "16px" }}></span><span className="bar m f1"></span></div></>
    ),
  },
  {
    name: "Spinner",
    description: "For work with no known end. Anything measurable gets a progress bar.",
    art: (
      <><div className="f jc" style={{ maxWidth: "120px", margin: "0 auto" }}><span className="spin"></span></div></>
    ),
  },
  {
    name: "Switch",
    description: "Commits immediately. If it needs a save button, it is a checkbox.",
    art: (
      <><div className="f jc" style={{ maxWidth: "120px", margin: "0 auto" }}><span className="rf" style={{ width: "44px", height: "26px", background: "var(--g2)", padding: "3px", display: "block" }}><span className="crd rf" style={{ width: "20px", height: "20px", display: "block" }}></span></span></div></>
    ),
  },
  {
    name: "Table",
    description: "Tabular figures, and a footer that derives its own totals.",
    art: (
      <><div className="crd dvy" style={{ maxWidth: "184px" }}><span className="f ai g2 p3"><span style={{ width: "10px", height: "10px", borderRadius: "2px", background: "var(--g)", flex: "none" }}></span><span className="bar f1"></span><span className="bar m f1"></span><span className="bar m f1"></span><span className="bar m f1"></span><span className="bar m f1"></span></span><span className="f ai g2 p3"><span style={{ width: "10px", height: "10px", borderRadius: "2px", background: "var(--g)", flex: "none" }}></span><span className="bar f1"></span><span className="bar m f1"></span><span className="bar m f1"></span><span className="bar m f1"></span><span className="bar m f1"></span></span><span className="f ai g2 p3"><span style={{ width: "10px", height: "10px", borderRadius: "2px", background: "var(--g)", flex: "none" }}></span><span className="bar f1"></span><span className="bar m f1"></span><span className="bar m f1"></span><span className="bar m f1"></span><span className="bar m f1"></span></span></div></>
    ),
  },
  {
    name: "Tabs",
    description: "Panels on one record. The set never changes what the record is.",
    art: (
      <><div className="f fc g4" style={{ maxWidth: "180px" }}><span className="f r10" style={{ background: "rgba(255,255,255,.1)", padding: "2px" }}><span className="crd r10 f ai jc" style={{ flex: "1", padding: "11px 0", borderRadius: "8px" }}><span className="bar w" style={{ width: "22px" }}></span></span><span className="f ai jc" style={{ flex: "1", padding: "11px 0" }}><span className="bar m" style={{ width: "22px" }}></span></span><span className="f ai jc" style={{ flex: "1", padding: "11px 0" }}><span className="bar m" style={{ width: "22px" }}></span></span></span><span className="f fc g2"><span className="bar" style={{ width: "70%" }}></span><span className="bar m" style={{ width: "100%" }}></span></span></div></>
    ),
  },
  {
    name: "Textarea",
    description: "Longer input, sized to what is expected of it.",
    art: (
      <><div className="crd flat f fc g2 px4" style={{ maxWidth: "184px", minHeight: "64px" }}><span className="bar" style={{ width: "60%" }}></span></div></>
    ),
  },
  {
    name: "Toast",
    description: "Confirmation of something already done, never a question.",
    art: (
      <><div className="rel" style={{ maxWidth: "184px", paddingTop: "14px" }}><span className="crd" style={{ position: "absolute", top: "0", left: "8px", right: "8px", height: "26px", opacity: ".5" }}></span><span className="crd" style={{ position: "absolute", top: "7px", left: "4px", right: "4px", height: "26px", opacity: ".75" }}></span><span className="crd rel f as g2 p3"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /> <line x1="12" x2="12" y1="8" y2="12" /> <line x1="12" x2="12.01" y1="16" y2="16" /></svg><span className="f fc g2 f1"><span className="bar" style={{ width: "40%" }}></span><span className="bar m" style={{ width: "70%" }}></span></span></span></div></>
    ),
  },
  {
    name: "Toggle",
    description: "Two states, both of which look deliberate.",
    art: (
      <><div className="f fc ai g2" style={{ maxWidth: "120px", margin: "0 auto" }}><span className="crd f" style={{ width: "56px", padding: "15px 18px" }}><span className="bar" style={{ width: "100%" }}></span></span><span className="crd f" style={{ width: "56px", padding: "15px 18px", background: "rgba(255,255,255,.09)", boxShadow: "none" }}><span className="bar w" style={{ width: "100%" }}></span></span></div></>
    ),
  },
  {
    name: "Toggle group",
    description: "Shared state across a set of toggles, with one always true.",
    art: (
      <><div className="crd f dvx" style={{ maxWidth: "150px" }}><span className="f1 f jc" style={{ padding: "15px 0" }}><span className="bar" style={{ width: "16px" }}></span></span><span className="f1 f jc" style={{ padding: "15px 0", background: "rgba(255,255,255,.08)" }}><span className="bar w" style={{ width: "16px" }}></span></span><span className="f1 f jc" style={{ padding: "15px 0" }}><span className="bar" style={{ width: "16px" }}></span></span></div></>
    ),
  },
  {
    name: "Toolbar",
    description: "Grouped controls, with one primary action and never two.",
    art: (
      <><div className="f ai jc g1" style={{ maxWidth: "180px", margin: "0 auto", border: "1px solid var(--edge-2)", borderRadius: "12px", padding: "4px" }}><span className="crd r10 f jc" style={{ padding: "13px 14px" }}><span className="bar" style={{ width: "14px" }}></span></span><span className="crd r10 f jc" style={{ padding: "13px 14px" }}><span className="bar" style={{ width: "14px" }}></span></span><span className="crd r10 f jc" style={{ padding: "13px 14px" }}><span className="bar" style={{ width: "14px" }}></span></span></div></>
    ),
  },
  {
    name: "Tooltip",
    description: "A hint for a sighted user. Never the only place a fact exists.",
    art: (
      <><div className="f fc ai g2" style={{ maxWidth: "140px", margin: "0 auto" }}><span className="crd r10 f" style={{ width: "100%", padding: "14px" }}><span className="bar" style={{ width: "100%" }}></span></span><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" /></svg></div></>
    ),
  },
];
