import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header row">
          <div className="col-12 mt-3 mb-3"><img src={logo} className="App-logo" alt="logo" /></div>
        </div>
        <div className="row franja">
          <div className="container pt-3">
            <div className="col-lg-6 col-sm-12">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Buscar Sucursal"/>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="box col-lg-3 col-md-4 col-sm-12 p-0 m0">
            <div className="name">Servipag Ejercito Libertador</div>
            <div className="footer">
              <i class="fa fa-user" aria-hidden="true"></i> 40
                &nbsp;&nbsp;
              <i class="fa fa-clock-o" aria-hidden="true"></i> 2:22
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default App;
