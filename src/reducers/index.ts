import { combineReducers } from "redux";
import { User } from "../model/user";
import { authReducer } from "./auth.reducer";
import { claimReducer } from "./claim.reducer";
import { resolveReducer } from "./resolve.reducer";
import { Role } from "../model/role";


export interface IResolveState {
  displayMessage?: string
}

export interface IClaimState {
  displayMessage?: string
}

export interface IAuthState {
  role?: Role,
  currentUser?: User,
  errorMessage?: string
}

export interface IState {
  auth: IAuthState,
  claim: IClaimState,
  resolve: IResolveState

}

export const state = combineReducers<IState>({
  auth: authReducer,
  claim: claimReducer,
  resolve: resolveReducer
})