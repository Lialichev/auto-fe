import API from '../../services/api';

export const actionTypes = {
    GET_REGIONS: 'GET_REGIONS',
};

export const getRegions = () => async (dispatch) => {
    await API.get('/region')
        .then(({ data }) => {
            dispatch({ type: actionTypes.GET_REGIONS, payload: data })
        });
};
