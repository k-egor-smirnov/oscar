import { combineReducers } from 'redux'

import {
  SET_GENDER,
  SET_OPTIONS,
  Gender,
  Options
} from './actions'

function gender(state = Gender.GAY, action) {
  switch (action.type) {
    case SET_GENDER:
      return action.gender
    default:
      return state
  }
}

function options(state = Options, action) {
  if (action.type !== SET_OPTIONS || !action.type || !action.value) {
    return state
  }
}

const app = combineReducers({
  gender,
  options
})

export default app