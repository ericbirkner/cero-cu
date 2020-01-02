import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';
import Oficina from './components/Oficina';

class App extends Component {

  state = {
    oficinas: []
  }

  componentDidMount() {
    axios.get('https://boiling-mountain-49639.herokuapp.com/desafio-frontend')
      .then(res => {
        const oficinas = res.data;
        this.setState({ oficinas });
      })
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header row">
          <div className="col-12 mt-3 mb-3"><img src={logo} className="App-logo" alt="logo" /></div>
        </div>
        <div className="row franja">
          <div className="container pt-3 pl-0">
            <div className="col-lg-6 col-sm-12 no-gutters">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Buscar Sucursal"/>
              </div>
            </div>
          </div>
        </div>


        <div className="container mt-4">

          <div className="row">
            { this.state.oficinas.map(oficina =>
               <Oficina data={oficina}></Oficina>
            )}
          </div>
        </div>




      </div>
    );
  }
}

export default App;
