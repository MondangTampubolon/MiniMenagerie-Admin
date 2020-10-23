const listAdoptionTransaction = [];

export default (state = listAdoptionTransaction, actions) => {
  switch (actions.type) {
    case "GET_ALL_LIST_ADOPT_TRANSACTION":
      return actions.payload;
    case "GET_ONE_ADOPT_TRANSACTION":
      return actions.payload;
    case "ADD_ONE_ADOPT_TRANSACTION":
      return actions.payload;
    case "UPDATE_ONE_ADOPT_TRANSACTION":
      return actions.payload;
    case "DELETE_ADOPT_TRANSACTION":
      return actions.payload;
    case "ACCEPT_ADOPT_TRANSACTION":
      return actions.payload;
    case "DECLINE_ADOPT_TRANSACTION":
      return actions.payload;
    case "GET_ALL_LIST_SALDO_ADOPT_TRANSACTION":
      return actions.payload;
    default:
      return state;
  }
};
