import React, { Component } from 'react';
import type from 'prop-types'
import styled from 'styled-components'
import { ButtonWrapper } from '../../../common/styled' 

class Button extends Component {
  render() {
    return (
      <ButtonWrapper>
        {this.props.selected}
      </ButtonWrapper>
    );
  }
}

Button.propTypes = {
  selected: type.bool.isRequired
}

export default Button;