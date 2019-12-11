import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'
import { Button, Header, Grid, Icon } from 'semantic-ui-react'

import { clearStack, resetHighlight } from "../actions/action"
import { clrchg_list, bubble_list } from "../data/reactions"
import { MENU } from "../namespace/mynamespace"
import "./highlight-component.css"

class HighLight extends Component {
    constructor(props){
        super(props);
        this.highlight = null;
        this.stack = [];
        this.stack_layer = null;

        this.myTimeLine = new TimelineMax({ paused: true });
        this.stack_idx = 0;
    }

    componentDidUpdate() {

        const { do_reset_highlight, reaction } = this.props;

        if (do_reset_highlight) {
            for (let i=0; i<this.stack.length; i++) this.stack[i] = null;
            this.myTimeLine.clear();
            this.myTimeLine.eventCallback("onComplete", null);
            this.props.clearStack();
            this.myTimeLine
                    .add(new TimelineMax().to(this.stack_layer, 1, { css: { opacity: 1 } }), "+=1")
                    .play();
            this.props.resetHighlight(false);
        }
        else {

            if (this.props.stack.length > 0) {
                let idx = this.props.stack.length - 1;
                this.myTimeLine
                    .add(new TimelineMax().fromTo(this.stack[idx], 1.5, { css: { opacity: 0 } }, { css: { opacity: 1 } }));
            }

            if (this.props.do_react) {
                this.myTimeLine
                    .add(new TimelineMax().addPause(0.5))
                    .add(new TimelineMax().fromTo(this.stack_layer, 1.25, { css: { opacity: 1 } }, { css: { opacity: 0 } }))
            }
                    
            this.myTimeLine.play();
        }
    }

    render(){
        const color = '#F4D03F'
        return (

                    <div 
                        ref={el => {this.stack_layer = el}}
                        className="stack-layer"
                    >
                        [ 
                        <span style={{ marginLeft: 10 }}>
                        {this.props.stack.map( (item, idx) => (
                                <span 
                                    key={idx}
                                    ref={el => {this.stack[idx] = el}}
                                    style={{ marginRight: 15, color: "#F4D03F" }}
                                >
                                    {item.display}<span style={{ color: "rgb(189, 189, 189)" }}> ,</span>
                                </span> 
                            ))} 
                        </span>
                        ]
                    </div>
        )
    }
}

HighLight.propTypes = {
}

HighLight.defaultProps = {
}

const mapStateToProps = state => ({
    reaction: state.beaker.reaction,
    stack: state.beaker.stack,
    do_react: state.beaker.do_react,
    do_reset_highlight: state.beaker.do_reset_highlight
})

export default connect(
  mapStateToProps,
  { clearStack, resetHighlight }
)(HighLight);
