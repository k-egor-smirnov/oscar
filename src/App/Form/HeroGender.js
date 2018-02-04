import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import type from 'prop-types'
import { Gender, setGender } from '../store/actions'

const mapDispatchToProps = {
  setGender
}

function mapStateToProps (state) {
  return {
    gender: state.gender
  }
}

const GenderText = styled.span`
  margin: 8px;
  font-size: 12px;
  line-height: 15px;
  color: ${props => props.bold ? '#323C47' : '#989898'};
  font-weight: ${props => props.bold ? 'bold' : 'initial'};
  transition: color .2s linear;
`

class HeroGender extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }
  
  onClick() {
    if (this.props.gender === Gender.WOMAN) {
      return this.props.setGender(Gender.GAY)
    } else {
      return this.props.setGender(Gender.WOMAN)
    }
  }

  render() {
    return (
      <div className="hero-type">
        <GenderText bold={this.props.gender === Gender.GAY} className="hero-type__text">ГЕЙ</GenderText>
        <label className="switch">
          <input checked={this.props.gender === 'WOMAN'} onClick={this.onClick} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <GenderText bold={this.props.gender === Gender.WOMAN} className="hero-type__text" >ЖЕНЩИНА</GenderText>
      </div>
    );
  }
}

HeroGender.propTypes = {
  gender: type.string.isRequired,
  setGender: type.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(HeroGender);
