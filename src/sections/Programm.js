import React from "react";

function Programm() {
  const arr = [];
  const allTds = document.getElementsByTagName("td");
  console.log(allTds);

  // const res = arr.filter((val) => val.innerHTML.include className="tdnew"s(":"));

  return (
    <div className="section section-program" id="program">
      <div className="programhead">
        <div>PRO</div>
        <div>GRA</div>
        <div>MMA</div>
      </div>
      <div className="programbackground">
        <div className="programdate">
          <b>12.AUGUSTS, PiEKTDIENA</b>
        </div>
        <div className="tablecontainer">
          <table className="programtable">
            <tbody>
              <tr>
                <td className="td-new">13:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">14:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">15:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">16:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">17:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">18:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">19:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">20:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">21:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">22:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">23:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">24:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">01:00</td>
                <td>Iesildīšanās</td>
              </tr>
              <tr>
                <td className="td-new">02:00</td>
                <td>Iesildīšanās</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Programm;
