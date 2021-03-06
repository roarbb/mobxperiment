import './App.css';
import { configure } from 'mobx';
import DevTools from 'mobx-react-devtools';
import EmployeeList from './EmployeeList';
import React from 'react';
import Store from './Stores/RootStore';
import { Provider } from 'mobx-react';
import Weather from './Weather'
import Anime from './Anime';

import "antd/dist/antd.css";

configure({ enforceActions: "observed" });

const App = () => (
  <Provider rootStore={new Store()}>
    <div className="App">
      <EmployeeList />
      <Weather />
      <Anime />
      <DevTools />
    </div>
  </Provider>
);

export default App;
