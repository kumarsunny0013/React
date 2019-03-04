const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_RESULT':
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: action.result })
            };
        case 'DELETE_RESULT':
            const updatedArray = state.result.filter((result => result.id !== action.resultId))
            return {
                ...state,
                result: updatedArray
            }
    }
    return state;
};

export default reducer;