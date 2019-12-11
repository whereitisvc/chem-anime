import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'

import { Image, Button, Icon, List } from 'semantic-ui-react'

import { setExpand, showDetails, reactFinish } from '../actions/action'
import "./description-component.css"


class Description extends Component {
    constructor(props){
        super(props);
        this.datials = null;

        this.myTimeLine = new TimelineMax({ paused: true });
        this.show = false;
    }

    showDescription() {
        const { description } = this.props.reaction;
        return (
            <div>
                {
                    description.map((line, idx) => (
                        <div key={idx} className="item">
                            <Icon className="icon" name="angle right"/>
                            <div className="text">{line}</div>
                        </div>
                    ))
                }
            </div>
        )
    }

    componentDidUpdate() {
        const { show_details } = this.props;
        if (show_details && !this.show) {
            this.show = true;
            this.myTimeLine.add(new TimelineMax().to(this.details, 1, { opacity: 1 }))
            this.myTimeLine.addCallback(() => this.props.reactFinish(), "+=0");
            this.myTimeLine.play();
        }

        if (!show_details && this.show) {
            this.show = false;
            this.myTimeLine.add(new TimelineMax().to(this.details, 1, { 
                                            opacity: 0,
                                            onComplete: this.props.setExpand,
                                            onCompleteParams: [false]
                                        }))
            this.myTimeLine.play();
        }
    }

    render(){
        return (
            <div
                ref={el => {this.details = el}}
                className="all"
            >

                <div 
                    ref={el => {this.highlight = el}}
                    className="reaction"
                >
                    { this.props.reaction ? this.props.reaction.equation : "test + test -> test + test" }
                </div>

                <div className="list">
                { this.props.reaction ? this.showDescription() : "" }
                </div>
            </div>
        )
    }
}

Description.propTypes = {
}

Description.defaultProps = {
}

const mapStateToProps = state => ({
    highlight: state.beaker.highlight,
    show_details: state.beaker.show_details,
    reaction: state.beaker.reaction
})

export default connect(
  mapStateToProps,
  { setExpand, showDetails, reactFinish }
)(Description);
