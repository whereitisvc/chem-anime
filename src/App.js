import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import Canvas from './components/canvas.component'
import Controller from './components/controller-component'
import Selector from './components/selector-component'
import Sheet from './components/sheet-component'
import Menu from './components/menu-component'

// React-Redux
import { Provider } from "react-redux"
import store from "./store/store"

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <Provider store={store}>
        <div 
          className="App" 
        >

          <Sheet />

          <div
            style={{
              // background: 'white',
              position: 'relative',
              width: '60vw',
              height: '90vh',
              maxWidth: 850,
              margin: 'auto'
            }}
          >
            <Canvas />
            <Controller />
            <Selector />
          </div>

        </div>

        <div className="collection">
        </div>
        </Provider>
    )
  }
}

export default App;
