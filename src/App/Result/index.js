import React, { Component } from 'react';
import styled from 'styled-components'

import Loading from './Loading'
import Share from './Share'

const ContentWrapper = styled.div`
    display: block;
    text-align: center;

    width: 800px;
    height: 524px;

    background-color: #fff;
    border-radius: 16px;
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

class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: null
        }
    }

    componentWillMount() {
        fetch('http://51.15.201.238/get')
            .then(response=> {
                return response.blob()
            })
            .then(image => {
                this.setState({ image: URL.createObjectURL(image) })
            })
    }

    render() {
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

export default Result