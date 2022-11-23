import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsAppType, AppReducer} from "./AppReduser";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers({
    app: AppReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppActionsType = ActionsAppType
export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    RootStateType,
    unknown,
    AppActionsType>


