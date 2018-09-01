import React, { Component } from "react";
import styled from "styled-components";
import type from "prop-types";

const Wrapper = styled.ul`
  position: absolute;
  top: 55px;
  width: 250px;
  list-style-type: none;
  padding: 8px 8px 8px 0;
  box-shadow: 0 0 4px -1px;
  border-radius: 4px;
  z-index: 1;
  color: rgba(0, 0, 0, 0.75);
  transition: visibility 0s, opacity 0.08s linear;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  opacity: ${props => (props.visible ? "1" : "0")};
  background-color: #fff;

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &:after {
    top: -20px;
    left: 21px;
    border-color: transparent transparent #fff transparent;
    border-width: 10px;
  }

  &:before {
    top: -22px;
    left: 20px;
    border-color: transparent transparent rgba(0, 0, 0, 0.115) transparent;
    border-width: 11px;
  }
`;

const Item = styled.div`
  color: #989898;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 8px;
  padding-left: 8px;
  font-size: 16px;
  line-height: 32px;

  &:hover,
  span:hover {
    background: #f3f7fa;
  }
`;

class List extends Component {
  render() {
    return (
      <Wrapper visible={this.props.visible}>
        {this.props.items.map((item, i) => (
          <Item onClick={() => this.props.setSelected(i)} key={i}>
            <span>{item}</span>
          </Item>
        ))}
      </Wrapper>
    );
  }
}

List.propTypes = {
  visible: type.bool.isRequired,
  items: type.array,
  setSelected: type.func
};

export default List;
