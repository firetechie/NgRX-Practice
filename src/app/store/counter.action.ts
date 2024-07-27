import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customCounter = createAction(
  'customCounter',
  props<{ customValue: number, customAction: string }>()
);
export const titleChange = createAction(
  'titleChange',
  props<{ title: string }>()
);