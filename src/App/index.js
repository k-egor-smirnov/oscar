import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
// import oscar from './oscar.png'
import Form from './Form'
import Result from './Result';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="out">
            <span className="out__text">Генератор</span>
            <span className="out__text">получения оскара</span>
          </div>

          <div className="content">
            <Route path="/" exact component={Form}></Route>
            <Route path="/result" component={Result}></Route>
          </div>
          {/* <img className="oscar-image" src={oscar} alt="oscar"/> */}
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
