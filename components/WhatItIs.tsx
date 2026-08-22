export default function WhatItIs() {
  return (
    <div className="band">
      <div className="mani" id="what-it-is">
        <div className="srail">
          <span className="l">What it is</span>
          <span className="r">Rules · shells · tokens</span>
        </div>
        <p className="manih">
          <b>A design system whose product is the rules.</b>
          {' '}It ships components and tokens, but those are the easy part. What it actually carries is a rules layer that tells a design agent how to assemble a screen and derive the numbers on it — for dense, record-centric software where people act on a queue before a clock runs out.
        </p>
        <div className="figs">
          <div className="fig">
            <div className="n">FIG 0.1</div>
            <div className="figart">
              <svg viewBox="0 0 300 300" aria-hidden="true">
                <path className="ln dim fillp" d="M150,180 L268,240 L150,300 L32,240 Z" />
                <path className="ln dim fillp" d="M150,150 L268,210 L150,270 L32,210 Z" />
                <path className="ln dim fillp" d="M150,120 L268,180 L150,240 L32,180 Z" />
                <path className="ln dim fillp plate" d="M150,90 L268,150 L150,210 L32,150 Z" />
                <path className="ln dim" d="M32,150 V240 M268,150 V240 M150,210 V300" />
                <path className="beam" fill="url(#g1)" d="M62,150 L150,104 L238,150 L150,196 Z" />
                <g className="lift">
                  <path className="ln hot fillp" d="M150,47 L254,100 L150,153 L46,100 Z" />
                  <path className="ln ring" style={{ animationDelay: "0.00s" }} d="M150,63 L222,100 L150,137 L78,100 Z" />
                  <path className="ln ring" style={{ animationDelay: "0.22s" }} d="M150,78 L194,100 L150,122 L106,100 Z" />
                  <circle className="stamp" cx="150" cy="100" r="5" fill="var(--fire-hi)" />
                </g>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(249,122,92,.30)" />
                    <stop offset="1" stopColor="rgba(249,122,92,0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>Every figure names its data</h3>
            <p>
              One convention runs through everything. Status is data; derived state is not — overdue is computed, never stored. And a new status value is never absorbed on the model’s judgement. It stops and asks.
            </p>
          </div>
          <div className="fig">
            <div className="n">FIG 0.2</div>
            <div className="figart">
              <svg viewBox="0 0 300 300" aria-hidden="true">
                <g className="sh2">
                  <path className="ln dim fillp" d="M150,176 L268,236 L150,296 L32,236 Z" />
                </g>
                <path className="ln dim" d="M32,156 V236 M268,156 V236 M150,216 V296" />
                <g className="sh1">
                  <path className="ln fillp" d="M150,96 L268,156 L150,216 L32,156 Z" />
                  <path className="ln hot sbar" fill="rgba(249,122,92,.10)" d="M32,156 L92,126 L92,156 L32,186 Z" />
                  <path className="ln dim" d="M92,126 L150,97" />
                  <path className="ln srow" style={{ animationDelay: "0.00s" }} d="M110,163 L186,125" />
                  <path className="ln srow" style={{ animationDelay: "0.14s" }} d="M128,172 L204,134" />
                  <path className="ln srow" style={{ animationDelay: "0.28s" }} d="M146,181 L222,143" />
                </g>
                <g className="sh3">
                  <path className="ln dim fillp" d="M150,45 L230,86 L150,127 L70,86 Z" />
                  <path className="ln hot sbar" style={{ animationDelay: ".2s" }} d="M112,86 L150,67 L188,86" />
                </g>
              </svg>
            </div>
            <h3>Rules for the shell, and room inside them</h3>
            <p>
              Specialised guidance for the parts every business app grows: shells, work queues, record pages, decision surfaces. But a system that only constrains produces identical products — so every shell must name three expressive choices, with a reason for each.
            </p>
          </div>
          <div className="fig">
            <div className="n">FIG 0.3</div>
            <div className="figart">
              <svg viewBox="0 0 300 300" aria-hidden="true">
                <g className="shdw" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.02)" d="M150,232 L262,289 L150,290 L38,289 Z" opacity=".8" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "0.0px", ['--dy' as string]: "7.0px", animationDelay: "0.00s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M105.0,138.0 L150.0,161.0 L150.0,208.0 L105.0,185.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M195.0,138.0 L150.0,161.0 L150.0,208.0 L195.0,185.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.00s" }} d="M150.0,115.0 L195.0,138.0 L150.0,161.0 L105.0,138.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.00s" }} d="M105.0,138.0 L150.0,161.0" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "62.0px", ['--dy' as string]: "37.0px", animationDelay: "0.03s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M150.0,161.0 L195.0,184.0 L195.0,231.0 L150.0,208.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M240.0,161.0 L195.0,184.0 L195.0,231.0 L240.0,208.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.09s" }} d="M195.0,138.0 L240.0,161.0 L195.0,184.0 L150.0,161.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.09s" }} d="M150.0,161.0 L195.0,184.0" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "-62.0px", ['--dy' as string]: "37.0px", animationDelay: "0.06s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M60.0,161.0 L105.0,184.0 L105.0,231.0 L60.0,208.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M150.0,161.0 L105.0,184.0 L105.0,231.0 L150.0,208.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.17s" }} d="M105.0,138.0 L150.0,161.0 L105.0,184.0 L60.0,161.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.17s" }} d="M60.0,161.0 L105.0,184.0" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "0.0px", ['--dy' as string]: "67.0px", animationDelay: "0.09s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M105.0,184.0 L150.0,207.0 L150.0,254.0 L105.0,231.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M195.0,184.0 L150.0,207.0 L150.0,254.0 L195.0,231.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.26s" }} d="M150.0,161.0 L195.0,184.0 L150.0,207.0 L105.0,184.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.26s" }} d="M105.0,184.0 L150.0,207.0" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "0.0px", ['--dy' as string]: "-67.0px", animationDelay: "0.12s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M105.0,91.0 L150.0,114.0 L150.0,161.0 L105.0,138.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M195.0,91.0 L150.0,114.0 L150.0,161.0 L195.0,138.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.34s" }} d="M150.0,68.0 L195.0,91.0 L150.0,114.0 L105.0,91.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.34s" }} d="M105.0,91.0 L150.0,114.0" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "62.0px", ['--dy' as string]: "-37.0px", animationDelay: "0.15s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M150.0,114.0 L195.0,137.0 L195.0,184.0 L150.0,161.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M240.0,114.0 L195.0,137.0 L195.0,184.0 L240.0,161.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.43s" }} d="M195.0,91.0 L240.0,114.0 L195.0,137.0 L150.0,114.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.43s" }} d="M150.0,114.0 L195.0,137.0" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "-62.0px", ['--dy' as string]: "-37.0px", animationDelay: "0.18s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M60.0,114.0 L105.0,137.0 L105.0,184.0 L60.0,161.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M150.0,114.0 L105.0,137.0 L105.0,184.0 L150.0,161.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.51s" }} d="M105.0,91.0 L150.0,114.0 L105.0,137.0 L60.0,114.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.51s" }} d="M60.0,114.0 L105.0,137.0" />
                </g>
                <g className="cube" style={{ ['--dx' as string]: "0.0px", ['--dy' as string]: "-7.0px", animationDelay: "0.21s" }}>
                  <path className="ln dim" fill="rgba(255,255,255,.018)" d="M105.0,137.0 L150.0,160.0 L150.0,207.0 L105.0,184.0 Z" />
                  <path className="ln dim" fill="rgba(255,255,255,.03)" d="M195.0,137.0 L150.0,160.0 L150.0,207.0 L195.0,184.0 Z" />
                  <path className="ln face" style={{ animationDelay: "0.60s" }} d="M150.0,114.0 L195.0,137.0 L150.0,160.0 L105.0,137.0 Z" />
                  <path className="ln hot seam" style={{ animationDelay: "0.60s" }} d="M105.0,137.0 L150.0,160.0" />
                </g>
              </svg>
            </div>
            <h3>Some rules are compiled, not stated</h3>
            <p>
              Components and tokens you can point at your own brand, packaged so Claude Design picks them up on load. And where a rule can be enforced rather than described, it is — pagination derives its own total, so a footer cannot carry an invented number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
