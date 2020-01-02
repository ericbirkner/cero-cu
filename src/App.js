import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';
import Oficina from './components/Oficina';

class App extends Component {

  state = {
    oficinas: [],
    search:'',
    filtered:[]
  }

  componentDidMount() {
    axios.get('https://boiling-mountain-49639.herokuapp.com/desafio-frontend')
      .then(res => {
        const oficinas = res.data;
        this.setState({ oficinas });
      })
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {

    const { search } = this.state;
    const filtered = this.state.oficinas.filter(oficina => {
      return oficina.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

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
                <input type="text"  className="form-control" onChange={this.onchange} placeholder="Buscar Sucursal"/>
              </div>
            </div>
          </div>
        </div>


        <div className="container mt-4">

          <div className="row">

            { filtered.map((oficina,i) =>
               <Oficina data={oficina} key={i}></Oficina>
            )}
          </div>
        </div>




      </div>
    );
  }
}

export default App;
