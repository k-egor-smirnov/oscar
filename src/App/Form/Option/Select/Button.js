import React, { Component } from 'react';
import type from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 250px;
  font-size: 18px;
  padding-bottom: 8px;
  color: #323C47;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  user-select: none;
  cursor: pointer;
`

class Button extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.selected}
      </Wrapper>
    );
  }
}

Button.propTypes = {
  selected: type.bool.isRequired
}

export default Button;