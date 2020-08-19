import { actionTypes } from './action';

const initialState = {
    data: [],
    page: 0,
    limit: 20,
    total: 0,
    isError: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ADV:
            return {
                ...state,
                data: action.payload.data,
                page: action.payload.page,
                limit: action.payload.limit,
                total: action.payload.total,
            }
        case actionTypes.SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
};
