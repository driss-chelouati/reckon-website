import Link from "next/link";
import PracticeFigure from "@/components/PracticeFigure";

/* In practice */
export default function InPractice() {
  return (
    <>
      <div className="band">
        <div className="sec" id="practice" style={{ paddingBottom: "0" }}>
          <div className="srail"><span className="l">In practice</span><span className="r">Judged by what a team must undo</span></div>

          <div className="shead">
            <h2>Output a team can build straight from.</h2>
            <div style={{ paddingBottom: "clamp(4px,1vw,14px)" }}>
              <p className="lede">The brief named a job, not a screen. The rules add what a brief never says out loud: totals name their rows, settled records are not offered actions, routes exist and status values are a closed set. Nobody reverse-engineers intent from a picture.</p>
              <Link className="snum" href="/who-its-for"><i>02</i><u>Who should use this →</u></Link>
            </div>
          </div>
        </div>
      </div>

      <PracticeFigure />
    </>
  );
}
