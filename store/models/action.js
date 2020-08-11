import API from '../../services/api';

export const actionTypes = {
    GET_MODELS: 'GET_MODELS',
};

export const getModelsByBrand = ({ brand_id }) => async (dispatch) => {
    await API.get(`/model/brand/${ brand_id }`)
        .then(({ data }) => {
            dispatch({ type: actionTypes.GET_MODELS, payload: data })
        });
};
