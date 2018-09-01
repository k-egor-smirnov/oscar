import styled from "styled-components";

const FormWrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  color: black;
  width: 100%;
  height: 100%;
  box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.3);
`;

const Options = styled.div`
  display: flex;
  margin-top: 16px;
  flex-flow: column nowrap;
`;

const HeroRace = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  color: #656565;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 7px;
  }

  label {
    margin: 16px 16px 0 0;

    @media (min-width: 600px) {
      margin: 0;
    }
  }

  @media (min-width: 600px) {
    margin: 8px 0 0 0;
    justify-content: space-evenly;
    border-right: 1px dotted rgba(0, 0, 0, 0.2);
  }
`;

const RadioText = styled.span`
  position: relative;
  padding: 0 0 0 35px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: 0;
    width: 22px;
    height: 22px;
    border: 1px solid #cdd1da;
    border-radius: 50%;
    background: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #45aaff;
    opacity: 0;
    transition: 0.2s;
  }

  input:checked + &:after {
    opacity: 1;
  }

  input:focus + &:before {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.075);
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  min-width: 60px;
  height: 34px;

  input {
    display: none;
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 36px;
    width: 36px;
    left: -4px;
    bottom: -3px;
    background-color: #fff;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }

  input:checked + &:before {
    transform: translateX(30px);
  }

  &.round {
    border-radius: 34px;
  }

  &.round:before {
    border-radius: 50%;
  }
`;

const Category = styled.div`
  margin-top: 32px;
  margin-left: 32px;
`;

const CategoryTitle = styled.span`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
`;

const MainOptions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  
  @media (min-width: 600px) {
    margin-top: 16px;
    flex-flow: row nowrap;
  }
`;

const MainOptionsColumn = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  align-self: center;

  @media (min-width: 600px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

export {
  FormWrapper,
  Options,
  HeroRace,
  HeroType,
  Switch,
  SwitchSlider,
  RadioText,
  Category,
  CategoryTitle,
  MainOptions,
  MainOptionsColumn
};
