import axios from '../../helpers/axios';

export const getAllPayment = () => async (dispatch) => {
    let result = await axios.get('/')
    // console.log(result);

    await dispatch({
        type: "GET_ALL_PAYMENT",
        payload: result.data.result
    })
}

export const updatePayment = (values, id, history) => async (dispatch) => {
    let result = await axios.put(`/payment/${id}`, values)
    console.log(result);
    if(result.status === 200){
        await dispatch({
            type: "UPDATE_ONE_PAYMENT",
            payload: result.data.message
        })
        history.goBack();
    } else {
        alert('error')
    }
}

export const deletePayment = (id) => async (dispatch) => {
    let result = await axios.delete(`/payment/${id}`)
    if(result.status === 200){
        alert('deleted')

        dispatch(getAllPayment());
    } else {
        alert('error')
    }
}

