export const actionTypes = {
  GET: 'GET',
}

export const getData = () => async (dispatch) => {
  await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.GET, payload: data })
      })
}
