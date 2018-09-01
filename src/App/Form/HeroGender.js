import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import type from "prop-types";
import { Gender, setGender } from "../store/actions";
import { Switch, SwitchSlider } from "./styled";

const mapDispatchToProps = {
  setGender
};

function mapStateToProps(state) {
  return {
    gender: state.gender
  };
}

const HeroType = styled.div`
  width: 220px;
  justify-content: space-between;
  position: relative;
  margin: 16px auto 0 ;

  @media (min-width: 600px) {
    margin-top: 8px;
  }
`;

const GenderText = styled.span`
  margin: 12px;
  font-size: 12px;
  line-height: 40px;
  vertical-align: text-bottom;
  color: ${props => (props.bold ? "#323C47" : "#989898")};
  font-weight: ${props => (props.bold ? "bold" : "initial")};
  transition: color 0.2s linear;
`;

class HeroGender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      woman: false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const woman = !this.state.woman;
    this.setState({ woman });

    this.props.onSelect("gender", woman);
  }

  render() {
    return (
      <HeroType>
        <GenderText bold={!this.state.woman}>ГЕЙ</GenderText>
        <Switch>
          <input
            defaultChecked={this.state.woman}
            onChange={this.onChange}
            type="checkbox"
          />
          <SwitchSlider className="round" />
        </Switch>
        <GenderText bold={this.state.woman}>ЖЕНЩИНА</GenderText>
      </HeroType>
    );
  }
}

HeroGender.propTypes = {
  gender: type.string.isRequired,
  setGender: type.func.isRequired,
  onSelect: type.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroGender);
