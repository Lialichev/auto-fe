import { actionTypes } from './action'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return action.payload
    default:
      return state
  }
}
