import { SET_HIGHLIGHT, SET_ANIMA_SETTING, PUSH_ITEMS_STACK, CLEAR_ITEMS_STACK, SET_SCROLL, SCROLL_TO, SET_RESET_BEAKER, SET_DO_REACT, INC_STACK_IDX, SET_RESET_HIGHLIGHT, CLEAR_REACT, SET_CONTROLLER, SET_EXPAND, SHOW_DETAILS } from "./type.action"

export const selectReact = (react) => dispatch => {
    const { input, animation } = react;
    if (!input) return;
    let delay = 0;
    let interval = animation.flame ? 2700 : 2700;
    input.forEach(item => {
        setTimeout(() => {
            dispatch({
                type: PUSH_ITEMS_STACK,
                payload: item
            });
        }, delay);
        delay += interval;
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

export const setController = (tab) => dispatch => {
    dispatch({
        type: SET_CONTROLLER,
        payload: tab
    })
}

export const setExpand = (active) => dispatch => {
    dispatch({
        type: SET_EXPAND,
        payload: active
    })
}

export const showDetails = (active) => dispatch => {
    dispatch({
        type: SHOW_DETAILS,
        payload: active
    })
}