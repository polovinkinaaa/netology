import { combineReducers, compose, legacy_createStore } from "redux";

import listReducer from "./listReducer.ts";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => typeof compose;
  }
}
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const rootReducer = combineReducers({
  list: listReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function configureStore() {
  return legacy_createStore(
    rootReducer,
    undefined,
    devTools && compose(devTools),
  );
}

export default configureStore;
