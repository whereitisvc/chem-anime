import { SET_MAIN_REF, SET_COLLECT_REF, NEW_REACT_FOUND } from "../actions/type.action"

const initialState = {
    main: null,
    collection: null,
    newfound: false,
}

export default function(state = initialState, action) {
    
    switch(action.type) {
        case SET_MAIN_REF:
            return {
                ...state,
                main: action.payload
            };
        case SET_COLLECT_REF:
            return {
                ...state,
                collection: action.payload
            };
        case NEW_REACT_FOUND:
            return {
                ...state,
                newfound: action.payload
            }
        default:
            return state
    }

}