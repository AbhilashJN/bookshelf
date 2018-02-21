import reducers from './reducers';
import { createStore } from 'redux';

const initStore = () => createStore(reducers);

export default initStore;

