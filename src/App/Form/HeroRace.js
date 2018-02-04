import React, { Component } from 'react';

class HeroRace extends Component {
  render() {
    return (
      <div>
        <div className="hero-race">
          <label className="radio race__radio">
            <input defaultChecked="true" type="radio" name="race"/>
            <span className="radio__text">Негр</span>
          </label>

          <label className="radio race__radio">
            <input type="radio" name="race"/>
            <span className="radio__text">Индус</span>
          </label>
        </div>
      </div>
    );
  }
}

export default HeroRace;