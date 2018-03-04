import React, { Component } from 'react';
import type from 'prop-types'

class HeroRace extends Component {
  constructor (props) {
    super(props)

    this.state = {
      black: true
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    const black = value
    this.setState({ black })

    this.props.onSelect('color', black)
  }
  
  render() {
    return (
      <div>
        <div className="hero-race">
          <label className="radio race__radio">
            <input checked={this.state.black} onChange={() => this.onChange(true)} type="radio" name="race"/>
            <span className="radio__text">Негр</span>
          </label>

          <label checked={!this.state.black} className="radio race__radio">
            <input type="radio" name="race" onChange={() => this.onChange(false)} />
            <span className="radio__text">Индус</span>
          </label>
        </div>
      </div>
    );
  }
}

HeroRace.propTypes= {
  black: type.bool.isRequired,
  onSelect: type.func.isRequired
}

export default HeroRace;