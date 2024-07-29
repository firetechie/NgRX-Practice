import { createReducer, on } from '@ngrx/store';
import { customCounter, decrement, increment, reset, titleChange } from './counter.action';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customCounter, (state, action) => {
    return {
      ...state,
      counter: (action.customAction === 'add' ?
        state.counter + action.customValue : state.counter - action.customValue),
    };
  }),
  on(titleChange, (state, action) => {
    return {
      ...state,
      title: action.title,
    };
  })
);

export const counterReducer = (state: any, action: any) => _counterReducer(state, action);
