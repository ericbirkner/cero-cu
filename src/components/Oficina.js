import React, { Component } from 'react';


class Oficina extends Component {
  constructor(props) {
    super(props);
    this.sumValues= this.sumValues.bind(this);
  }

  sumValues(arr){
    return Object.values(arr).reduce((a, b) =>
      a + b.waiting
    );
  }



  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-12 p-1 mb-1">
        <div className={this.props.data.online ? "box" : "box disabled"}>
          <div className="name">{this.props.data.name}</div>
          <div className="footer">
            <i className="fa fa-user" aria-hidden="true"></i> {() => this.sumValues(this.props.data.lines)}
              &nbsp;&nbsp;
            <i className="fa fa-clock-o" aria-hidden="true"></i> 2:22
          </div>
        </div>
      </div>
    );
  }
}

export default Oficina;
