import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
//import devToolsEnhancer from 'remote-redux-devtools';

import sagas from './sagas';
import reducers from './ducks';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};
const enhancer = compose(
  applyMiddleware(sagaMiddleware)
);

const configureStore = () => {
  const store = createStore(
    persistReducer(persistConfig, reducers),
    undefined,
    enhancer,
  );

  sagaMiddleware.run(sagas);

  const persistor = persistStore(store);

  persistor.purge();

  return { persistor, store };
};

export const { persistor, store } = configureStore();
