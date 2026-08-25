import Link from "next/link";

/* Teams */
export default function WhoItIsFor() {
  return (
    <>
      <div className="band">
        <div className="sec" id="teams">
          <div className="srail"><span className="l">Who it is for</span><span className="r">Claude Design users, and whoever acts on the output</span></div>

          <div className="shead">
            <h2>You are paying for less rework.</h2>
            <div>
              <p className="lede">Everyone generating business UI already has components. What they lack is anything that makes the output true underneath. The standard here is what a real team has to undo before it can build.</p>
              <Link className="snum" href="/pricing"><i>06</i><u>What it costs →</u></Link>
            </div>
          </div>

          <div className="wtab">
            <div className="wcols wthead"><span>Who</span><span>Today</span><span>With Reckon</span></div>
            <div className="wcols wtr">
              <div className="role"><i>Design</i><b>The states nobody asked for arrive drawn.</b></div>
              <div className="now"><span className="lab">Today</span>Twelve happy-path frames, then a month of edge cases found in review.</div>
              <div className="aft"><span className="lab">With Reckon</span>Loading, empty, filtered-to-nothing, error and permission-denied already exist.</div>
            </div>
            <div className="wcols wtr">
              <div className="role"><i>Engineering</i><b>A handoff you can build straight from.</b></div>
              <div className="now"><span className="lab">Today</span>Reverse-engineering intent from a picture, then asking which figures were ever true.</div>
              <div className="aft"><span className="lab">With Reckon</span>Routes exist and status values are a closed set. Read the logic, not the arithmetic.</div>
            </div>
            <div className="wcols wtr">
              <div className="role"><i>The business</i><b>Approval that means approval.</b></div>
              <div className="now"><span className="lab">Today</span>A stakeholder signs off on a mockup whose totals do not add up — or sends it back.</div>
              <div className="aft"><span className="lab">With Reckon</span>Errors surface in generation, where they cost nothing to fix.</div>
            </div>
          </div>
          <div className="audfoot">
            <span>Built for the software nobody demos — <b>dense, record-centric tools where people act on a queue before a clock runs out</b></span>
            <span>No runtime · no lock-in</span>
          </div>
        </div>
      </div>
    </>
  );
}
