import axios from '../../helpers/axios';

export const getAllListAdoptionTransaction = () => async (dispatch) => {
    let result = await axios.get('/listAdoptionTransaction')
    
    await dispatch({
        type: "GET_ALL_LIST_ADOPT_TRANSACTION",
        payload: result.data.result
    })
}

export const addOneAdoptionTransaction = (values, history) => async(dispatch) => {
    try {
        let result = await axios.post('/listAdoptionTransaction/create', values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "ADD_ONE_ADOPT_TRANSACTION",
                payload: result.data.result
            })
            history.goBack()
        }
    }
    catch(error){
        console.log(error);
    }
}

export const getOneAdoptionTransaction = (values, id, history) => async (dispatch) => {
    try {
        let result = await axios.get(`/listAdoptionTransaction/${id}`, values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "GET_ONE_ADOPT_TRANSACTION",
                payload: result.data.result
            })
            history.goBack()
        }
    }
    catch(error){
        console.log(error);
    }
}

export const updateOneAdoptionTransaction = (values, id, history) => async (dispatch) => {
    try {
        let result = await axios.put(`/listAdoptionTransaction/${id}`, values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "UPDATE_ONE_ADOPT_TRANSACTION",
                payload: result.data.result
            })
            history.goBack()
        }
    }
    catch(error){
        console.log(error);
    }
}

export const deleteAdoptionTransaction = (values, id, history) => async (dispatch) => {
    try{
        let result = await axios.delete(`/listAdoptionTransaction/${id}`, values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "DELETE_ADOPT_TRANSACTION",
                payload: result.data.result
            })
            history.goBack()
            dispatch(getAllListAdoptionTransaction())
        }
        
    }
    catch(error){
        console.log(error);
    }
}
export const acceptAdoptionTransaction = (status, id) => async (dispatch) => {
    try{
        let result = await axios.put(`/listAdoptionTransaction/${id}`, {status: status})
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "ACCEPT_ADOPT_TRANSACTION",
                payload: result.data.result
            })
            dispatch(getAllListAdoptionTransaction())
        }
    }
    catch(error){
        console.log(error);
    }
}

export const declineAdoptionTransaction = (status, id) => async (dispatch) => {
    try{
        let result = await axios.put(`/listAdoptionTransaction/${id}`, {status: status})
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "DECLINE_ADOPT_TRANSACTION",
                payload: result.data.result
            })
            dispatch(getAllListAdoptionTransaction())
        }
    }
    catch(error){
        console.log(error);
    }
}

export const saldoAdoptionTransaction = () => async (dispatch) => {
    try {
        let result = await axios.get(`/petUpForAdoption`);
        
        await dispatch({
            type: "GET_ALL_LIST_SALDO_ADOPT_TRANSACTION",
            payload: result.data.result
        })
    }
    catch(error) {
        console.log(error);
    }
}