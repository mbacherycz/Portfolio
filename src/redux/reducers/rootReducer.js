const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log(action.payload)
            let data = state.portfolioData;
            console.log(data)
            data.push(action.payload);
            return {
                ...state,
                portfolioData: data,
                modalIsOpen: false
            }
        case 'HANDLE_TOGGLE':
            return {
                ...state,
                open: !state.open
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                modalIsOpen: true
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalIsOpen: false
            }
        //    
        default:
            return state;
    }
}

export default rootReducer;