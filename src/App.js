import React ,{ Component } from 'react';
import './App.css';
//import {Provider} from "react-redux";
import Main from "./components/mainComponents";
import { BrowserRouter} from 'react-router-dom';
//import {ConfigureStore} from './redux/configureStore';
//const store=ConfigureStore();
import {BrowserRouter as Router} from 'react-router-dom';
//import {ConfigureStore} from './redux/configureStore';
//const store=ConfigureStore();


class App extends Component {
  render() {
    return (

      //<Provider store={store}>
      //<Provider>
      <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
      </BrowserRouter>
      //</Provider>

   /*   <Provider store={store}>
      <Router>
      <div className="App">
        <Main/>
      </div>
      </Router>
      </Provider>

    );*/);
  }
}
export default App;
