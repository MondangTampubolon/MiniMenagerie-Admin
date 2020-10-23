const dogs = [];

export default (state = dogs, actions) => {
    switch (actions.type) {
        case "GET_ALL_DOG":
            return actions.payload;
        case "ADD_ONE_DOG":
            return actions.payload;
        case "UPDATE_ONE_DOG":
            return actions.payload;
        case "DELETE_DOG":
            return actions.payload;    
        default:
            return state;
    }
};