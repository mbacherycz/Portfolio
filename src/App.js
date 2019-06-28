import React from 'react';
import Layout from './components/Layout';

//Redux
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App;