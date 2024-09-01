import { createReducer, on } from "@ngrx/store"
import { initialState } from "./app.state"
import { spinner } from "./app.action"

const _appReducer = createReducer(initialState,
    on(spinner, (state, action) => {
        return {
            ...state,
            isLoader: action.isLoader
        }
    })
)

export const appReducer = (state: any, action: any) => _appReducer(state, action)