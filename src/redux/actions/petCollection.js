import axios from '../../helpers/axios';
import Swal from 'sweetalert2';

export const getAllPetCollection = () => async (dispatch) => {
    let result = await axios.get('/petCollection')
    console.log(result);

    await dispatch({
        type: "GET_ALL_PET_COLLECTION",
        payload: result.data.result
    })
}

export const addPetCollection = (values, history) => async (dispatch) => {
    let result = await axios.post('/petCollection/create', values)
    console.log(result);
    if(result.status === 200){
        Swal.fire({
            icon: 'success',
            title: 'God...',
            text: 'Success to add Pet to Collections',
          })
        await dispatch({
            type: "ADD_ONE_PET_COLLECTION",
            payload: result.data.message
        })
        history.goBack()
    }

}

export const updatePetCollection = (values, id, history) => async (dispatch) => {
    let result = await axios.put(`/petCollection/${id}`, values)
    console.log(result);
    if(result.status === 200){
        await dispatch({
            type: "UPDATE_ONE_PET_COLLECTION",
            payload: result.data.message
        })
        history.goBack();
    } else {
        alert('error')
    }
}

export const deletePetCollection = (id) => async (dispatch) => {
    let result = await axios.delete(`/petCollection/${id}`)
    if(result.status === 200){
        alert('deleted')

        dispatch(getAllPetCollection());
    } else {
        alert('error')
    }
}

