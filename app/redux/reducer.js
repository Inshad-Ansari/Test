import * as types from "./actionTypes";
import defaultState from "./states";

/**
 * Reducer
 */

export default function parentFlowReducer(
    state = defaultState.localStates,
    action
) {
    switch (action.type) {
        case types.INPUT_DATA:
            return {
                ...state,
                inputData: action.payload.inputData
            };
       
        default:
            return state;
    }
}

/**
 * Actions
 */
export const actions = {

    setInputData: inputData => {
        return {
            type: types.INPUT_DATA,
            payload: { inputData: inputData }
        };
    },
   
} 