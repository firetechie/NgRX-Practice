import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "../../shared/model/counter";

const getCounterState = createFeatureSelector<Counter>('counter');

export const getCounter = createSelector(getCounterState, (state) => state.counter)
export const getTitle = createSelector(getCounterState, (state) => state.title)