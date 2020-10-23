import axios from '../../helpers/axios';

export const getAllBreed = () => async (dispatch) => {
    let result = await axios.get('/breed')
    // console.log(result);

    await dispatch({
        type: "GET_ALL_BREED",
        payload: result.data.result
    })
}

export const addBreed = (values, history) => async (dispatch) => {
    let result = await axios.post('/breed/create', values)
    console.log(result);

    await dispatch({
        type: "ADD_ONE_BREED",
        payload: result.data.message
    })
    history.goBack()

}

export const updateBreed = (values, id, history) => async (dispatch) => {
    let result = await axios.put(`/breed/${id}`, values)
    console.log(result);
    if(result.status === 200){
        await dispatch({
            type: "UPDATE_ONE_BREED",
            payload: result.data.message
        })
        history.goBack();
    } else {
        alert('error')
    }
}

export const deleteBreed = (id) => async (dispatch) => {
    let result = await axios.delete(`/breed/${id}`)
    if(result.status === 200){
        alert('deleted')

        dispatch(getAllBreed());
    } else {
        alert('error')
    }
}

