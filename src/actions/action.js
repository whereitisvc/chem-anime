import { SET_HIGHLIGHT, SET_ANIMA_SETTING, PUSH_ITEMS_STACK, CLEAR_ITEMS_STACK, SET_SCROLL, SCROLL_TO, SET_RESET_BEAKER, SET_DO_REACT, INC_STACK_IDX, SET_RESET_HIGHLIGHT, CLEAR_REACT } from "./type.action"

export const selectReact = (react) => dispatch => {
    const { input } = react;
    if (!input) return;
    let delay = 0;
    input.forEach(item => {
        setTimeout(() => {
            dispatch({
                type: PUSH_ITEMS_STACK,
                payload: item
            });
        }, delay);
        delay += 2000;
    })
}

export const selectItem = (item) => dispatch => {
    dispatch({
        type: PUSH_ITEMS_STACK,
        payload: item
    })
}

export const incStackIdx = () => dispatch => {
    dispatch({
        type: INC_STACK_IDX
    })
}

export const clearStack = () => dispatch => {
    dispatch({
        type: CLEAR_ITEMS_STACK
    })
}

export const setScroll = (active) => dispatch => {
    dispatch({
        type: SET_SCROLL,
        payload: active
    })
}

export const scrollTo = (place) => dispatch => {
    dispatch({
        type: SCROLL_TO,
        payload: place
    })
}

export const resetBeaker = (active) => dispatch => {
    dispatch({
        type: SET_RESET_BEAKER,
        payload: active
    })
}

export const resetHighlight = (active) => dispatch => {
    dispatch({
        type: SET_RESET_HIGHLIGHT,
        payload: active
    })
}

export const setReact = (active) => dispatch => {
    dispatch({
        type: SET_DO_REACT,
        payload: active
    })
}

export const clearReact = () => dispatch => {
    dispatch({
        type: CLEAR_REACT
    })
}