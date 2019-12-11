import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'

import { Button } from 'semantic-ui-react'

import { newReactFound } from '../actions/action'
import CurvedArrow from './Curved_Arrow.svg'
import "./navbtn-component.css"

class NavBtn extends Component {
  constructor(props) {
      super(props);
      this.shadow1 = null;
      this.unlock = null;
      this.myTimeLine = new TimelineMax({ paused: true });
  }
  componentDidUpdate() {
      const { newfound, finished, do_reset_beaker } = this.props;
      if (do_reset_beaker) {
        this.myTimeLine
                    .add( new TimelineMax().to(this.unlock, 1, { opacity: 0 }) );
      }
      if (newfound && finished) {
        this.myTimeLine
                    .add( new TimelineMax().fromTo(this.shadow1, 2, { opacity: 1, scale: 0 }, { opacity: 0, scale: 5, ease: Expo.easeOut }) )
                    .add( new TimelineMax().fromTo(this.unlock, 1, { opacity: 0 }, { opacity: .85 }), '-=2' );
        this.props.newReactFound(false);
        this.myTimeLine.play();
      }
  }
  render(){
    const { main, collection } = this.props;
    return (
        <div className="nav">

            <div ref={el => this.unlock = el} className="unlock">Reaction Unlocked !</div>
            <div 
                ref={el => this.shadow1 = el}
                circular icon="down arrow" 
                className="nav-shadow-1" 
            />
            <Button 
                circular 
                icon="down arrow" 
                className="nav-btn-1" 
                onClick={() => {
                    this.props.collection.scrollIntoView({ behavior: "smooth" });
                }}
            />

            <Button 
                circular 
                icon="up arrow" 
                className="nav-btn-2"   
                onClick={() => {
                    this.props.main.scrollIntoView({ behavior: "smooth" });
                }}
            />

        </div>
    )
  }
}

NavBtn.propTypes = {
}

NavBtn.defaultProps = {
}

const mapStateToProps = state => ({
    finished: state.beaker.finished,
    do_reset_beaker: state.beaker.do_reset_beaker,
    main: state.nav.main,
    collection: state.nav.collection,
    newfound: state.nav.newfound
})

export default connect(
  mapStateToProps,
  { newReactFound }
)(NavBtn);
