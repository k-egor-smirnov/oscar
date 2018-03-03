import styled from 'styled-components'

const ButtonWrapper = styled.div`
  position: relative;
  width: 250px;
  font-size: 18px;
  padding-bottom: 8px;
  color: #323C47;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  user-select: none;
  cursor: pointer;
`

const ColoredButton = styled.button`
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

export {
    ButtonWrapper,
    ColoredButton
}