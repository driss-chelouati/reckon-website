import Image from "next/image";
import { Fragment, type ReactElement } from "react";
import { records, type LogoKey, type Record } from "@/lib/shells";
import s from "./shells.module.css";

/* The hero record cards and the four archetype specimens.

   Every class here comes from the module, so none of these names can be reached
   by the shared stylesheet — which is what stops .bar, .rows, .who and .mk from
   picking up the landing page's chart and timeline rules. See the note at the
   top of shells.module.css. */

/* ---------- company marks: placeholders, in their own brand colours ---------- */

export const marks: { [K in LogoKey]: ReactElement } = {
  flame: (
    <svg viewBox="0 0 53 43" fill="none" aria-hidden="true">
      <path d="M37.5 27.0752C37.5 20.4478 32.1274 15.0752 25.5 15.0752H15.5V27.0752H25.5V42.0752H37.5V27.0752Z" fill="#FF4D00" />
      <path d="M0.5 28.0752C0.500001 35.8072 6.76801 42.0752 14.5 42.0752H22.5V30.0752H14.5C13.3954 30.0752 12.5 29.1798 12.5 28.0752V27.0752H0.5V28.0752Z" fill="#FF4D00" />
      <path d="M25.5 0.0751953C40.4117 0.0751953 52.5 12.1635 52.5 27.0752V42.0752H40.5V27.0752C40.5 18.7909 33.7843 12.0752 25.5 12.0752H14.5C13.3954 12.0752 12.5 12.9706 12.5 14.0752V15.0752H0.5V14.0752C0.500001 6.34321 6.76802 0.0751953 14.5 0.0751953H25.5Z" fill="#FF4D00" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 55 40" fill="none" aria-hidden="true">
      <path fill="#6BDA0A" d="M23.6322 0.597911C19.9395 1.76672 16.9327 5.48248 10.9192 12.914C3.501 22.0814 -0.208097 26.665 0.00900851 30.5474C0.155095 33.1598 1.30933 35.6108 3.22485 37.3763C6.07159 40 11.9392 40 23.6745 40H24.3275C27.1975 40 29.9133 38.6992 31.7186 36.4682C37.6627 29.1224 40.6348 25.4496 44.4744 24.8957C45.4078 24.7611 46.3555 24.7611 47.2889 24.8957C49.8634 25.2671 52.048 27.0408 55 30.3839C50.2776 21.5248 41.6084 3.83856 31.37 0.597911C28.8514 -0.199304 26.1508 -0.199304 23.6322 0.597911Z" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path fill="#2C4CFD" clipRule="evenodd" fillRule="evenodd" d="M20 0C17.3922 1.99605e-07 15.1183 1.45568 13.5342 3.63379C13.4379 3.76624 13.3435 3.90193 13.252 4.04004C13.156 4.02057 13.0605 4.00028 12.9648 3.9834C10.312 3.51529 7.67909 4.03688 5.85742 5.8584C4.03613 7.68009 3.5143 10.3131 3.98242 12.9658C3.99931 13.0615 4.02057 13.157 4.04004 13.2529C3.90199 13.3444 3.76618 13.4379 3.63379 13.5342C1.45574 15.1183 0.000113546 17.3923 0 20C0.000113558 22.6077 1.45574 24.8817 3.63379 26.4658C3.76614 26.5621 3.90204 26.6556 4.04004 26.7471C4.0205 26.8433 3.99936 26.9392 3.98242 27.0352C3.51446 29.6879 4.03684 32.321 5.8584 34.1426C7.67994 35.9637 10.3124 36.4855 12.9648 36.0176C13.0606 36.0007 13.1559 35.9794 13.252 35.96C13.3436 36.0981 13.4378 36.2337 13.5342 36.3662C15.1183 38.5443 17.3922 40 20 40C22.6078 40 24.8817 38.5443 26.4658 36.3662C26.5623 36.2335 26.6573 36.0983 26.749 35.96C26.8447 35.9794 26.9398 36.0007 27.0352 36.0176C29.6878 36.4855 32.32 35.963 34.1416 34.1416C35.9629 32.3201 36.4845 29.6877 36.0166 27.0352C35.9997 26.9396 35.9794 26.8439 35.96 26.748C36.0981 26.6565 36.2337 26.5622 36.3662 26.4658C38.5443 24.8817 39.9999 22.6077 40 20C39.9999 17.3923 38.5443 15.1183 36.3662 13.5342C36.2335 13.4376 36.0974 13.3437 35.959 13.252C35.9784 13.1561 35.9987 13.0604 36.0156 12.9648C36.4837 10.3121 35.963 7.67909 34.1416 5.85742C32.3199 4.03599 29.687 3.51526 27.0342 3.9834C26.9391 4.00018 26.8444 4.02071 26.749 4.04004C26.6574 3.90177 26.5622 3.76638 26.4658 3.63379C24.8817 1.45568 22.6078 3.54835e-07 20 0ZM20 32.4355C21.4648 33.7432 23.081 34.7301 24.7168 35.3613C23.4224 37.0556 21.7516 38 20 38C18.2484 38 16.5776 37.0556 15.2832 35.3613C16.919 34.7301 18.5353 33.7432 20 32.4355ZM34.1055 27.7578C34.3801 29.8067 33.8904 31.5645 32.7275 32.7275C31.5646 33.8903 29.8075 34.379 27.7588 34.1045C28.4359 32.5708 28.8593 30.8239 28.9697 28.9688C30.825 28.8582 32.5717 28.4351 34.1055 27.7578ZM5.89551 27.7578C7.42931 28.435 9.1759 28.8583 11.0312 28.9688C11.1417 30.824 11.565 32.5707 12.2422 34.1045C10.1933 34.3792 8.43562 33.8912 7.27246 32.7285C6.10929 31.5653 5.62069 29.8071 5.89551 27.7578ZM26.4824 24.2451C26.7263 25.0959 26.8923 26.0072 26.9619 26.9619C26.3643 26.9183 25.7839 26.8363 25.2246 26.7217C24.9825 27.347 24.6924 27.9675 24.3574 28.5771C25.1934 28.7751 26.0669 28.9076 26.9668 28.9648C26.85 30.6906 26.4234 32.2773 25.7773 33.6221C24.3016 33.1061 22.796 32.2332 21.4141 31.0176C22.0976 30.246 22.6913 29.4321 23.1924 28.5967C23.6048 27.9091 23.9555 27.2068 24.2383 26.5H24.3105C24.2891 26.494 24.2675 26.4885 24.2461 26.4824C24.4704 25.9187 24.6506 25.3516 24.7891 24.7881C25.3524 24.6496 25.9189 24.4695 26.4824 24.2451ZM25.7773 6.37695C26.4236 7.72183 26.8499 9.30905 26.9668 11.0352C25.7353 11.1134 24.553 11.3307 23.4492 11.668C22.7006 11.8967 21.9887 12.1812 21.3223 12.5146C20.8835 12.7345 20.4647 12.9754 20.0684 13.2363C20.2212 16.8693 23.1315 19.7793 26.7646 19.9316C27.0574 19.4873 27.3259 19.015 27.5664 18.5176C28.2604 18.9337 28.9431 19.4287 29.5986 20C29.211 20.3378 28.8117 20.6461 28.4082 20.9297C28.7056 21.5303 28.9656 22.163 29.1836 22.8223C29.8133 22.4057 30.4279 21.9357 31.0176 21.4131C32.2334 22.7949 33.1068 24.3008 33.623 25.7764C32.2783 26.4227 30.6918 26.8489 28.9658 26.9658C28.8995 25.9239 28.733 24.9168 28.4795 23.9629C28.2325 23.0343 27.9015 22.1563 27.498 21.3457C27.2752 20.8982 27.0304 20.4709 26.7646 20.0674C23.1318 20.2197 20.2217 23.1301 20.0684 26.7627C20.5128 27.0555 20.9848 27.3248 21.4824 27.5654C21.0662 28.2597 20.5715 28.9429 20 29.5986C19.662 29.2108 19.354 28.8109 19.0703 28.4072C18.4696 28.7047 17.8371 28.9645 17.1777 29.1826C17.5945 29.8125 18.0641 30.4276 18.5869 31.0176C17.2051 32.2333 15.6991 33.1057 14.2236 33.6221C13.5775 32.2773 13.151 30.6908 13.0342 28.9648C14.2795 28.8856 15.4745 28.6642 16.5889 28.3203C17.3076 28.0986 17.9921 27.8254 18.6348 27.5068C19.0896 27.2812 19.5231 27.0324 19.9326 26.7627C19.7793 23.1308 16.8692 20.2207 13.2373 20.0674C12.9443 20.512 12.6753 20.9846 12.4346 21.4824C11.74 21.0662 11.0564 20.5717 10.4004 20C10.7887 19.6616 11.1885 19.3525 11.5928 19.0684C11.2955 18.4679 11.0353 17.8358 10.8174 17.1768C10.1874 17.5933 9.57241 18.0632 8.98242 18.5859C7.76712 17.2043 6.8941 15.699 6.37793 14.2236C7.72278 13.5774 9.30916 13.15 11.0352 13.0332C11.1134 14.2649 11.3305 15.4478 11.668 16.5518C11.8894 17.2765 12.1646 17.9663 12.4844 18.6143C12.7125 19.0762 12.9639 19.5162 13.2373 19.9316C16.8695 19.7783 19.7798 16.8687 19.9326 13.2363C19.488 12.9433 19.0155 12.6743 18.5176 12.4336C18.9337 11.7393 19.4285 11.0562 20 10.4004C20.3383 10.7885 20.6476 11.1879 20.9316 11.5918C21.5321 11.2946 22.1642 11.0343 22.8232 10.8164C22.4065 10.1863 21.936 9.57147 21.4131 8.98145C22.7952 7.76576 24.3015 6.89304 25.7773 6.37695ZM8.98145 21.4131C9.73265 22.0788 10.5236 22.6596 11.3359 23.1523C12.045 23.5826 12.77 23.9462 13.5 24.2383V24.3105C13.5059 24.2895 13.5116 24.2681 13.5176 24.2471C14.081 24.4713 14.6477 24.6506 15.2109 24.7891C15.3494 25.3523 15.5297 25.919 15.7539 26.4824C14.9036 26.7261 13.9932 26.8923 13.0391 26.9619C13.0827 26.364 13.1648 25.7832 13.2793 25.2236C12.6536 24.9814 12.0328 24.6917 11.4229 24.3564C11.2249 25.1924 11.0924 26.066 11.0352 26.9658C9.30948 26.849 7.72359 26.4224 6.37891 25.7764C6.89503 24.301 7.7661 22.7947 8.98145 21.4131ZM35.3613 15.2822C37.0558 16.5766 37.9999 18.2483 38 20C37.9999 21.7512 37.056 23.4225 35.3623 24.7168C34.731 23.0808 33.7435 21.464 32.4355 19.999C33.7431 18.5342 34.7303 16.918 35.3613 15.2822ZM4.63867 15.2832C5.26975 16.9189 6.25603 18.5353 7.56348 20C6.25593 21.4647 5.26888 23.0811 4.6377 24.7168C2.94403 23.4225 2.00011 21.7512 2 20C2.00011 18.2485 2.94453 16.5776 4.63867 15.2832ZM28.9658 13.0332C30.6914 13.1501 32.2775 13.5776 33.6221 14.2236C33.1057 15.6988 32.2329 17.2044 31.0176 18.5859C30.2719 17.9252 29.4876 17.3469 28.6816 16.8564C27.9673 16.4218 27.2357 16.056 26.5 15.7617V15.6895C26.494 15.7108 26.4885 15.7326 26.4824 15.7539C25.9193 15.5298 25.353 15.3494 24.79 15.2109C24.6516 14.6476 24.4704 14.0811 24.2461 13.5176C25.0967 13.2738 26.0075 13.1077 26.9619 13.0381C26.9183 13.6356 26.8372 14.2162 26.7227 14.7754C27.3484 15.0177 27.9691 15.3082 28.5791 15.6436C28.7771 14.8074 28.9086 13.9332 28.9658 13.0332ZM14.2236 6.37793C15.6987 6.89421 17.2045 7.76625 18.5859 8.98145C17.9251 9.7272 17.3478 10.5122 16.8574 11.3184C16.4227 12.0328 16.0561 12.7642 15.7617 13.5H15.6924C15.7125 13.5057 15.7329 13.5109 15.7529 13.5166C15.5285 14.0803 15.3485 14.6474 15.21 15.2109C14.6472 15.3493 14.0815 15.5299 13.5186 15.7539C13.2748 14.9033 13.1087 13.9925 13.0391 13.0381C13.6369 13.0817 14.2178 13.1618 14.7773 13.2764C15.0196 12.651 15.3094 12.0305 15.6445 11.4209C14.8083 11.2231 13.9342 11.0924 13.0342 11.0352C13.1511 9.30925 13.5775 7.72271 14.2236 6.37793ZM27.7578 5.89453C29.8069 5.6199 31.5645 6.10941 32.7275 7.27246C33.8902 8.43544 34.3799 10.1926 34.1055 12.2412C32.5718 11.564 30.8249 11.1418 28.9697 11.0312C28.8592 9.17566 28.4352 7.42847 27.7578 5.89453ZM7.27148 7.27246C8.43485 6.10924 10.1935 5.61945 12.2432 5.89453C11.5657 7.42854 11.1418 9.17554 11.0312 11.0312C9.17609 11.1417 7.4292 11.5641 5.89551 12.2412C5.62111 10.1927 6.10893 8.43539 7.27148 7.27246ZM20 2C21.7513 2 23.4224 2.94396 24.7168 4.6377C23.081 5.26874 21.4649 6.25592 20 7.56348C18.5354 6.25608 16.9188 5.26976 15.2832 4.63867C16.5776 2.94455 18.2485 2 20 2Z" />
    </svg>
  ),
};

/* ---------- the hero: three record cards, stepped right and up ---------- */

const DownloadGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v12" />
    <path d="m8 11 4 4 4-4" />
    <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
  </svg>
);

const AlertGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3Z" /></svg>
);

function RecordCard({ record, depth }: { record: Record; depth: 1 | 2 | 3 }) {
  const seat = [s.c1, s.c2, s.c3][depth - 1];
  return (
    <div className={`${s.stkc} ${seat}`}>
      <div className={s.skhead}>
        <span className={s.skmark}>{marks[record.logo]}</span>
        <span className={s.skname}>{record.name}</span>
      </div>
      <div className={s.skm}>
        <div><em>Status</em><span>{record.status}</span></div>
        <div><em>Cover</em><span>{record.cover}</span></div>
        <div><em>Exposure</em><span>{record.exposure}</span></div>
        <div className={s.src2}>
          <em>Source</em>
          <span>{record.sourceIcon ? <DownloadGlyph /> : null}Ledger</span>
        </div>
      </div>
      <div className={s.sks}>Claims <u>{record.claims}</u></div>
      {record.rows.map((r) => (
        <Fragment key={r.text}>
          {r.group ? <div className={s.skg}>{r.group}</div> : null}
          <div className={s.skr}>
            <span className={r.dashed ? `${s.o} ${s.dot}` : s.o}></span>
            <span className={s.t}>{r.text}</span>
            <span className={s.age}>{r.alert ? <AlertGlyph /> : null}{r.age}</span>
          </div>
        </Fragment>
      ))}
      <div className={s.skq}>
        {record.trail.map((w) => (
          <div key={w}><i></i><u style={{ width: w }}></u></div>
        ))}
      </div>
    </div>
  );
}

export function RecordStack() {
  return (
    <div className={s.stk} aria-hidden="true">
      {records.map((r, i) => (
        <RecordCard record={r} depth={(i + 1) as 1 | 2 | 3} key={r.name} />
      ))}
    </div>
  );
}

/* ---------- the people in the specimens ---------- */

/* Portraits, named for the claim they belong to. The Nordvik claim carries
   four: the one on the record itself, which is also the face beside it in the
   queue, and the three people working it who stack on the record's footer.

   .hf .av is a 22px circle with overflow:hidden and .hf .av img already covers
   it, so these need no styling of their own; .lg is the 30px variant. */
const portrait = {
  nordvik: "/img/people/nordvik-1.jpg",
  baltic: "/img/people/baltic.jpg",
  meridian: "/img/people/meridian.jpg",
  onClaim: [
    "/img/people/nordvik-2.jpg",
    "/img/people/nordvik-3.png",
    "/img/people/nordvik-4.jpg",
  ],
};

/** an avatar: the portrait where there is one, the initials where there is not */
const Av = ({ src, initials, lg }: { src?: string; initials: string; lg?: boolean }) => {
  const px = lg ? 30 : 22;
  return (
    <span className={lg ? `${s.av} ${s.lg}` : s.av}>
      {src ? <Image src={src} alt="" width={px} height={px} /> : initials}
    </span>
  );
};

/* ---------- the four archetype specimens ---------- */

/* NOTE ON .nm — the source markup writes the company name as
   <span class="nm"> in two of the three queue rows and in the record header,
   but the CSS styles the name through .who b / .t b. .nm is styled by nothing
   that wins, so those names fall through to the sub-line rule and render as
   small mono, wrapped. It is reproduced here exactly as the source has it; see
   the note in the port report. Changing the three spans to <b> is the fix. */

/** 01 — a queue: toolbar, three rows, status pills, right-aligned figures */
function Queue() {
  return (
    <div className={s.hf}>
      <div className={s.bar}>
        <span className={s.srch}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
          Search claims
        </span>
        <span className={s.chip}>Due first</span>
        <span className={`${s.btn2} ${s.pri}`}>New</span>
      </div>
      <div className={s.rows}>
        <div className={s.row}>
          <Av src={portrait.nordvik} initials="MI" />
          <span className={s.who}><span className={s.nm}>Nordvik Shipping</span><span>CLM-0121 · 2 days left</span></span>
          <span className={`${s.pill3} ${s.crit}`}>Urgent</span>
          <span className={s.amt}>20,600.00</span>
        </div>
        <div className={s.row}>
          <Av src={portrait.baltic} initials="DO" />
          <span className={s.who}><b>Baltic Freight Group</b><span>CLM-0114 · 6 days left</span></span>
          <span className={`${s.pill3} ${s.warn}`}>Due soon</span>
          <span className={s.amt}>32,160.00</span>
        </div>
        <div className={s.row}>
          <Av src={portrait.meridian} initials="AF" />
          <span className={s.who}><span className={s.nm}>Meridian Cargo</span><span>CLM-0108 · 19 days left</span></span>
          <span className={s.pill3}>Assessed</span>
          <span className={s.amt}>14,800.00</span>
        </div>
      </div>
    </div>
  );
}

/** 02 — a record: avatar, title, status, two stat cards, stacked avatars, actions */
function RecordPage() {
  return (
    <div className={s.hf}>
      <div className={s.rec2}>
        <Av src={portrait.nordvik} initials="NS" lg />
        <span className={s.t}><span className={s.nm}>Nordvik Shipping</span><span>CLM-0121 · opened 14 Aug</span></span>
        <span className={`${s.pill3} ${s.ok}`}>Assessed</span>
      </div>
      <div className={s.stats}>
        <div className={s.stat}><em>Assessed payable</em><b>20,600.00</b></div>
        <div className={s.stat}><em>Recovered</em><b className={s.mut}>—</b></div>
      </div>
      <div className={s.meta2}>
        <span className={s.avs}>
          <Av src={portrait.onClaim[0]} initials="MI" />
          <Av src={portrait.onClaim[1]} initials="DO" />
          <Av src={portrait.onClaim[2]} initials="AF" />
        </span>
        <span className={s.acts2}>
          <span className={s.btn2}>Evidence</span>
          <span className={`${s.btn2} ${s.pri}`}>Settle</span>
        </span>
      </div>
    </div>
  );
}

/** 03 — a decision: the figure, the evidence behind it, and what cannot be undone */
function Decision() {
  const tick = <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>;
  return (
    <div className={s.hf}>
      <div>
        <div className={s.big}>128,400.00</div>
        <div className={s.bigsub}>Payout to Baltic Freight Group · MAD</div>
      </div>
      <div className={s.ev}>
        <div>{tick}<span>Survey report attached</span><em>2 files</em></div>
        <div>{tick}<span>Liability confirmed</span><em>14 Aug</em></div>
        <div className={s.pend}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /></svg>
          <span>Second approver</span><em>required</em>
        </div>
      </div>
      <div className={s.meta2}>
        <span className={s.warn2}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" /><path d="M12 17h.01" />
          </svg>
          Cannot be reversed
        </span>
        <span className={s.acts2}>
          <span className={s.btn2}>Hold</span>
          <span className={`${s.btn2} ${s.pri}`}>Approve</span>
        </span>
      </div>
    </div>
  );
}

/** 04 — reconciliation: two columns that must agree, and the gap named */
function Reconciliation() {
  const side = (label: string, lines: [string, string][], total: string) => (
    <div>
      <em>{label}</em>
      {lines.map(([k, v]) => (
        <span className={s.ln} key={k}><span>{k}</span><b>{v}</b></span>
      ))}
      <span className={s.tot}><span>Total</span><b>{total}</b></span>
    </div>
  );
  return (
    <div className={s.hf}>
      <div className={s.cols2}>
        {side("Assessed", [["Cargo", "96,400.00"], ["Survey", "8,200.00"], ["Handling", "23,800.00"]], "128,400.00")}
        {side("Paid", [["Cargo", "96,400.00"], ["Survey", "8,200.00"], ["Handling", "22,560.00"]], "127,160.00")}
      </div>
      <div className={s.diff2}><span>Unreconciled</span><b>1,240.00</b></div>
    </div>
  );
}

/** in the order the quadrant reads */
export const specimens = [Queue, RecordPage, Decision, Reconciliation];
