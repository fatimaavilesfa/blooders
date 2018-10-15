import React, { Component , Fragment} from 'react';
import HospitalList from './components/HospitalList';
import './App.css';





class App extends Component {
  constructor() {
    super()
    this.state =  {
      data: [],
    }
  }

  componentDidMount() {
    fetch('https://api.blooders.org/V3.0/hospital/schedule/public?date=2018-10-04&idState=19')
      .then(response => response.json())
      .then(hospital => this.setState({ data: hospital }));
  }




  render() {
      if (this.state.data.length === 0) {
        return <h1>Loading</h1>
      } else {
          return (
            <Fragment>
                <h1>Encuentra el momento ideal</h1>
                <h6>Ajenda una cita en el hospital mas cercano y dona sangre de manera altruista</h6>
                <br/>
                <div class="row">
                    <div class="column">
                         <img src="bolsa.png" alt="bolsa" style="width:100%">
                         <p>Todos los dias mas de 20mil personas necesitan sangre</p>
                     </div>
                     <div class="column">
                         <img src="mexico.png" alt="Mexico" style="width:100%">
                         <p>Ocupamos el ultimo lugar en America latina en donacion
                          de sangre voluntaria segun la Organizacion Panamericana de salud</p>
                     </div>
                    <div class="column">
                         <img src="persona.png" alt="persona" style="width:100%">
                         <p>Solo donamos sangre cuando un amigo o familiar la necesitan</p>
                      </div>
                </div>
                <HospitalList/>
            </Fragment>
    );
    }
  }
}


export default App;