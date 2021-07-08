import { Provider } from 'mobx-react';

import { Routes } from '../routes';
import stores from '../stores';

const App = () => {
  return (
    <Provider store={stores}>
      <Routes />
    </Provider>
  );
}

export default App;
