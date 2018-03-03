import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './index.css'
import Option from './Option'
import HeroRace from './HeroRace'
import HeroGender from './HeroGender'

const ReadyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #4da2ff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  margin: 32px 32px 0px 32px;
  padding: 16px;
  border-radius: 4px;
  width: calc(100% - 64px);
`

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
        
          <Link style={{ textDecoration: 'none', color: '#fff' }} to="/result">
            <ReadyButton onClick={() => this.getResult()}>
                  готов к оскару
            </ReadyButton>
          </Link>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Form);
