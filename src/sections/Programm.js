import React, { useState } from "react";
import {
  listfriday,
  listsaturday,
  listsunday,
} from "../components/programlist";
function Programm() {
  const [head, setHead] = useState("12 . AUGUSTS, PIEKTDIENA");
  const [list, setList] = useState(listfriday);

  return (
    <div className="section section-program" id="program">
      <div className="programhead">
        <div>PRO</div>
        <div>GRA</div>
        <div>MMA</div>
      </div>

      <div className="programbackground">
        <div className="btnrow">
          <button
            className="btn"
            onClick={() => {
              setHead("12 . AUGUSTS, PIEKTDIENA");
              setList(listfriday);
            }}
          >
            Piektdien 12.08
          </button>
          <button
            className="btn"
            onClick={() => {
              setHead("13 . AUGUSTS, SESTDIENA");
              setList(listsaturday);
            }}
          >
            sestdien 13.08
          </button>
          <button
            className="btn"
            onClick={() => {
              setHead("14 .AUGUSTS, SVĒTDIEN");
              setList(listsunday);
            }}
          >
            Svetdien 14.08
          </button>
        </div>
        <div className="programdate">
          <b>{head}</b>
        </div>
        <div className="tablecontainer">
          <table className="programtable">
            <tbody>
              {list.map((item) => {
                return (
                  <tr key={item.time}>
                    <td className="td-new">{item.time}</td>
                    <td className="td-old">{item.action}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Programm;
