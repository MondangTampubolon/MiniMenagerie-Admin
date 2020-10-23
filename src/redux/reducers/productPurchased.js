const productPurchased = [];

export default (state = productPurchased, actions) => {
    switch (actions.type) {
        case "GET_ALL_PRODUCT_PURCHASED":
            return actions.payload;
        case "GET_ONE_PRODUCT_PURCHASED":
            return actions.payload;
        case "ADD_ONE_PRODUCT_PURCHASED":
            return actions.payload;
        case "UPDATE_ONE_PRODUCT_PURCHASED":
            return actions.payload;
        case "DELETE_PRODUCT_PURCHASEDT":
            return actions.payload;
        case "ACCEPT_PRODUCT_PURCHASEDT":
            return actions.payload;
        case "DECLINE_PRODUCT_PURCHASEDT":
            return actions.payload;    
        case "GET_ALL_LIST_SALDO_PRODUCT_TRANSACTION":
            return actions.payload;
        default:
            return state;
    }
};