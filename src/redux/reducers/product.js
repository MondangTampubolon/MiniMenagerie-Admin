const product = [];

export default (state = product, actions) => {
    switch (actions.type) {
        case "GET_ALL_PRODUCT":
            return actions.payload;
        case "ADD_ONE_PRODUCT":
            return actions.payload;
        case "UPDATE_ONE_PRODUCT":
            return actions.payload;
        case "DELETE_PRODUCT":
            return actions.payload;    
        default:
            return state;
    }
};