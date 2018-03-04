import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Loading from './Loading'
import Share from './Share'
import { ColoredButton } from '../common/styled.js'
import Crazy from './crazy.png'

const ContentWrapper = styled.div`
    display: block;
    text-align: center;

    width: 800px;
    height: 524px;

    background-color: #fff;
    border-radius: 16px;

    position: relative;
`

const ResultWrapper = styled.div`
    display: inline-flex;
    flex-flow: column nowrap;
    justify-content: center;
    
    margin-top: 32px;
`

const Image = styled.img`
    display: inline-block;
    box-shadow: 0px 0px 16px 4px rgba(0,0,0,0.75);
`

const Error = styled.div`    
    display: flex;
    flex-flow: column nowrap;

    justify-content: center;
    align-items: center;

    height: 100%;
    
    font-weight: 500;
    font-size: 16px;
`

const ErrorText = styled.span`
    margin-top: 64px;
`

const ReturnButton = ColoredButton.extend`
    position: absolute;
    
    bottom: 32px;
    left: 0;
`

class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: null,
            data: this.props.location.state.data
        }
    }

    componentDidMount() {
        fetch('http://51.15.201.238/get')
            .then(response=> {
                return response.blob()
            })
            .then(blob => {
                this.setState({ image: URL.createObjectURL(blob) })
            })
    }

    render() {
        if (!this.state.data) {
            return (
                <ContentWrapper>
                    <pre>{this.state.data}</pre>
                    <Error>
                        <img src={Crazy} />
                        <ErrorText>Упс, что-то пошло не так! Попробуйте еще раз</ErrorText>

                        <Link to="/">
                            <ReturnButton>
                                <span>Вернуться</span>
                            </ReturnButton>
                        </Link>
                    </Error>
                </ContentWrapper>        
            )
        }

        return (
            <ContentWrapper>
                {!this.state.image ? <Loading /> : 
                    <ResultWrapper>
                        <Image src={this.state.image} />
                        <Share />
                    </ResultWrapper>
                }
            </ContentWrapper>
        )
    }
}

Result.propTypes = {
    location: Object
}

export default Result