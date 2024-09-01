import { createFeatureSelector, createSelector } from "@ngrx/store";
import { App } from "../../shared/model/app";

const getAppState = createFeatureSelector<App>('app');

export const getSpinner = createSelector(getAppState, (state) => state.isLoader)