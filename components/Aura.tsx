/* Three large blurred coral pools behind everything, fixed to the viewport.
   It sits immediately before .wrap and belongs to the layout, once — it is
   easy to miss, and without it every page reads flat. */
export default function Aura() {
  return (
    <div className="aura">
      <i className="a1" />
      <i className="a2" />
      <i className="a3" />
    </div>
  );
}
