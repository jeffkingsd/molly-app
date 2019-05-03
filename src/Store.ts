import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state } from './reducers';

const a: any = window;
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk, logger),
  // other store enhancers if any
);

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(e) {
    return undefined;
  }
}
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

const peristedState = loadState();

export const store: Store<any> = createStore(
  state,
  peristedState,
  enhancer

);

store.subscribe(()=> {
  saveState(store.getState());
  console.log('State Updated');
  console.log(store.getState());
})

