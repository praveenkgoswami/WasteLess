import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/common.css';
import AppRoutes from './routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
