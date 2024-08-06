import actionTypes from "../actions/actionTypes";  // chỉ dùng để lưu tên actions

const initState = {
    homeData: [],
    test: 'Hello 123'
}

const appReducer = (state = initState , action) => {
    switch (action.type) {
        case actionTypes.GET_Home :
            return state

        default :
        return state
    }
};


export default appReducer