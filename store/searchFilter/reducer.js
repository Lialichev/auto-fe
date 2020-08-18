import { actionTypes } from './action'

const initialState = {
    category: '',
    brand: '',
    model: '',
    region: '',
    from_year: '',
    to_year: '',
    from_price: '',
    to_price: '',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case actionTypes.SET_BRAND:
            return {
                ...state,
                brand: action.payload
            }
        case actionTypes.SET_MODEL:
            return {
                ...state,
                model: action.payload
            }
        case actionTypes.SET_FROM_PRICE:
            return {
                ...state,
                from_price: action.payload
            }
        case actionTypes.SET_TO_PRICE:
            return {
                ...state,
                to_price: action.payload
            }
        case actionTypes.SET_REGION:
            return {
                ...state,
                region: action.payload
            }
        case actionTypes.SET_FROM_YEAR:
            return {
                ...state,
                from_year: action.payload
            }
        case actionTypes.SET_TO_YEAR:
            return {
                ...state,
                to_year: action.payload
            }
        default:
            return state
    }
}
