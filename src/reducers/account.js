import {
  getAccUserFulfilled,
  getAccUserPending,
  getAccUserRejected,
  inc,
  dec,
  incByAmt,
} from "../actions";

export default function accountReducer(state = { amount: 1 }, action) {
  //immutability
  switch (action.type) {
    case getAccUserFulfilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}
