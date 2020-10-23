import axios from '../../helpers/axios';
import Swal from 'sweetalert2';

export const getAllProducts = () => async (dispatch) => {
    let result = await axios.get('/product')

    await dispatch({
        type: "GET_ALL_PRODUCT",
        payload: result.data.result
    })
}

export const addProduct = (values, history) => async (dispatch) => {
    let result = await axios.post('/product/create', values)
    if(result.status === 200){
        Swal.fire(
            'Good job!',
            'Product added!',
            'success'
          )
    }

    await dispatch({
        type: "ADD_ONE_PRODUCT",
        payload: result.data.result
    })
    history.goBack()

}

export const updateProduct = (values, id, history) => async (dispatch) => {
    let result = await axios.put(`/product/${id}`, values)
    console.log(result);
    if(result.status === 200){
        await dispatch({
            type: "UPDATE_ONE_PRODUCT",
            payload: result.data.message
        })
        history.goBack();
    } else {
        alert('error')
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    let result = await axios.delete(`/Product/${id}`)
    if(result.status === 200){
        alert('deleted')

        dispatch(getAllProducts());
    } else {
        alert('error')
    }
}

