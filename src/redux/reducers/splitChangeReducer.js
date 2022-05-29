import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function splitChangeReducer(state=initialState.split,action){
    switch (action.type) {
        case actionTypes.CHANGE_SPLIT:
            return action.payload
        default:
            return state;
    }
}