import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Router } from "./custom-serializer";
import { RouterReducerState } from "@ngrx/router-store";


const getRouterState = createFeatureSelector<RouterReducerState<Router>>('router');

export const getRouterInfo = createSelector(getRouterState, (state) => {
    return state.state.params['id']
})

