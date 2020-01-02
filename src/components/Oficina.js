import React, { Component } from 'react';

function Oficina(props) {
  //props.data.results_name

  function sumFila(obj, key){
    return Object.values(obj).reduce((a, b) =>
     a + b[key],0
   );
  }


  function seconds2time (seconds) {
      var hours   = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds - (hours * 3600)) / 60);
      seconds = Math.floor(seconds - (hours * 3600) - (minutes * 60));
      var time = "";

      if (hours != 0) {
        time = hours+":";
      }
      if (minutes != 0 || time !== "") {
        minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
        time += minutes+":";
      }
      if (time === "") {
        time = seconds+"s";
      }
      else {
        time += (seconds < 10) ? "0"+seconds : String(seconds);
      }
      return time;
  }


  return(
      <div className="col-lg-3 col-md-4 col-sm-12 p-1 mb-1">
        <div className={props.data.online ? "box" : "box disabled"}>
          <div className="name">{props.data.name}</div>
          <div className="footer">
            <i className="fa fa-user" aria-hidden="true"></i> {sumFila(props.data.lines,'waiting')}
              &nbsp;&nbsp;
            <i className="fa fa-clock-o" aria-hidden="true"></i> {seconds2time(sumFila(props.data.lines,'elapsed'))}
          </div>
        </div>
      </div>
    )
}

export default Oficina;
