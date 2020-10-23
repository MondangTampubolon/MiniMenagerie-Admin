const petCategory = [];

export default (state = petCategory, actions) => {
    switch (actions.type) {
        case "GET_ALL_PET_CATEGORY":
            return actions.payload;
        case "ADD_ONE_PET_CATEGORY":
            return actions.payload;
        case "UPDATE_ONE_PET_CATEGORY":
            return actions.payload;
        case "DELETE_ONE_PET_CATEGORY":
            return actions.payload;    
        default:
            return state;
    }
};