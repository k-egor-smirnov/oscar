import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";
import Loading from "./Loading";
import Share from "./Share";
import { ColoredButton } from "../common/styled.js";
import Crazy from "./crazy.png";
import Dead from "./dead.png";

const ContentWrapper = styled.div`
  display: block;
  text-align: center;

  width: 100%;
  height: 524px;

  background-color: #fff;
  border-radius: 16px;

  position: relative;
`;

const ResultWrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.75);
`;

const Error = styled.div`
  display: flex;
  flex-flow: column nowrap;

  justify-content: center;
  align-items: center;

  height: 100%;

  font-weight: 500;
  font-size: 16px;
`;

const ErrorText = styled.span`
  margin: 64px 16px 16px 16px;
`;

const ReturnButton = ColoredButton.extend`
  position: absolute;

  bottom: 32px;
  left: 0;
`;

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      data: this.props.location.state ? this.props.location.state.data : null
    };
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/");
    }

    const imageURL = `http://esmirnov.xyz/oscar/api/get?${this.state.data}`;

    fetch(imageURL)
      .then(response => {
        return response.blob();
      })
      .then(blob => {
        if (blob.type === "text/html") {
          throw new Error();
        } else {
          this.setState({ image: URL.createObjectURL(blob), imageURL });
        }
      })
      .catch(() => {
        this.setState({ data: false });
      });
  }

  render() {
    if (!this.state.data) {
      return (
        <ContentWrapper>
          <pre>{this.state.data}</pre>
          <Error>
            <img src={Crazy} />
            <ErrorText>Упс, что-то пошло не так! Попробуйте еще раз</ErrorText>
            {/* <img src={Dead} />
            <ErrorText>Извините, в данный момент сервис недоступен</ErrorText> */}
            <Link to="/">
              <ReturnButton>
                <span>Вернуться</span>
              </ReturnButton>
            </Link>
          </Error>
        </ContentWrapper>
      );
    }

    return (
      <ContentWrapper>
        {!this.state.image ? (
          <Loading />
        ) : (
          <ResultWrapper>
            <Image src={this.state.image} />
            <Share imageURL={this.state.imageURL} />
          </ResultWrapper>
        )}
      </ContentWrapper>
    );
  }
}

Result.propTypes = {
  location: propTypes.object,
  imageURL: propTypes.URL,
  history: propTypes.object,
};

export default withRouter(Result);
