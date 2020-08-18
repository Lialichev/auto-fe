export const actionTypes = {
    SET_CATEGORY: '[SEARCH FILTER] SET CATEGORY',
    SET_BRAND: '[SEARCH FILTER] SET BRAND',
    SET_MODEL: '[SEARCH FILTER] SET MODEL',
    SET_FROM_PRICE: '[SEARCH FILTER] SET FROM PRICE',
    SET_TO_PRICE: '[SEARCH FILTER] SET TO PRICE',
    SET_REGION: '[SEARCH FILTER] SET REGION',
    SET_FROM_YEAR: '[SEARCH FILTER] SET FROM YEAR',
    SET_TO_YEAR: '[SEARCH FILTER] SET TO YEAR',
};

export const setCategory = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_CATEGORY, payload });
};

export const setBrand = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_BRAND, payload });
};

export const setModel = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_MODEL, payload });
};

export const setFromPrice = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_FROM_PRICE, payload });
};

export const setToPrice = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_TO_PRICE, payload });
};

export const setRegion = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_REGION, payload });
};

export const setFromYear = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_FROM_YEAR, payload });
};

export const setToYear = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_TO_YEAR, payload });
};
