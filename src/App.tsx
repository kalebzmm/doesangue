import React from 'react'
import {Provider} from 'react-redux';
import AppRoute from './Routes';
import { store } from './store/redux-store';

const App = () => {

  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;