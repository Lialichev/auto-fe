import { actionTypes } from './action'

const initialState = {
  data: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
