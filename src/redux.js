import rootReducer from "../src/store/reducers/rootReducer";
import { createStore , applyMiddleware } from "redux";
import { thunk } from "redux-thunk";          // giúp action trả về hàm nếu ko có thunk sẽ trả về object


const reduxConfig = () => {
    const store = createStore(rootReducer , applyMiddleware(thunk));
    return store
};

export default reduxConfig