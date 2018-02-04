import styled from 'styled-components'
import selected from './selected.svg'
import unselected from './unselected.svg'

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  position: relative;
`

const CheckboxText = styled.span`
  font-size: 16px;
  line-height: 20px;
  position: relative;
  padding: 0 0 0 32px;
  cursor: pointer;
  color: #656565;
  user-select: none;

  &:before {
    content: '';
    color: #b0ed00;
    font-weight: bold;
    position: absolute;
    top: -2px;
    left: 0;
    width: 23px;
    height: 23px;
    background: url(${unselected});
    transition: .2s;
  }
`

const CheckboxWrapper = styled.label`
  margin-left: 8px;
  display: flex;
  
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  input:checked + span:before {
    background: url(${selected})
  }

`

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  top: 0px;
  left: 0;
  height: 25px;
  width: 25px;
`

const OptionEmoji = styled.i`
  margin-right: 8px;
`

const SelectWrapper = styled.div`
  display: ${props => props.checked ? 'flex' : 'none'}
`

export {
  OptionWrapper,
  CheckboxText,
  CheckboxWrapper,
  Checkbox,
  OptionEmoji,
  SelectWrapper
}