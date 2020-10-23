const breed = [];

export default (state = breed, actions) => {
    switch (actions.type) {
        case "GET_ALL_BREED":
            return actions.payload;
        case "ADD_ONE_BREED":
            return actions.payload;
        case "UPDATE_ONE_BREED":
            return actions.payload;
        case "DELETE_ONE_BREED":
            return actions.payload;    
        default:
            return state;
    }
};