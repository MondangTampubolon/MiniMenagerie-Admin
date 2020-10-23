import axios from '../../helpers/axios';

export const getAllProductPurchased= () => async (dispatch) => {
    let result = await axios.get('/transactionDetails')
    await dispatch({
        type: "GET_ALL_PRODUCT_PURCHASED",
        payload: result.data.result
    })
}

export const addOneProductPurchased = (values, history) => async(dispatch) => {
    try {
        let result = await axios.post('/transactionDetails/create', values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "ADD_ONE_PRODUCT_PURCHASED",
                payload: result.data.result
            })
            history.goBack()
        }
    }
    catch(error){
        console.log(error);
    }
}

export const getOneProductPurchased = (values, id, history) => async (dispatch) => {
    try {
        let result = await axios.get(`/listProductTransaction/${id}`, values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "GET_ONE_PRODUCT_PURCHASED",
                payload: result.data.result
            })
            history.goBack()
        }
    }
    catch(error){
        console.log(error);
    }
}

export const updateOneProductPurchased = (values, id, history) => async (dispatch) => {
    try {
        let result = await axios.put(`/listProductTransaction/${id}`, values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "UPDATE_ONE_PRODUCT_PURCHASED",
                payload: result.data.result
            })
            history.goBack()
        }
    }
    catch(error){
        console.log(error);
    }
}

export const deleteProductPurchased = (values, id, history) => async (dispatch) => {
    try{
        let result = await axios.delete(`/listProductTransaction/${id}`, values)
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "DELETE_PRODUCT_PURCHASED",
                payload: result.data.result
            })
            history.goBack()
            dispatch(getAllProductPurchased())
        }
        
    }
    catch(error){
        console.log(error);
    }
}
export const acceptProductPurchased = (status, id) => async (dispatch) => {
    try{
        let result = await axios.put(`/listProductTransaction/${id}`, {status: status})
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "ACCEPT_PRODUCT_PURCHASED",
                payload: result.data.result
            })
            dispatch(getAllProductPurchased())
        }
    }
    catch(error){
        console.log(error);
    }
}

export const declineProductPurchased = (status, id) => async (dispatch) => {
    try{
        let result = await axios.put(`/listProductTransaction/${id}`, {status: status})
        console.log(result);
        if(result.status === 200){
            await dispatch({
                type: "DECLINE_PRODUCT_PURCHASED",
                payload: result.data.result
            })
            dispatch(getAllProductPurchased())
        }
    }
    catch(error){
        console.log(error);
    }
}

export const saldoProductTransaction = () => async (dispatch) => {
    try {
        let result = await axios.get(`/transaction`);

        await dispatch({
            type: "GET_ALL_LIST_SALDO_PRODUCT_TRANSACTION",
            payload: result.data.result
        })
    }
    catch(error) {
        console.log(error);
    }
}