import { IResolveState } from ".";
import { resolveTypes } from "../actions/resolve.actions";

const initialState: IResolveState = {
    displayMessage: undefined,
}

export const resolveReducer = (state = initialState, action) => {

  switch (action.type) {
    case resolveTypes.RESOLVE_UPDATE:
      return {
        ...state,
        displayMessage: 'Insertation has completed'
      }  
    case resolveTypes.RESOLVE_ACCEPT: 
      return {
        ...state,
        displayMessage: 'User claim has been accepted.'
      }
      case resolveTypes.RESOLVE_DENIED: 
      return {
        ...state,
        displayMessage: 'User claim has been DENIED.'
      }
    default:
  }
  return state;
}