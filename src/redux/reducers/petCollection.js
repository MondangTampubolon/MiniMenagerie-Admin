const petCollection = [];

export default (state = petCollection, actions) => {
    switch (actions.type) {
        case "GET_ALL_PET_COLLECTION":
            return actions.payload;
        case "ADD_ONE_PET_COLLECTION":
            return actions.payload;
        case "UPDATE_ONE_PET_COLLECTION":
            return actions.payload;
        case "DELETE_ONE_PET_COLLECTION":
            return actions.payload;    
        default:
            return state;
    }
};