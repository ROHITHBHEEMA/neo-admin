import '../styles/globals.css'
import '../styles/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import authReducer from "../store/reducers/auth";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(thunk)
));
//let store = createStore(persistedReducer)
let persistor = persistStore(store)



function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  )
}

export default MyApp
