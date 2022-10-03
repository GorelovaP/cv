import {combineReducers, createStore} from "redux";
import {AppReducer} from "./AppReduser";


const rootReducer = combineReducers({
    app: AppReducer,
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
