const cats = [];

export default (state = cats, actions) => {
    switch (actions.type) {
        case "GET_ALL_CAT":
            return actions.payload;
        case "ADD_ONE_CAT":
            return actions.payload;
        case "UPDATE_ONE_CAT":
            return actions.payload;
        case "DELETE_CAT":
            return actions.payload;    
        default:
            return state;
    }
};