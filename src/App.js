import { BrowserRouter } from 'react-router-dom';
import createStore from "./utils/store";
import WebProvider from './utils/WebProvider';
import { Provider } from 'react-redux';
import Routers from './routers/Routers';

function App() {
  const store = createStore();

  return (
    <Provider store={store}>
      <WebProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </WebProvider>
    </Provider>
  );
}

export default App;
