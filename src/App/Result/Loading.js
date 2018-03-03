import React, { Component } from 'react';
import Spinner from './spinner.svg'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
`

class Loading extends Component {
    render() {
        return (
            <LoadingWrapper>
                <img src={Spinner} />
                <span>Получаем Ваш оскар...</span>
            </LoadingWrapper>
        );
    }
}

export default Loading