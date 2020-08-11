import API from '../../services/api';

export const actionTypes = {
    GET_BRANDS: 'GET_BRANDS',
};

export const getBrandsByCategory = ({ category_id }) => async (dispatch) => {
    await API.get(`/brand/category/${ category_id }`)
        .then(({ data }) => {
            dispatch({ type: actionTypes.GET_BRANDS, payload: data })
        });
};
