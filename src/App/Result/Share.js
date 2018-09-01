import React, { Component } from "react";
import { VKontakteButton, FacebookButton, TwitterButton } from "react-social";
import styled from "styled-components";

import propTypes from 'prop-types';
import VK from "./svg/vk.svg";
import Facebook from "./svg/facebook.svg";
import Twitter from "./svg/twitter.svg";
import "./style.css";

const ShareWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  margin-top: 32px;
`;

const ShareText = styled.span`
  font-size: 32px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const CommonButton = styled.div`
  display: flex;
  margin: 8px;
  cursor: pointer;
`;

const HorizontalSplit = styled.span`
  background: rgba(0, 0, 0, 0.4);

  height: 24px;
  width: 1px;

  align-self: center;
`;

const SocialTitle = styled.span`
  align-self: center;
  margin-left: 8px;

  font-weight: 500;
`;

const SocialImage = styled.i`
  width: 64px;
  height: 64px;
`;
class Share extends Component {
  ConstructVKLink() {
    return (
      "http://vk.com/share.php?url=" +
      encodeURIComponent("http://esmirnov.xyz/oscar") +
      "&title=" +
      encodeURIComponent("Я получил оскар!") +
      "&image=" +
      encodeURIComponent(this.props.imageURL)
    );
  }

  render() {
    return (
      <ShareWrapper>
        <ShareText>Поделись с друзьями!</ShareText>

        <Buttons>
          <CommonButton onClick={() => window.open(this.ConstructVKLink(), '', 'height=570,width=650')}>
            <SocialImage className="fab fa-lg fa-vk" />
            <SocialTitle>ВКонтакте</SocialTitle>
          </CommonButton>

          {/* <HorizontalSplit /> */}

          {/* <CommonButton>
            <TwitterButton
              className="social"
              element="span"
              title="Я получил Оскар!"
            >
              <SocialImage className="fab fa-lg fa-twitter" />
              <SocialTitle>Twitter</SocialTitle>
            </TwitterButton>
          </CommonButton>

          <HorizontalSplit />

          <CommonButton>
            <FacebookButton
              className="social"
              element="span"
              title="Я получил Оскар!"
            >
              <SocialImage className="fab fa-lg fa-facebook" />
              <SocialTitle>Facebook</SocialTitle>
            </FacebookButton>
          </CommonButton> */}
        </Buttons>
      </ShareWrapper>
    );
  }
}

Share.propTypes = {
  imageURL: propTypes.URL
}

export default Share;
