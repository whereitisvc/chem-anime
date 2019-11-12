import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'

// import ScrollArea from 'react-scrollbar'
// import { ScrollTo, ScrollArea } from "react-scroll-to";
// import ScrollArea from 'react-scrollarea/src/js/ScrollAreaWithoutCss';

// import 'react-perfect-scrollbar/dist/css/styles.css';
// import PerfectScrollbar from 'react-perfect-scrollbar';

// import ScrollArea from '@xico2k/react-scroll-area';

import 'semantic-ui-css/semantic.min.css'
import { Grid, Button } from 'semantic-ui-react'

import Beaker from './components/beaker-component'
import Menu from './components/menu-component'
import HighLight from './components/highlight-component'
import Controller from './components/controller-component'

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
          style={{ 
            backgroundColor: "#282c34", 
            height: "100vh",
            textAlign: "center",
            paddingTop: 50
          }}
        >

          <Beaker />

          {/* <Menu /> */}
          
          {/* <HighLight /> */}

          <Controller />

        </div>
        </Provider>
    )
  }
}

export default App;
