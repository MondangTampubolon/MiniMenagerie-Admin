import axios from '../../helpers/axios';

export const getAllCategoryPet = () => async (dispatch) => {
    let result = await axios.get('/categoryPet')
    // console.log(result);

    await dispatch({
        type: "GET_ALL_PET_CATEGORY",
        payload: result.data.result
    })
}

export const addPetCategory = (values, history) => async (dispatch) => {
    let result = await axios.post('/categoryPet/create', values)
    console.log(result);

    await dispatch({
        type: "ADD_ONE_PET_CATEGORY",
        payload: result.data.message
    })
    history.goBack()

}

export const updatePetCategory = (values, id, history) => async (dispatch) => {
    let result = await axios.put(`/categoryPet/${id}`, values)
    console.log(result);
    if(result.status === 200){
        await dispatch({
            type: "UPDATE_ONE_PET_CATEGORY",
            payload: result.data.message
        })
        history.goBack();
    } else {
        alert('error')
    }
}

export const deletePetCategory = (id) => async (dispatch) => {
    let result = await axios.delete(`/categoryPet/${id}`)
    if(result.status === 200){
        alert('deleted')

        dispatch(getAllCategoryPet());
    } else {
        alert('error')
    }
}

