import appReducer from "./appReducer"; 
import { combineReducers } from "redux";    
// combineReducers: gom tất cả reducer lại , applyMiddleware sử dụng middleware của redux

const rootReducer = combineReducers({
    app : appReducer
})

export default rootReducer