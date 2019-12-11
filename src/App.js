import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import { TimelineMax, Expo, Power0, Sine } from 'gsap'

import Canvas from './components/canvas.component'
import Controller from './components/controller-component'
import Selector from './components/selector-component'
import Collection from './components/collection-component'
import NavBtn from './components/navbtn-component'
import Intro from './components/intro-component'

// React-Redux
import { Provider } from "react-redux"
import store from "./store/store"
import { SET_NAVTO_COLLECT, SET_MAIN_REF, SET_COLLECT_REF } from './actions/type.action';

class App extends Component {
  constructor(props){
    super(props);
    this.logo = null;
    this.main = null;
    this.collection = null;
    this.intro = null;
    this.navbtn = null;

    this.myTimeLine = new TimelineMax({ paused: true });

  }

  componentDidMount() {
    store.dispatch({ type: SET_MAIN_REF, payload: this.main });
    store.dispatch({ type: SET_COLLECT_REF, payload: this.collection });

    this.myTimeLine
                  .add( new TimelineMax().addPause(3) )
                  .add( new TimelineMax().to(this.intro, 2, { opacity: 0 }) )
                  .add( new TimelineMax().to(this.main, 2, { opacity: 1 }), "-=2")
                  .add( new TimelineMax().fromTo(this.navbtn, 2, { opacity: 0 }, { opacity: 1 }), "-=2")
                  .add( new TimelineMax().fromTo(this.logo, 1, { x: "45vw", opacity: 0 }, { x: 50, opacity: 1 }), "-=0.5" );
    this.myTimeLine.play();
  }

  render(){
    return (
        <Provider store={store}>

          <div className="App">
            <div className="intro" ref={el => this.intro = el}><Intro /></div>
            <div className="logo" ref={el => this.logo = el}>ChemAnime</div>
            <div className="main" ref={el => this.main = el}>
              <Canvas />
              <Controller />
              <Selector />
            </div>
            <div className="space" />
            <div className="collection" ref={el => this.collection = el}>
                <Collection scrollToMain = { () => this.main.scrollIntoView({ behavior: "smooth" }) }/>
            </div>
            <div ref={el => this.navbtn = el}><NavBtn /></div>
          </div>

        </Provider>
    )
  }
}

export default App;
