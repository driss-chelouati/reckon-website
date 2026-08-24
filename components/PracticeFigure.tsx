/* The worked-product figure: six stages across the top, four tracks beneath,
   and the summary card. The landing page and /pricing both draw it, byte for
   byte the same in the source. */
export default function PracticeFigure() {
  return (
    <>
      <div className="prac">
        <div className="pin">
          <div className="tl">
            <b style={{ left: "6%" }}>RULES</b>
              <i style={{ left: "6%" }}></i>
              <b style={{ left: "21%" }}>MODEL</b>
              <i style={{ left: "21%" }}></i>
              <b style={{ left: "36%" }}>FIXTURES</b>
              <i style={{ left: "36%" }}></i>
              <b style={{ left: "52%" }}>DERIVE</b>
              <i style={{ left: "52%" }}></i>
              <b style={{ left: "68%" }}>RENDER</b>
              <i style={{ left: "68%" }}></i>
              <b style={{ left: "84%" }}>AUDIT</b>
              <i style={{ left: "84%" }}></i>
              <i style={{ left: "13%", opacity: ".45" }}></i>
              <i style={{ left: "28%", opacity: ".45" }}></i>
              <i style={{ left: "44%", opacity: ".45" }}></i>
              <i style={{ left: "60%", opacity: ".45" }}></i>
              <i style={{ left: "76%", opacity: ".45" }}></i>
              <i style={{ left: "92%", opacity: ".45" }}></i>
          </div>

          <svg className="link2" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
            <path d="M470,238 C560,238 560,318 640,318" />
            <path d="M600,398 C690,398 690,478 770,478" />
          </svg>

          <div className="trk" style={{ top: "118px" }}>
            <div className="lab" style={{ left: "30%" }}><u></u>Work queue <s>✓</s></div>
            <div className="bar2 lit" style={{ left: "30%", width: "26%" }}></div>
            <div className="mk on" style={{ left: "41%" }}></div>
            <div className="sub" style={{ left: "41%" }}>figures name their arrays</div>
            <div className="bar2" style={{ left: "57%", width: "12%" }}></div>
          </div>

          <div className="trk" style={{ top: "230px" }}>
            <div className="lab" style={{ left: "22%" }}><u></u>Claim detail <s>✓</s></div>
            <div className="bar2 lit" style={{ left: "22%", width: "34%" }}></div>
            <div className="mk on" style={{ left: "38%" }}></div>
            <div className="sub" style={{ left: "38%" }}>evidence gates the decision</div>
          </div>

          <div className="trk" style={{ top: "342px" }}>
            <div className="lab" style={{ left: "46%" }}><u></u>Decision <s className="bad">◆</s></div>
            <div className="bar2 lit" style={{ left: "46%", width: "28%" }}></div>
            <div className="mk bad" style={{ left: "60%" }}></div>
            <div className="sub" style={{ left: "60%" }}>liability cap applied</div>
            <div className="bar2 ghost" style={{ left: "76%", width: "16%" }}></div>
          </div>

          <div className="trk" style={{ top: "454px" }}>
            <div className="lab" style={{ left: "62%" }}><u></u>Recovery <s>✓</s></div>
            <div className="bar2 lit" style={{ left: "62%", width: "30%" }}></div>
            <div className="mk on" style={{ left: "78%" }}></div>
            <div className="sub" style={{ left: "78%" }}>every enum value drawn</div>
          </div>

          <div className="pcard">
            <h4>ClaimsDesk</h4>
            <div className="pquote">“I’m an adjuster. I need to see what’s burning down, and I can only act on claims that are actually ready for me.”</div>
            <div className="prow"><u className="on"></u>Screens generated<b>8</b></div>
            <div className="prow sub2">Derived aggregates<b>14</b></div>
            <div className="prow sub2">States exercised<b>9 / 9</b></div>
            <div className="prow sub2">Actions withheld<b>2</b></div>
            <div className="pfoot">One pass · no corrections</div>
          </div>
        </div>
      </div>

      {/* the figure bleeds to the viewport edge, so the band after it needs its
          own air rather than the section rhythm */}
      <div style={{ height: "clamp(64px,7vw,104px)" }} />
    </>
  );
}
