import API from '../../services/api';

export const actionTypes = {
  GET_CATEGORIES: 'GET_CATEGORIES',
};

export const getCategories = () => async (dispatch) => {
  await API.get('/category')
      .then(({ data }) => {
          dispatch({ type: actionTypes.GET_CATEGORIES, payload: data })
      });
};
