import React, { Component } from 'react';
import './index.css';
// import oscar from './oscar.png'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="out">
          <span className="out__text">Генератор</span>
          <span className="out__text">получения оскара</span>
        </div>
        <Form />
        {/* <img className="oscar-image" src={oscar} alt="oscar"/> */}
      </div>
    );
  }
}

export default App;
