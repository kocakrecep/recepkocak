import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function listNewContractReducer(state=initialState.subContracts,action){
    switch (action.type) {
        case actionTypes.LIST_NEW_CONTRACT:
            return action.payload
        default:
            return state;
    }
}