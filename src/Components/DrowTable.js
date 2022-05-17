import React from "react";

function DrowTable({ param }) {
  return (
    <div className="container">
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="table-wrap">
        {Object.keys(param).map((day, i) => {
          return (
            <div key={i} className="table">
              <div className="day">Day{day}</div>
              {Object.keys(param[day]).map((hour, i) => {
                return (
                  <div key={i}>
                    <div>{param[day][hour]}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DrowTable;
