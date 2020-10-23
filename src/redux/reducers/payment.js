const payment = [];

export default (state = payment, actions) => {
    switch (actions.type) {
        case "GET_ALL_PAYMENT":
            return actions.payload;
        case "UPDATE_ONE_PAYMENT":
            return actions.payload;
        case "DELETE_ONE_PAYMENT":
            return actions.payload;    
        default:
            return state;
    }
};