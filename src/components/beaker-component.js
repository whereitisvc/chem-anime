import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'

import { Button } from 'semantic-ui-react'

import { EPISODE } from '../namespace/mynamespace'
import { resetBeaker, setReact, incStackIdx } from '../actions/action'

class Beaker extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.all = null;
    this.beaker = null;
    this.drop = null;
    this.liqcolor = null;
    this.pops = [];
    this.boile = [];

    // reference to the animation
    this.myTimeLine = new TimelineMax({ paused: true });
  }

  anima_drop() {
    if (!this.drop) return new TimelineMax();
    return new TimelineMax()
                .fromTo(this.drop, 1.1, 
                  {
                    opacity: 1,
                    scale: 1,
                    y: 0
                  },
                  {
                    scale: '+=2',
                    y: 215,
                    ease: Expo.easeIn,
                  }, 
                  '-=.2');
  }

  anima_liqcolor(clr) {
    if (!this.liqcolor) return new TimelineMax();
    return new TimelineMax()
                .to(this.liqcolor, 3, 
                  {
                    css: {
                      fill: clr ? clr : '#00FF1E',
                      opacity: .9
                    }
                  });
  }

  anima_popsboile() {
    if (this.boile.length === 0) return new TimelineMax();
    return new TimelineMax({ repeat: -1 })
                .staggerFromTo(this.pops, .5, 
                  {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  },
                  {
                      opacity: 0,
                      scale: '-=.7',
                      y: -130,
                      ease: Power0.easeNone
                  }, 
                  .4, 
                  0
                )
                .staggerFromTo(this.boile, .5, 
                  {
                      opacity: 0,
                      scale: 1,
                      y: 0,
                  }, 
                  {
                      opacity: 1,
                      scale: 0,
                      y: '-=60',
                      ease: Power0.easeNone
                  }, 
                  .1, 
                  0
                );
  }

  componentDidMount(){}

  componentDidUpdate(){

    const { stack, stack_idx, do_react, do_reset_beaker } = this.props;

    if (do_reset_beaker) {
        this.myTimeLine
            .clear()
            .set(this.liqcolor, { opacity: 0 })
            .set(this.drop, { opacity: 0 })
            .set(this.boile, { opacity: 0 })
        this.props.resetBeaker(false);
    }
    else {
        if (stack_idx < stack.length) {
          const animation = stack[stack_idx].animation;
          switch(animation.type) {
              case EPISODE.ADD_SOLID:
                  this.myTimeLine
                      .set(this.drop, { fill: animation.color })
                      .add(this.anima_drop());
                  break;
              case EPISODE.ADD_LIQUID:
                  this.myTimeLine
                      .add(new TimelineMax().to(this.liqcolor, 1, { fill: animation.color, opacity: .55 }));
                  break;
              case EPISODE.ADD_GAS:
                  break;
              default:
          }
          this.props.incStackIdx();
        }


        if (do_react) {
          const { clr_chg, bubble, clr } = this.props.animation;

          this.myTimeLine.add(new TimelineMax().addPause(1));
          this.myTimeLine.add(new TimelineMax().to(this.all, .25, {rotation:"350_short"}));
          this.myTimeLine.add(new TimelineMax().to(this.all, .5, {rotation:"5_short"}));
          this.myTimeLine.add(new TimelineMax().to(this.all, .5, {rotation:"0_short"}));
          if (clr_chg) {
              this.myTimeLine.add(this.anima_liqcolor(clr));
            }
            if (bubble) {
              this.myTimeLine.add(this.anima_popsboile());
            }
          }

          this.myTimeLine.play();
          this.props.setReact(false);
        }

  }

  render(){
    const my_translate = "translate(891, -220)"
    return (
        <div 
            ref={el => {this.all = el}}
            style={{
                // background: "yellow",
                // position: 'absolute', 
                // zIndex: 1,   
                height: '70vh',
                width: '21vw',
                margin: 'auto',
                // top: '10vh', 
                // right: '30vw',
            }}
        >
              <svg
                // style={{ backgroundColor: "#577057" }}
                xmlns="https://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                // viewBox="-987.099 -28.276 622.367 528.606"
                viewBox="0 0 150 75"
              >
                  

                  <g fill="#fff" transform={my_translate}>
                      <circle ref={el => {this.pops[0] = el}} cx="-831.189" cy="320" r="13.645" />
                      <circle ref={el => {this.pops[1] = el}} cx="-791.459" cy="320" r="10.835" />
                      <circle ref={el => {this.pops[2] = el}} cx="-836.607" cy="320" r="3.813" />
                  </g>

                  <path 
                    ref={el => {this.beaker = el}}
                    opacity=".9" 
                    fill="#E2E2E1"
                    // fill='none' stroke="#88CE02" strokeWidth="4"
                    d="M-886.97 234.573c9.63 12.44 12.038 27.69 12.038 43.542v76.65c0 14.448 11.84 26.287 26.286 26.287h66.016c14.447 0 26.286-11.84 26.286-26.286v-75.848c0-16.052 2.208-31.503 12.04-44.144H-886.97v-.2z" 
                    transform={my_translate}
                  />

                  <circle 
                    ref={el => {this.drop = el}} 
                    transform={my_translate}
                    fill="#FF5B00" cx="-814" cy="-80" r="3"></circle>

                  <path 
                    ref={el => {this.liqcolor = el}}
                    transform={my_translate}
                    opacity="0" 
                    fill="#e4cf85"
                    d="M-869.313 305.705v47.054c0 12.84 10.635 23.275 23.677 23.275h59.394c13.042 0 23.677-10.435 23.677-23.276v-47.055h-106.748z" 
                  />

                  <g fill="#FFF" transform={my_translate}>
                      <circle ref={el => {this.boile[0] = el}} opacity="0" cx="-851.054" cy="365" r="5.418" />
                      <circle ref={el => {this.boile[1] = el}} opacity="0" cx="-777.899" cy="365" r="5.418" />
                      <circle ref={el => {this.boile[2] = el}} opacity="0" cx="-831.054" cy="365" r="10.244" />
                      <circle ref={el => {this.boile[3] = el}} opacity="0" cx="-802.902" cy="365" r="7.152" />
                      <circle ref={el => {this.boile[4] = el}} opacity="0" cx="-858.148" cy="365" r="7.152" />
                      <circle ref={el => {this.boile[5] = el}} opacity="0" cx="-810.054" cy="365" r="7.152" />
                      <circle ref={el => {this.boile[6] = el}} opacity="0" cx="-783.317" cy="365" r="2.89" />
                  </g>

                  <linearGradient transform={my_translate} id="a" gradientUnits="userSpaceOnUse" x1="-439.842" y1="659.41" x2="-410.442" y2="659.41"
                      gradientTransform="matrix(2.0066 0 0 -2.0066 7.837 1628.648)">
                      <stop offset="0" stopColor="#FFF" />
                      <stop offset="1" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <path transform={my_translate} opacity=".7" fill="url(#a)"
                      d="M-815.74 240.994h-58.992c8.026 10.233 10.033 41.134 10.033 54.177v53.175c0 12.04 9.833 21.67 21.672 21.67h27.29v-129.02z" />
                  <path transform={my_translate} opacity=".07"
                      d="M-790.055 240.994h33.91c-8.025 10.233-9.83 41.134-9.83 54.177v53.175c0 11.838-9.833 21.67-21.672 21.67h-2.207v-129.02h-.2z" />           
              </svg>
            
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
  do_react: state.beaker.do_react,
  do_reset_beaker: state.beaker.do_reset_beaker
})

export default connect(
  mapStateToProps,
  {resetBeaker, setReact, incStackIdx}
)(Beaker);
