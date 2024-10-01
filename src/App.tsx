import { MainPage } from "@pages/MainPage";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
