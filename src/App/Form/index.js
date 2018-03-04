import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import { connect } from 'react-redux'
import type from 'prop-types'
import { Link } from 'react-router-dom'
import qs from 'querystring'

import './index.css'
import Option from './Option'
import HeroRace from './HeroRace'
import HeroGender from './HeroGender'

import { ColoredButton as ReadyButton } from '../common/styled'

const mapStateToProps = (state) => {
  return {
    gender: state.gender
  };
};

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cripple: false,
      animal: false,
      slavery: false,
      poorness: false,
      fatal: false,
      religion: false,
      cartoon: false,
      musical: false,
      gender: false,
      color: true
    }

    this.onSelect = this.onSelect.bind(this)
  }

  onSelect (id, value) {
    this.setState({ [id]: value })
  }
  
  render() {
    return (
      <div className="form">
        <div className="category">
            <span className="category__title">Главный герой:</span>
            <div className="category-content">
              <Row>
                <Col xs={6}>
                  <HeroRace onSelect={this.onSelect}/>
                </Col>

                <Col xs={6}>
                  <HeroGender onSelect={this.onSelect} />
                </Col>
              </Row>
            </div>
        </div>
        <div className="category">
          <span className="category__title">Дополнительные опции:</span>            
          <div className="category-content">
            <Option id="cripple" onSelect={this.onSelect} items={[
              'Уродства',
              'Колясочник (+ ДЦП)',
              'Аутизм',
              'Синдром дауна',
              'Шизофрения',
              'Феминизм',
              'Слепота',
            ]} title="Сделать инвалидом" emoji="ap-crying_cat_face"/>
            <Option id="animal" onSelect={this.onSelect} title="Добавить животных" emoji="ap-tiger2"/>
            <Option id="slavery" onSelect={this.onSelect} title="Рабство" emoji="ap-statue_of_liberty"/>
            <Option id="poorness" onSelect={this.onSelect} title="Бедность" emoji="ap-flag-ru"/>
            <Option id="fatal" onSelect={this.onSelect} title="Смертельная болезнь" emoji="ap-soccer"/>
            <Option id="religion" onSelect={this.onSelect} title="Затронуть религии" emoji="ap-book"/>
            <Option id="cartoon" onSelect={this.onSelect} items={[
              'Аниме',
              'Пластилин'
            ]} title="Сделать мультиком" emoji="ap-dog"/>
            <Option id="musical" onSelect={this.onSelect} title="Мюзикл" emoji="ap-speaker"/>
          </div>
        </div>
        
          <Link style={{ textDecoration: 'none', color: '#fff' }} to={{
            pathname: '/result',
            state: {data: qs.stringify(this.state) } 
          }}>
            <ReadyButton>
                  готов к оскару
            </ReadyButton>
          </Link>
      </div>
    );
  }
}

Form.propTypes = {
  gender: type.string
}


export default connect(mapStateToProps)(Form);
