import React, { Component } from "react";
import type from "prop-types";

import { HeroRace as HeroRaceWrapper, RadioText } from "./styled";

class HeroRace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      black: true
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const black = value;
    this.setState({ black });

    this.props.onSelect("color", black);
  }

  render() {
    return (
      <HeroRaceWrapper>
        <label>
          <input
            checked={this.state.black}
            onChange={() => this.onChange(true)}
            type="radio"
            name="race"
          />
          <RadioText className="radio__text">Негр</RadioText>
        </label>

        <label checked={!this.state.black} className="radio race__radio">
          <input
            type="radio"
            name="race"
            onChange={() => this.onChange(false)}
          />
          <RadioText className="radio__text">Индус</RadioText>
        </label>
      </HeroRaceWrapper>
    );
  }
}

HeroRace.propTypes = {
  black: type.bool.isRequired,
  onSelect: type.func.isRequired
};

export default HeroRace;
