import axios from '../../helpers/axios';

export const getAllCats = () => async (dispatch) =>  {
    let cat = await axios.get('/petdetail/?search=Cat')
    let catto = await cat.data.data
    let filteredCat = await catto.filter(item => item.collectionName === "")
    console.log('====================================');
    console.log(catto);
    console.log('====================================');
    await dispatch({
        type: "GET_ALL_CAT",
        payload: filteredCat
    })
}

export const getSmallCat = () => async (dispatch) =>  {
    let cat = await axios.get('/petdetail/?search=Small Cat')
    let catto = await cat.data.data
    console.log('====================================');
    console.log(catto);
    console.log('====================================');
    await dispatch({
        type: "GET_ALL_CAT",
        payload: catto
    })
}

export const getMediumCat = () => async (dispatch) =>  {
    let cat = await axios.get('/petdetail/?search=Medium Cat')
    let catto = await cat.data.data
    await dispatch({
        type: "GET_ALL_CAT",
        payload: catto
    })
}

export const getBigCat = () => async (dispatch) =>  {
    let cat = await axios.get('/petdetail/?search=Big Cat')
    let catto = await cat.data.data
    await dispatch({
        type: "GET_ALL_CAT",
        payload: catto
    })
}