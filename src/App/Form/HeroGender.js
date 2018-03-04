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

    this.state = {
      woman: false
    }

    this.onChange = this.onChange.bind(this)
  }
  
  onChange() {
    const woman = !this.state.woman
    this.setState({ woman })

    this.props.onSelect('gender', woman)
  }

  render() {
    return (
      <div className="hero-type">
        <GenderText bold={!this.state.woman} className="hero-type__text">ГЕЙ</GenderText>
        <label className="switch">
          <input defaultChecked={this.state.woman} onChange={this.onChange} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <GenderText bold={this.state.woman} className="hero-type__text" >ЖЕНЩИНА</GenderText>
      </div>
    );
  }
}

HeroGender.propTypes = {
  gender: type.bool.isRequired,
  setGender: type.func.isRequired,
  onSelect: type.func
}


export default connect(mapStateToProps, mapDispatchToProps)(HeroGender);
