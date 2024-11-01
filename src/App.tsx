import "./App.css";
import "./assets/styles/Table.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import store from "./store";
import ToastHandlerContextProvider from "./contexts/ToastHandlerContextProvider";

function App() {
  return (
    <ToastHandlerContextProvider>
      <Provider store={store}>
        <Router basename={import.meta.env.PUBLIC_URL}>
          <AppRoutes />
        </Router>
      </Provider>
    </ToastHandlerContextProvider>
  );
}

export default App;
