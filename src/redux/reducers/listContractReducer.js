import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

const listContractReducer=(state=initialState.contracts,action)=>{
    switch (action.type) {
        case actionTypes.LIST_CONTRACT:
            return action.payload
        default:
            return state;
    }
}

export default listContractReducer