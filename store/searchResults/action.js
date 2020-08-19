import API from '../../services/api';

export const actionTypes = {
    GET_ADV: '[SEARCH RESULTS] GET ADV',
    SET_IS_ERROR: '[SEARCH RESULTS] SET IS ERROR',
};

export const getAdv = (query) => async (dispatch) => {
    dispatch(setIsError(false));

    await API.get('/advertisement', {
        params: query
    })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.GET_ADV,
                payload: {
                    data: data.data,
                    page: data.page,
                    limit: data.limit,
                    total: data.total,
                }
            });
        })
        .catch(() => dispatch(setIsError(true)));
};

export const setIsError = (isError) => (dispatch) => {
    return dispatch({ type: actionTypes.SET_IS_ERROR, payload: isError })
};
