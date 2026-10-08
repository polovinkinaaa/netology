import { combineReducers, compose, legacy_createStore } from "redux";
import productReducer from "./productReducer.ts";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => typeof compose;
  }
}
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const rootReducer = combineReducers({
  list: productReducer,
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
