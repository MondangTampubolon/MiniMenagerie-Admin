const image = [];

export default (state = image, actions) => {
    switch (actions.type) {
        case "GET_ALL_IMAGE":
            return actions.payload;
        case "ADD_ONE_IMAGE":
            return actions.payload;
        case "UPDATE_ONE_IMAGE":
            return actions.payload;
        case "DELETE_IMAGE":
            return actions.payload;    
        default:
            return state;
    }
};