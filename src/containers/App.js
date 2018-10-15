import React, { Component , Fragment} from 'react';
import HospitalList from '../components/HospitalList';
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
                <HospitalList/>
            </Fragment>
    );
    }
  }
}


export default App;
