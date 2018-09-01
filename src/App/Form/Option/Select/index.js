import React, { Component } from "react";
import styled from "styled-components";
import type from "prop-types";

import List from "./List";

import { SelectWrapper } from "../../../common/styled";

const Wrapper = styled.div`
  margin: 12px 0 0 32px;
  font-weight: 500;
  display: ${props => (props.checked ? "flex" : "none")};

  @media (min-width: 600px) {
    margin: 0;
  }
`;

class Select extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.setSelected = this.setSelected.bind(this);

    this.state = {
      selectedItem: "Выберите тип",
      isOpen: false
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  setSelected(id) {
    const item = this.props.items[id];

    this.setState({
      selectedItem: this.props.items[id]
    });

    this.props.onSelect(item);
  }

  render() {
    return (
      <Wrapper checked={this.props.checked} onClick={this.handleClick}>
        <SelectWrapper>{this.state.selectedItem}</SelectWrapper>
        <List
          visible={this.state.isOpen}
          setSelected={this.setSelected}
          items={this.props.items}
        />
      </Wrapper>
    );
  }
}

Select.propTypes = {
  items: type.array,
  checked: type.bool.isRequired,
  onSelect: type.func
};

export default Select;
