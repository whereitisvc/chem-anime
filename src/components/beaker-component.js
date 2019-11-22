import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'

import { EPISODE } from '../namespace/mynamespace'
import { resetBeaker, setReact, incStackIdx, showDetails, setExpand } from '../actions/action'

import Base from './animation/base-animation'
import Upper from './animation/upper-animation'
import Percipitate from './animation/percipitate-animation'
import Drop from './animation/drop-animation'
import Solid from './animation/solid-animation'
import Liquid from './animation/liquid-animation'
import Bubble from './animation/bubble-animation'
import Gas from './animation/gas-animation'
import Flame from './animation/flame-animation'
import Match from './animation/match-animation'
import BaseHover from './animation/basehover-animation';

class Beaker extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.all = null;
    this.beaker = null;

    this.pops = [];
    this.boile = [];

    // reference to the animation
    this.myTimeLine = new TimelineMax({ paused: true });
    this.expTimeLine = new TimelineMax({ paused: true });

    // this.expanded = false;
    this.state = {
      expanded: false,

      percipitate: null,
      drop: null,
      solid: null,
      liquid: null,
      pops: [],
      boile: [],
      gas_1: [],
      gas_2: [],
      flame: null,
      match: null,
      spark: null,
    };

    this.setComponentRef = this.setComponentRef.bind(this);
  }

  

  anima_drop() {
    if (!this.state.drop) return new TimelineMax();
    return new TimelineMax()
                .fromTo(this.state.drop, 1.1, 
                  {
                    opacity: 1,
                    scale: 1,
                    y: 0
                  },
                  {
                    scale: '+=2',
                    y: 180,
                    ease: Expo.easeIn,
                  }, 
                  '-=.2')
                .to(this.state.drop, .5,
                  {
                    y: 225,
                    opacity: 0,
                    //ease: Expo.easeIn
                  })
  }

  anima_solid() {
    if (!this.state.solid) return new TimelineMax();
    const height = this.all.offsetHeight;
    return new TimelineMax()
                .fromTo(this.state.solid, 1.1, 
                  {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotation:"225_ccw"
                  },
                  {
                    // scale: '+=2',
                    y: 450,
                    rotation:"0_ccw",
                    ease: Expo.easeIn,
                  }, 
                  '-=.2');
  }

  anima_liquid(clr) {
    if (!this.state.liquid) return new TimelineMax();
    return new TimelineMax()
                .to(this.state.liquid, 2.5, 
                  {
                    css: {
                      fill: clr ? clr : '#00FF1E',
                      opacity: .9
                    }
                  });
  }

  anima_percipitate(clr) {
    return new TimelineMax()
                .set( this.state.percipitate, {css: { color: clr }} )
                .staggerFromTo(this.state.percipitate, 1, 
                  {
                      opacity: 0,
                      scale: 0.25,
                      y: 0,
                  }, 
                  {
                      opacity: 1,
                      scale: 1,
                      y: 77,
                      ease: Power0.easeNone
                  }, 
                  .1, 
                  0
                );
  }

  anima_add_gas(gas, clr) {
    return new TimelineMax({ repeat: -1 })
                .set(gas, {css: { color: clr }} )
                .staggerFromTo(gas, 1, 
                  {
                      opacity: 0,
                      y: 50,
                  }, 
                  {
                      opacity: 1,
                      y: "-=80",
                      ease: Power0.easeNone
                  }, 
                  .2, 
                  0
                )
                .staggerTo(gas, 1, 
                  {
                      opacity: 0,
                      y: "-=80",
                      ease: Power0.easeNone
                  }, 
                  .2, 
                  1
                );
  }

  anima_flame(clr) {
    return new TimelineMax()
                .fromTo(this.state.flame, .1,
                  { opacity: 0 },
                  { opacity: 1 },
                  0);
  }

  anima_match() {
    return new TimelineMax()
                .fromTo(this.state.match, 1,
                  { opacity: 0 },
                  { opacity: 1 },
                )
                .fromTo(this.state.spark, .5,
                  { opacity: 0 },
                  { opacity: 1 },
                )
  }

  anima_popsboile() {
    // if (this.boile.length === 0) return new TimelineMax();
    return new TimelineMax({ repeat: -1 })
                .staggerFromTo(this.state.boile, .5, 
                  {
                      opacity: 0,
                      scale: 1.5,
                      y: 0,
                  }, 
                  {
                      opacity: 1,
                      scale: 0,
                      y: '-=100',
                      ease: Power0.easeNone
                  }, 
                  .1, 
                  0
                );
  }
  
  anima_shake() {
    return new TimelineMax()
                .to(this.all, .25, {rotation:"350_short"})
                .to(this.all, .5, {rotation:"5_short"})
                .to(this.all, .5, {rotation:"0_short"})
  }

  setComponentRef(name, ref) {
    if (Array.isArray(ref))
      this.setState({ [name]: [...ref] })
    else
      this.setState({ [name]: ref })
  }

  componentDidMount(){}

  componentDidUpdate(){

    // console.log('hi', this.state);

    const { stack, stack_idx, stack_element, do_react, do_reset_beaker, expand } = this.props;

    if (do_reset_beaker) {
      this.myTimeLine
          .clear()
          .set(this.state.liquid, { opacity: 0 })
          .set(this.state.drop, { opacity: 0 })
          .set(this.state.solid, { opacity: 0 })
          .set(this.state.boile, { opacity: 0 })
          .set(this.state.pops, { opacity: 0 })
          .set(this.state.percipitate, { opacity: 0 })
          .set(this.state.gas_1, { opacity: 0 })
          .set(this.state.gas_2, { opacity: 0 })
          .set(this.state.flame, { opacity: 0 })
          .set(this.state.match, { opacity: 0 })
          .set(this.state.spark, { opacity: 0 })
      this.props.resetBeaker(false);
    }
    else {
      if (stack_idx < stack.length) {
        const animation = stack[stack_idx].animation;
        switch(animation.type) {
            case EPISODE.ADD_SOLID:
                this.myTimeLine
                    .set(this.state.solid, { css: { color: animation.color } })
                    .add(this.anima_solid());
                break;


            case EPISODE.ADD_LIQUID:
                if (stack_element.liquid < 2)
                    this.myTimeLine
                      .add(new TimelineMax().to(this.state.liquid, 1, { fill: animation.color, opacity: .55 }));
                else
                    this.myTimeLine
                      .set(this.state.drop, { fill: animation.color })
                      .add(this.anima_drop());
                break;


            case EPISODE.ADD_GAS:
                if (stack_element.gas < 2)
                    this.myTimeLine.add(this.anima_add_gas(this.state.gas_1, animation.color));
                else
                    this.myTimeLine.add(this.anima_add_gas(this.state.gas_2, animation.color));
                break;
            default:
        }
        this.props.incStackIdx();
      }


      if (do_react) {
        const { clr_chg, bubble, percipitate, flame, clr } = this.props.animation;

        // intro animation
        if (flame) {
          this.myTimeLine.add(new TimelineMax().addPause(1));
          this.myTimeLine.add(this.anima_match());
          this.myTimeLine.add(new TimelineMax().addPause(1));
        }
        else {
          this.myTimeLine.add(new TimelineMax().addPause(1));
          this.myTimeLine.add(this.anima_shake());
          this.myTimeLine.add(new TimelineMax().addPause(1));
        }

        // reaction animation
        if (clr_chg) {
          this.myTimeLine.add(this.anima_liquid(clr));
        }
        if (bubble) {
          this.myTimeLine.add(this.anima_popsboile());
        }
        if (percipitate) {
          this.myTimeLine.add(this.anima_percipitate(clr));
        }
        if (flame) {
          this.myTimeLine.add(this.anima_flame(clr));
        }
        // this.myTimeLine.eventCallback("onComplete", this.props.setExpand(true));
        this.myTimeLine.addCallback(() => this.props.setExpand(true), "+=0.5");
        this.props.setReact(false);
      }

      if (expand && !this.state.expanded) {
        // this.expanded = true;
        this.setState({ expanded: true });
        this.expTimeLine.add(new TimelineMax().to(this.all, 1, { 
                                      left: 0, 
                                      onComplete: this.props.showDetails, 
                                      onCompleteParams: [true] 
                                    }));
      }
  
      if (!expand && this.state.expanded) {
        // this.expanded = false;
        this.setState({ expanded: false });
        this.expTimeLine.add(new TimelineMax().to(this.all, 1, { left: 285 }));
      }

      this.myTimeLine.play();
      this.expTimeLine.play();
    }

  }

  render(){
    return (
        <div 
            ref={el => {this.all = el}}
            style={{
                // background: "green",
                position: 'absolute', 
                zIndex: 1,   
                height: 550, // '70vh',
                width: 280, // '21vw',
                left: 285,
            }}
        >

              <div 
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height:"100%"
                }}
              >
              <Base />
              </div>

              <div 
                style={{
                  position: 'absolute',
                  zIndex: 500,
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height:"100%"
                }}
              >
              <BaseHover expanded={this.state.expanded} />
              </div>

              <div 
                style={{
                  position: 'absolute',
                  zIndex: 100,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height:"100%"
                }}
              >
              <Upper />
              </div>

              <div 
                style={{                 
                  position: 'absolute',
                  zIndex: 4,
                  top: 0, // "85%",
                  left: 0, // "26%",
                  width: "100%", // "50%"
                  height: "100%"
                }}
              >
              <Percipitate setComponentRef={this.setComponentRef}/>
              </div>

              <div 
                style={{                 
                  position: 'absolute',
                  zIndex: 4,
                  top: 0, 
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              >
              <Gas setComponentRef={this.setComponentRef} number={1}/>
              </div>

              <div 
                style={{                 
                  position: 'absolute',
                  zIndex: 4,
                  top: 0, 
                  left: '5%',
                  width: "100%",
                  height: "100%"
                }}
              >
              <Gas setComponentRef={this.setComponentRef} number={2}/>
              </div>

              <div 
                style={{     
                  // background: 'white',            
                  position: 'absolute',
                  zIndex: 4,
                  top: '10%', 
                  left: 0,
                  width: "100%",
                  height: "20%"
                }}
              >
              <Flame setComponentRef={this.setComponentRef} />
              </div>

              <div 
                style={{     
                  // background: 'white',            
                  position: 'absolute',
                  zIndex: 3,
                  top: 0, 
                  left: 0,
                  width: "100%",
                  height: "60%"
                }}
              >
              <Match setComponentRef={this.setComponentRef} />
              </div>

              <div 
                style={{
                  position: 'absolute',
                  zIndex: 3,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height:"100%"
                }}
              >
              <Drop setComponentRef={this.setComponentRef}/>
              </div>

              <div 
                style={{
                  position: 'absolute',
                  zIndex: 3,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height:"100%"
                }}
              >
              <Solid setComponentRef={this.setComponentRef}/>
              </div>

              <div 
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height:"100%"
                }}
              >
              <Liquid setComponentRef={this.setComponentRef}/>
              </div>

              <div 
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height:"100%"
                }}
              >
              <Bubble setComponentRef={this.setComponentRef}/>
              </div>
        </div>
    )
  }
}

Beaker.propTypes = {
}

Beaker.defaultProps = {
}

const mapStateToProps = state => ({
  animation: state.beaker.animation,
  stack: state.beaker.stack,
  stack_idx: state.beaker.stack_idx,
  stack_element: state.beaker.stack_element,
  do_react: state.beaker.do_react,
  do_reset_beaker: state.beaker.do_reset_beaker,
  expand: state.beaker.expand
})

export default connect(
  mapStateToProps,
  {resetBeaker, setReact, incStackIdx, showDetails, setExpand}
)(Beaker);
