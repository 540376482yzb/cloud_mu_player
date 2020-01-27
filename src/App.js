import React from "react";
import { Provider } from 'react-redux';
import './module/music'
import { store } from './root/store'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { makeRoute } from './root/route'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Provider store={store}>
      <main className="pt-4" style={{
        backgroundColor: '#F6F7F9',
        width: '100vw',
        minHeight: '100vh'
      }}>
        <Router>
          <Switch>
            {makeRoute()}
          </Switch>
        </Router>
      </main>

    </Provider>
  );
}

export default App;
