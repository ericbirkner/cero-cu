import React, { Component } from 'react';

function Oficina(props) {
  //props.data.results_name

  function sumValues(obj){
    console.log(obj);
    return Object.values(obj).reduce((a, b) =>
     a + b.waiting
   );
  }



  return(

      <div className="col-lg-3 col-md-4 col-sm-12 p-1 mb-1">
        <div className={props.data.online ? "box" : "box disabled"}>
          <div className="name">{props.data.name}</div>
          <div className="footer">
            <i className="fa fa-user" aria-hidden="true"></i> {() => sumValues(props.data.lines)}
              &nbsp;&nbsp;
            <i className="fa fa-clock-o" aria-hidden="true"></i> 2:22
          </div>
        </div>
      </div>
    )
}

export default Oficina;
