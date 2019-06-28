import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import portfolioData from '../data/initialState';

const initialState = {
    open: false,
    modalIsOpen: false,
    ...portfolioData,
}


const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;