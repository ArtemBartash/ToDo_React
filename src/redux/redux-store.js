import tasksReducer from "./task-reducer";
import {combineReducers, createStore} from "redux";
import filterReducer from "./filter-reducer";

let reducers = combineReducers({
    tasks: tasksReducer,
    filter: filterReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;