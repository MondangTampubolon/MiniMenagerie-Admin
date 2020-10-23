const auth = []

export default (state = auth, actions) => {
    switch (actions.type) {
        case "GET_AUTH":
            return actions.payload;
        default:
            return state;
    }
};