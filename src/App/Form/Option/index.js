import React, { Component } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import type from 'prop-types'

import {
  OptionWrapper,
  CheckboxText,
  CheckboxWrapper,
  Checkbox,
  OptionEmoji,
} from './style'

import Select from './Select'

class Option extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false,
    }

    this.onSelect = this.onSelect.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSelect(item) {
    this.props.onSelect(this.props.id, item)
  }

  onChange() {
    const checked = !this.state.checked
    this.setState({ checked })

    this.props.onSelect(this.props.id, checked)
  }

  render() {
    return (
      <OptionWrapper>
        {/* ИЗВИНИ, ЖЕНЯ, Я ВЫЕБАЛ СЕТКУ */}
        <Row style={{'width': '100%'}}>
          <Col xs={6}>
            <CheckboxWrapper>
              <OptionEmoji className={this.props.emoji + ' ap'}></OptionEmoji>
              <Checkbox defaultChecked={this.state.checked} onChange={this.onChange}/>
              <CheckboxText>{this.props.title || "Неизвестная опция"}</CheckboxText>
            </CheckboxWrapper>
          </Col>
          
          <Col xs={6}>
            {
              this.props.items && <Select onSelect={this.onSelect} items={this.props.items} checked={this.state.checked} />
            }
          </Col>
        </Row>
      </OptionWrapper>
    );
  }
}

Option.propTypes = {
  emoji: type.string.isRequired,
  title: type.string.isRequired,
  items: type.array,
  onSelect: type.func,
  id: type.string
}

export default Option