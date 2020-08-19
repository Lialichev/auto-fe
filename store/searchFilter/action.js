export const actionTypes = {
    SET_CATEGORY: '[SEARCH FILTER] SET CATEGORY',
    SET_FILTER: '[SEARCH FILTER] SET FILTER',
    SET_BRAND: '[SEARCH FILTER] SET BRAND',
    SET_MODEL: '[SEARCH FILTER] SET MODEL',
    SET_MIN_PRICE: '[SEARCH FILTER] SET MIN PRICE',
    SET_MAX_PRICE: '[SEARCH FILTER] SET MAX PRICE',
    SET_REGION: '[SEARCH FILTER] SET REGION',
    SET_FROM_YEAR: '[SEARCH FILTER] SET FROM YEAR',
    SET_TO_YEAR: '[SEARCH FILTER] SET TO YEAR',
};

export const setFilter = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_FILTER, payload });
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

export const setMinPrice = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_MIN_PRICE, payload });
};

export const setMaxPrice = (payload) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_MAX_PRICE, payload });
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
