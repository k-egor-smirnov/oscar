export const CLOSE_ALL_SELECT = 'CLOSE_ALL_SELECT'
export const SET_GENDER = 'SET_GENDER'
export const SET_OPTIONS = 'SET_OPTIONS'

export const Gender = {
  GAY: 'GAY',
  WOMAN: 'WOMAN'
}

export const Options = {
  disabled: false,
  animal: false,
  slavery: false,
  poverty: false,
  desease: false,
  religion: false,
  cartoon: false,
  musical: false
}

export function setGender(gender) {
  return { type: SET_GENDER, gender }
}
