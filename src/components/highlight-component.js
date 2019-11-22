import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'
import { Button, Header, Grid, Icon } from 'semantic-ui-react'

import { clearStack, scrollTo, resetHighlight } from "../actions/action"
import { clrchg_list, bubble_list } from "../data/reactions"
import { MENU } from "../namespace/mynamespace"

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
            this.myTimeLine.set(this.highlight, { opacity: 0 });
            this.myTimeLine.set(this.all, { top: 150 });
            this.myTimeLine.eventCallback("onComplete", null);

            this.props.clearStack();

            this.myTimeLine
                    .add(new TimelineMax().to(this.highlight, 1, { css: { opacity: 0 } }))
                    .add(new TimelineMax().to(this.stack_layer, 1, { css: { opacity: 1 } }))
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
                //this.myTimeLine.add(new TimelineMax().addPause(1));
                this.myTimeLine
                    .add(new TimelineMax().addPause(1))
                    .add(new TimelineMax().fromTo(this.stack_layer, 1.25, { css: { opacity: 1 } }, { css: { opacity: 0 } }))
                    .add(new TimelineMax().to(this.highlight, 1.25, { css: { opacity: 1 } }))
                    // .eventCallback("onComplete", this.props.scrollTo, [MENU.DESCRIPTION])

                if (reaction.animation.flame)
                    this.myTimeLine.add(new TimelineMax().to(this.all, 1, { top: 100 }))
            }
                    
            this.myTimeLine.play();
        }
    }

    render(){
        const color = '#F4D03F'
        return (
            <div
                ref={el => this.all = el}
                style={{
                    // background: '#777777',
                    position: 'absolute',
                    top: 150,
                    width: '100%',
                    // height: 50,
                    textAlign: "center"
                }}
            >
                <div 
                    style={{
                        position: 'absolute', 
                        zIndex: 101,   
                        width: "100%",
                    }}
                >
                    <div 
                        ref={el => {this.highlight = el}}
                        style={{
                            fontSize: 35,
                            color: color,
                            opacity: 0
                        }}
                    >
                        { this.props.reaction ? this.props.reaction.equation : null }
                    </div>
                </div>

                <div 
                    style={{
                        position: 'absolute', 
                        zIndex: 102,   
                        width: "100%",
                    }}
                >
                    <div 
                        ref={el => {this.stack_layer = el}}
                        style={{
                            fontSize: 40,
                            color: color,
                        }}
                    >
                        [ 
                        <span style={{ marginLeft: 10 }}>
                        {this.props.stack.map( (item, idx) => (
                                <span 
                                    key={idx}
                                    ref={el => {this.stack[idx] = el}}
                                    style={{ marginRight: 15 }}
                                >
                                    {item.display},
                                </span> 
                            ))} 
                        </span>
                        ]
                    </div>
                </div>
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
  { clearStack, scrollTo, resetHighlight }
)(HighLight);
