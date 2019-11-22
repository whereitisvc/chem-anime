import { PUSH_ITEMS_STACK, CLEAR_ITEMS_STACK, SET_SCROLL, SCROLL_TO, SET_RESET_BEAKER, SET_DO_REACT, INC_STACK_IDX, SET_RESET_HIGHLIGHT, CLEAR_REACT, SET_CONTROLLER, SET_EXPAND, SHOW_DETAILS } from '../actions/type.action'
import { clrchg_list, bubble_list, percipitate_list, heat_list } from "../data/reactions"
import { MENU, CONTROLLER, EPISODE } from "../namespace/mynamespace"

const initialState = {
  animation: {},
  reaction: null,
  stack: [],
  stack_idx: 0,
  stack_element: {
    solid: 0,
    liquid: 0,
    gas: 0
  },
  do_react: false,
  do_scroll: false,
  do_reset_beaker: false,
  do_reset_highlight: false,
  scroll_to: "",

  controller: CONTROLLER.LIQUID,
  show_details: false,
  expand: false
};

function _ary_equal(a, b) {
  if (a.length !== b.length) return false;

  let aa = [...a];
  let bb = [...b];
  const comp = (x, y) => {
    if (x.id < y.id) return 1;
    else return -1;
  }

  aa.sort(comp);
  bb.sort(comp);

  for (let i=0; i<aa.length; i++)
      if (aa[i].id !== bb[i].id) return false;
  return true;
}

function checkStack(stack) {
  let found = undefined;
  if (!found)
      found = clrchg_list.find(react => _ary_equal(react.input, stack));
  if (!found)
      found = bubble_list.find(react => _ary_equal(react.input, stack));
  if (!found)
      found = percipitate_list.find(react => _ary_equal(react.input, stack));
  if (!found)
      found = heat_list.find(react => _ary_equal(react.input, stack));
  if (found) console.log('found!', found)
  return found;
}

export default function(state = initialState, action) {

  switch (action.type) {

    case PUSH_ITEMS_STACK:
      let newstack = [...state.stack];
      newstack.push(action.payload);
      let react = checkStack(newstack);

      let { type } = action.payload.animation;
      let stack_element = { ...state.stack_element };
      if (type === EPISODE.ADD_SOLID) 
        stack_element.solid++;
      else if (type === EPISODE.ADD_LIQUID) 
        stack_element.liquid++;
      else
        stack_element.gas++;

      // console.log("yo", stack_element)

      return {
        ...state,
        do_react: react ? true : false,
        reaction: react ? react : null,
        animation: react ? react.animation : {},
        stack: newstack,
        stack_element: stack_element
      };

    case INC_STACK_IDX:
      return {
        ...state,
        stack_idx: state.stack_idx + 1
      }

    case CLEAR_ITEMS_STACK:
      return {
        ...state,
        stack: [],
        stack_idx: 0,
        stack_element: {
          solid: 0,
          liquid: 0,
          gas: 0
        }
      }

    case SET_SCROLL:
      return {
        ...state,
        do_scroll: action.payload
      }
    
    case SCROLL_TO:
      return {
        ...state,
        do_scroll: true,
        scroll_to: action.payload
      }

    case SET_DO_REACT:
      return {
        ...state,
        do_react: false
      }

    case SET_RESET_BEAKER:
      return {
        ...state,
        do_reset_beaker: action.payload
      }

    case SET_RESET_HIGHLIGHT:
      return {
        ...state,
        do_reset_highlight: action.payload,
      }

    case CLEAR_REACT:
      return {
        ...state,
        reaction: null
      }

    case SET_CONTROLLER:
      return {
        ...state,
        controller: action.payload
      }

    case SET_EXPAND:
      return {
        ...state,
        expand: action.payload
      }

    case SHOW_DETAILS:
      return {
        ...state,
        show_details: action.payload
      }

    default:
        return state;
  }
}
