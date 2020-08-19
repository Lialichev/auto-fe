import { actionTypes } from './action'

const initialState = {
    category: '',
    brand: '',
    model: '',
    region: '',
    from_year: '',
    to_year: '',
    min_price: '',
    max_price: '',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_FILTER:
            return {
                ...state,
                ...action.payload
            }
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
        case actionTypes.SET_MIN_PRICE:
            return {
                ...state,
                min_price: action.payload
            }
        case actionTypes.SET_MAX_PRICE:
            return {
                ...state,
                max_price: action.payload
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
