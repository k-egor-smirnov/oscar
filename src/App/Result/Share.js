import React, { Component } from 'react';
import { VKontakteButton, FacebookButton, TwitterButton } from 'react-social'
import styled from 'styled-components'

import VK from './svg/vk.svg'
import Facebook from './svg/facebook.svg'
import Twitter from './svg/twitter.svg'
import './style.css'

const ShareWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;

    margin-top: 32px;
`

const ShareText = styled.span`
    font-size: 32px;
    font-weight: 500;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    
    margin-top: 8px;
`

const CommonButton = styled.div`
    display: flex;
    margin: 8px;
`

const HorizontalSplit = styled.span`
    background: rgba(0, 0, 0, 0.4);

    height: 24px;
    width: 1px;

    align-self: center;
`

const SocialTitle = styled.span`
    align-self: center;
    margin-left: 8px;

    font-weight: 500;    
`

const SocialImage = styled.img`
    width: 32px;
    height: 32px;
`

class Share extends Component {
    render() {
        return (
            <ShareWrapper>
                <ShareText>
                    Поделись с друзьями!
                </ShareText>
                
                <Buttons>
                    <CommonButton>
                        <VKontakteButton className="social" element="span" title="Я получил Оскар!">
                            <SocialImage src={VK}/>
                            <SocialTitle>ВКонтакте</SocialTitle>
                        </VKontakteButton>

                    </CommonButton>
                    
                    
                    <HorizontalSplit />

                    <CommonButton>
                        <TwitterButton className="social" element="span" title="Я получил Оскар!">
                            <SocialImage src={Twitter}/>
                            <SocialTitle>Twitter</SocialTitle>                            
                        </TwitterButton>
                    </CommonButton>

                    <HorizontalSplit />

                    <CommonButton>
                        <FacebookButton className="social" element="span" title="Я получил Оскар!">
                            <SocialImage src={Facebook}/>
                            <SocialTitle>Facebook</SocialTitle>                            
                        </FacebookButton>
                    </CommonButton>

                    
                </Buttons>
            </ShareWrapper>   
        )
    }
}

export default Share