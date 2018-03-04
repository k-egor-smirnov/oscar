import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './index.css'
import Option from './Option'
import HeroRace from './HeroRace'
import HeroGender from './HeroGender'
import { ColoredButton as ReadyButton } from '../common/styled'

function mapStateToProps (state) {
  return {
    gender: state.gender
  }
}

class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="category">
            <span className="category__title">Главный герой:</span>
            <div className="category-content">
              <Row>
                <Col xs={6}>
                  <HeroRace />
                </Col>

                <Col xs={6}>
                  <HeroGender />
                </Col>
              </Row>
            </div>
        </div>
        <div className="category">
          <span className="category__title">Дополнительные опции:</span>            
          <div className="category-content">
            <Option items={[
              'Уродства',
              'Колясочник (+ ДЦП)',
              'Аутизм',
              'Синдром дауна',
              'Шизофрения',
              'Феминизм',
              'Слепота',
            ]} title="Сделать инвалидом" emoji="ap-crying_cat_face"/>
            <Option title="Добавить животных" emoji="ap-tiger2"/>
            <Option title="Рабство" emoji="ap-statue_of_liberty"/>
            <Option title="Бедность" emoji="ap-flag-ru"/>
            <Option title="Смертельная болезнь" emoji="ap-soccer"/>
            <Option title="Затронуть религии" emoji="ap-book"/>
            <Option items={[
              'Аниме',
              'Пластилин'
            ]} title="Сделать мультиком" emoji="ap-dog"/>
            <Option title="Мюзикл" emoji="ap-speaker"/>
          </div>
        </div>
        
          <Link style={{ textDecoration: 'none', color: '#fff' }} to={{
            pathname: '/result',
            state: {data: 123}
          }}>
            <ReadyButton>
                  готов к оскару
            </ReadyButton>
          </Link>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Form);
