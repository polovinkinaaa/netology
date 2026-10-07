import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import configureStore from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
);
