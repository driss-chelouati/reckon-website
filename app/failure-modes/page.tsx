import type { Metadata } from "next";
import FailField from "@/components/fx/FailField";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import "./failure-modes.css";

export const metadata: Metadata = {
  title: "Failure modes — what goes wrong, and the rule that closes it",
};

export default function FailureModesPage() {
  return (
    <>
      <div className="band hband">
        <div className="fhero rin">
          <FailField />
          <div className="srail"><span className="l">Failure modes</span><span className="r">What goes wrong · and the rule that closes it</span></div>
          <h1>Every rule exists<br />because something broke.</h1>
          <p className="lede">These are not hypotheticals. Each is a specific way generated business software goes wrong underneath a surface that looks entirely finished — and each has a rule written against it. Each is shown here as a working screen.</p>


          <div className="findex">
            <a href="#m01"><i>01</i><span>A total nobody can trace</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m02"><i>02</i><span>A list that does not execute its own title</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m03"><i>03</i><span>A count that counts the wrong thing</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m04"><i>04</i><span>A summary whose worst rows are invisible</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m05"><i>05</i><span>A counter padded past its own data</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m06"><i>06</i><span>A control that lies about when it applies</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m07"><i>07</i><span>A screen with no way out</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m08"><i>08</i><span>Breadcrumbs that lead nowhere</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m09"><i>09</i><span>A collapsed navigation that empties the screen</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
            <a href="#m10"><i>10</i><span>A menu clipped at the edge of a scrolling table</span><em>See example <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></em></a>
          </div>
        </div>
      </div>

        <div className="band">
          <div className="fm" id="m01">
            <div className="fmhd">
              <div><div className="fmn">Mode 01</div><h2>A total nobody can trace</h2></div>
              <p className="sym">A figure sitting above the rows it claims to summarise, written as a literal. It looks calculated, so <b>nobody checks it until a customer does</b>.</p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Assessed payable · by month</div><div className="k2 bad">$268,500.00</div>
                  <div className="bc"><div className="bcb"><svg viewBox="0 0 260 104" preserveAspectRatio="none" aria-hidden="true"><path className="gr" d="M0,26 H260 M0,52 H260 M0,78 H260" /><path className="ar" d="M0.0,64.5 L37.1,49.9 L74.3,58.2 L111.4,35.4 L148.6,43.7 L185.7,22.9 L222.9,31.2 L260.0,12.5 L260.0,104.0 L0,104.0 Z" fill="rgba(249,122,92,.11)" /><path className="ln2" d="M0.0,64.5 L37.1,49.9 L74.3,58.2 L111.4,35.4 L148.6,43.7 L185.7,22.9 L222.9,31.2 L260.0,12.5" stroke="var(--fire-hi)" /><circle className="dt" cx="258.0" cy="12.5" r="2.6" fill="var(--fire-hi)" /></svg></div>
                    <div className="bcy"><span>90k</span><span>45k</span><span>0</span></div></div>
                  <div className="note2 warn">Credit notes were never applied. The last three months are overstated, and the header is typed.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Assessed payable · by month</div><div className="k2">$256,482.00</div>
                  <div className="bc"><div className="bcb"><svg viewBox="0 0 260 104" preserveAspectRatio="none" aria-hidden="true"><path className="gr" d="M0,26 H260 M0,52 H260 M0,78 H260" /><path className="ar" d="M0.0,64.5 L37.1,49.9 L74.3,58.2 L111.4,35.4 L148.6,43.7 L185.7,29.1 L222.9,40.6 L260.0,44.7 L260.0,104.0 L0,104.0 Z" fill="rgba(249,122,92,.11)" /><path className="ln2" d="M0.0,64.5 L37.1,49.9 L74.3,58.2 L111.4,35.4 L148.6,43.7 L185.7,29.1 L222.9,40.6 L260.0,44.7" stroke="var(--fire-hi)" /><path d="M0.0,64.5 L37.1,49.9 L74.3,58.2 L111.4,35.4 L148.6,43.7 L185.7,22.9 L222.9,31.2 L260.0,12.5" fill="none" stroke="rgba(242,103,138,.55)" strokeWidth="1.4" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" /><circle className="dt" cx="258.0" cy="44.7" r="2.6" fill="var(--fire-hi)" /></svg></div>
                    <div className="bcy"><span>90k</span><span>45k</span><span>0</span></div></div>
                  <div className="note2">Credit notes applied — the tail turns down. The header is the sum of the series drawn.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>Every figure names the data it comes from. Filter the set and the figure moves, because it was never independent.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m02">
            <div className="fmhd">
              <div><div className="fmn">Mode 02</div><h2>A list that does not execute its own title</h2></div>
              <p className="sym">The heading says <b>Overdue invoices</b>. The list is every invoice, sorted by date. The title was written as a label rather than as a filter.</p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Overdue invoices</div>
                  <div className="tbl2">
                    <div className="th2" style={{ gridTemplateColumns: "80px minmax(0,1fr) 84px" }}><span>Invoice</span><span>Customer</span><span>Status</span></div>
                    <div className="tr2" style={{ gridTemplateColumns: "80px minmax(0,1fr) 84px" }}><span className="id3">INV-4468</span><span>Sable & Voss</span><span className="tag2 warn">Overdue</span></div>
                    <div className="tr2" style={{ gridTemplateColumns: "80px minmax(0,1fr) 84px" }}><span className="id3">INV-4452</span><span>Kestrel Pharma</span><span className="tag2 warn">Overdue</span></div>
                    <div className="tr2" style={{ gridTemplateColumns: "80px minmax(0,1fr) 84px" }}><span className="id3">INV-4463</span><span>Ostara Glassworks</span><span className="tag2 paid">Paid</span></div>
                  </div>
                  <div className="note2 warn">One of these is not overdue.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Overdue invoices</div>
                  <div className="tbl2">
                    <div className="th2" style={{ gridTemplateColumns: "80px minmax(0,1fr) 84px" }}><span>Invoice</span><span>Customer</span><span>Status</span></div>
                    <div className="tr2" style={{ gridTemplateColumns: "80px minmax(0,1fr) 84px" }}><span className="id3">INV-4468</span><span>Sable & Voss</span><span className="tag2 warn">Overdue</span></div>
                    <div className="tr2" style={{ gridTemplateColumns: "80px minmax(0,1fr) 84px" }}><span className="id3">INV-4452</span><span>Kestrel Pharma</span><span className="tag2 warn">Overdue</span></div>
                  </div>
                  <div className="note2">The title is the filter. The rows are what it returned.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>A titled list is a query. The title states the filter, and the rows are what the filter returned — never a superset of it.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m03">
            <div className="fmhd">
              <div><div className="fmn">Mode 03</div><h2>A count that counts the wrong thing</h2></div>
              <p className="sym">A filter reading <b>All statuses (11)</b>, where 11 was the number of records. It looks like a count, so it is never questioned.</p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="tb2">
                    <span className="fld"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg> Search claims</span>
                    <span className="sel">All statuses (11) <u></u></span>
                    <span className="cnt bad">11 results</span>
                  </div>
                  <div className="note2 warn">Eleven was the number of records, not of statuses.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="tb2">
                    <span className="fld"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg> Search claims</span>
                    <span className="sel">All statuses (6) <u></u></span>
                    <span className="cnt">19 results</span>
                  </div>
                  <div className="note2">Six values in the enum; nineteen rows drawn.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>A count names its set. If it cannot say which array it counted, it does not render.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m04">
            <div className="fmhd">
              <div><div className="fmn">Mode 04</div><h2>A summary whose worst rows are invisible</h2></div>
              <p className="sym">Sorted by recency, because recency is what the data had. <b>The claim that expired last week is on page four</b>, below three that are not urgent at all.</p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Claims by status</div>
                  <div className="sb">
                    <i style={{ flex: "34", background: "rgba(255,255,255,.16)" }}></i>
                    <i style={{ flex: "28", background: "rgba(255,255,255,.11)" }}></i>
                    <i style={{ flex: "24", background: "rgba(255,255,255,.08)" }}></i>
                    <i style={{ flex: "6", background: "rgba(255,255,255,.06)" }}></i>
                  </div>
                  <div className="lgd">
                    <div><u style={{ background: "rgba(255,255,255,.16)" }}></u>Awaiting documents<b>34</b></div>
                    <div><u style={{ background: "rgba(255,255,255,.11)" }}></u>Awaiting survey<b>28</b></div>
                    <div><u style={{ background: "rgba(255,255,255,.08)" }}></u>Ready for decision<b>24</b></div>
                    <div><u style={{ background: "rgba(255,255,255,.06)" }}></u>Time-barred<b>6</b></div>
                  </div>
                  <div className="note2 warn">Alphabetical. The six that expired are last and unmarked.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Claims by status</div>
                  <div className="sb">
                    <i style={{ flex: "6", background: "var(--pen)" }}></i>
                    <i style={{ flex: "24", background: "rgba(249,122,92,.5)" }}></i>
                    <i style={{ flex: "28", background: "rgba(255,255,255,.11)" }}></i>
                    <i style={{ flex: "34", background: "rgba(255,255,255,.07)" }}></i>
                  </div>
                  <div className="lgd">
                    <div className="sev"><u style={{ background: "var(--pen)" }}></u>Time-barred<b style={{ color: "var(--pen)" }}>6</b></div>
                    <div><u style={{ background: "rgba(249,122,92,.5)" }}></u>Ready for decision<b>24</b></div>
                    <div><u style={{ background: "rgba(255,255,255,.11)" }}></u>Awaiting survey<b>28</b></div>
                    <div><u style={{ background: "rgba(255,255,255,.07)" }}></u>Awaiting documents<b>34</b></div>
                  </div>
                  <div className="note2">Severity leads. Volume is the tiebreak.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>Severity orders an operational list; recency is a tiebreak. The screen leads on what the operator must act on first.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m05">
            <div className="fmhd">
              <div><div className="fmn">Mode 05</div><h2>A counter padded past its own data</h2></div>
              <p className="sym">A footer reading <b>Page 1 / 2</b> on a set of one, because the page count was rounded rather than derived. Page two is blank.</p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Results</div>
                  <div className="tbl2">
                    <div className="th2" style={{ gridTemplateColumns: "82px minmax(0,1fr) 78px" }}><span>Invoice</span><span>Customer</span><span className="num2">Amount</span></div>
                    <div className="tr2" style={{ gridTemplateColumns: "82px minmax(0,1fr) 78px" }}><span className="id3">INV-4471</span><span>Vondel Machinery</span><span className="num2">$24,100.00</span></div>
                  </div>
                  <div className="pg"><span>Showing 1–1 of 1</span>
                    <span className="pgs"><span className="on">1</span><span className="bad">2</span><span className="gh">›</span></span></div>
                  <div className="note2 warn">Page two is empty. The count was rounded, not derived.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Results</div>
                  <div className="tbl2">
                    <div className="th2" style={{ gridTemplateColumns: "82px minmax(0,1fr) 78px" }}><span>Invoice</span><span>Customer</span><span className="num2">Amount</span></div>
                    <div className="tr2" style={{ gridTemplateColumns: "82px minmax(0,1fr) 78px" }}><span className="id3">INV-4471</span><span>Vondel Machinery</span><span className="num2">$24,100.00</span></div>
                  </div>
                  <div className="pg"><span>Showing 1–1 of 1</span>
                    <span className="pgs"><span className="on">1</span></span></div>
                  <div className="note2">One page, because there is one page of data.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>This one is compiled rather than stated. Pagination derives its range and its total from the real set, so there is nowhere to type a number.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m06">
            <div className="fmhd">
              <div><div className="fmn">Mode 06</div><h2>A control that lies about when it applies</h2></div>
              <p className="sym">A confirmation offering to void an invoice <b>the data settled fourteen minutes earlier</b>. The row looked like every other row.</p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">INV-4463 · Ostara Glassworks</div>
                  <div className="rows2">
                    <div className="rw"><span>Status</span><span className="tag2 paid">Settled 14 min ago</span></div>
                  </div>
                  <div className="ddwrap"><div className="dd">
                    <a href="#">Download PDF</a>
                    <a href="#">Send reminder</a>
                    <a className="danger" href="#">Void invoice</a>
                  </div></div>
                  <div className="note2 warn">Voiding is offered on a record the data settled.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">INV-4463 · Ostara Glassworks</div>
                  <div className="rows2">
                    <div className="rw"><span>Status</span><span className="tag2 paid">Settled 14 min ago</span></div>
                  </div>
                  <div className="ddwrap"><div className="dd">
                    <a href="#">Download PDF</a>
                    <a href="#">Issue credit note</a>
                    <a className="off" href="#">Void invoice <em>settled</em></a>
                  </div></div>
                  <div className="note2">The menu is read from the record, not from the row.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>Status is data; derived state is not status. The action is read from the record, and the count above stops calling it actionable.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m07">
            <div className="fmhd">
              <div><div className="fmn">Mode 07</div><h2>A screen with no way out</h2></div>
              <p className="sym">A second-factor prompt with no recovery link, no support route and no way back to sign-in. <b>Correct for the person who has their phone, and a dead end for everybody else.</b></p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Two-factor</div>
                  <div className="fo">
                    <label>Code from your authenticator</label>
                    <div className="inp">••••••</div>
                    <div className="acts"><span className="bt3">Verify</span></div>
                  </div>
                  <div className="note2 warn">No recovery, no support, no way back to sign-in.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Two-factor</div>
                  <div className="fo">
                    <label>Code from your authenticator</label>
                    <div className="inp">••••••</div>
                    <div className="acts"><span className="bt3">Verify</span>
                      <span className="lnk on">Use a backup code</span><span className="lnk">Back to sign-in</span></div>
                  </div>
                  <div className="note2">Every screen states its exits, including this one.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>Every screen states its exits. A surface that can trap somebody is not finished, however well the happy path renders.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m08">
            <div className="fmhd">
              <div><div className="fmn">Mode 08</div><h2>Breadcrumbs that lead nowhere</h2></div>
              <p className="sym">A trail rendered from the URL rather than from real routes. <b>Half the segments resolve to nothing</b> — and it is always the one you wanted.</p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Claim detail</div>
                  <div className="bcr"><a href="#">Home</a><span className="sep">/</span>
                    <a className="dead" href="#">Claims</a><span className="sep">/</span>
                    <a className="dead" href="#">2026</a><span className="sep">/</span>
                    <span className="cur">CLM-2026-0121</span></div>
                  <div className="note2 warn">Two of those segments are not routes. Both 404.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Claim detail</div>
                  <div className="bcr"><a href="#">Work queue</a><span className="sep">/</span>
                    <a href="#">Ready for decision</a><span className="sep">/</span>
                    <span className="cur">CLM-2026-0121</span></div>
                  <div className="note2">Every segment is a route. The current page is text.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>Breadcrumbs are navigation, not decoration. Every segment is a route that exists, and the current page is text rather than a link.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m09">
            <div className="fmhd">
              <div><div className="fmn">Mode 09</div><h2>A collapsed navigation that empties the screen</h2></div>
              <p className="sym">The shell hides its own content when the sidebar collapses, because the layout assumed a fixed width. <b>Nothing is wrong with the data. The screen is simply blank.</b></p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Sidebar collapsed</div>
                  <div className="shell">
                    <div className="rail3"><u className="on"></u><u></u><u></u><u></u></div>
                    <div className="main3 blank">Nothing rendered</div>
                  </div>
                  <div className="note2 warn">The data is intact. The layout assumed a fixed width.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Sidebar collapsed</div>
                  <div className="shell">
                    <div className="rail3"><u className="on"></u><u></u><u></u><u></u></div>
                    <div className="main3">
                      <div className="cap3"><i></i><i></i><i></i></div>
                      <div className="ln w2"></div><div className="ln w3"></div><div className="ln w1"></div>
                    </div>
                  </div>
                  <div className="note2">Collapsed is a state of the shell, and it is verified.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>A shell is a component with states. Expanded, collapsed and every width between are verified, from phone width to wide desktop.</p></div>
          </div>
        </div>

        <div className="band">
          <div className="fm" id="m10">
            <div className="fmhd">
              <div><div className="fmn">Mode 10</div><h2>A menu clipped at the edge of a scrolling table</h2></div>
              <p className="sym">The last row’s actions open inside an overflow container and are cut in half. <b>The action exists, and cannot be reached.</b></p>
            </div>
            <div className="fmdemo">
              <div className="pn">
                <div className="pnh"><u></u>As generated</div>
                <div className="pnb"><div className="kl">Claims · scrolling</div>
                  <div className="clip cut">
                    <div className="inner3"><div className="row3"><span>CLM-2026-0118</span><em>⋯</em></div><div className="row3"><span>CLM-2026-0119</span><em>⋯</em></div><div className="row3"><span>CLM-2026-0120</span><em>⋯</em></div><div className="row3"><span>CLM-2026-0121</span><em>⋯</em></div></div>
                    <div className="mn"><a href="#">Open claim</a><a href="#">Assign</a><a href="#">Escalate</a></div>
                  </div>
                  <div className="note2 warn">The last row’s menu is cut by its own container.</div></div>
              </div>
              <div className="pn ok">
                <div className="pnh"><u></u>With the rules</div>
                <div className="pnb"><div className="kl">Claims · scrolling</div>
                  <div className="clip flip">
                    <div className="inner3"><div className="row3"><span>CLM-2026-0118</span><em>⋯</em></div><div className="row3"><span>CLM-2026-0119</span><em>⋯</em></div><div className="row3"><span>CLM-2026-0120</span><em>⋯</em></div><div className="row3"><span>CLM-2026-0121</span><em>⋯</em></div></div>
                    <div className="mn"><a href="#">Open claim</a><a href="#">Assign</a><a href="#">Escalate</a></div>
                  </div>
                  <div className="note2">Portalled out of the scroll region, and flipped to fit.</div></div>
              </div>
            </div>
            <div className="fmrule"><u>The rule that closes it</u><p>Overlays are portalled out of scrolling regions, and flipped when they would otherwise leave the viewport.</p></div>
          </div>
        </div>

      <Faq num="11" href="#top" label="Back to the top →" />
      <ClosingCta
        field
        headline={
          <>
            A plausible number
            <br />
            is worse than none.
          </>
        }
        lede="None of this is styling. It is the part a design or development team has to undo before they can build on what came out."
        primary={{ href: "/rules", label: "Read the rules", tear: "Read the rules" }}
        secondary={{ href: "/products", label: "See a worked product" }}
      />
    </>
  );
}
