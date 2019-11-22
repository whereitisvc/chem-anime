import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'

import { Image, Button, Icon } from 'semantic-ui-react'

import { setExpand, showDetails } from '../actions/action'


class Description extends Component {
    constructor(props){
        super(props);
        this.datials = null;

        this.myTimeLine = new TimelineMax({ paused: true });
        this.show = false;
    }

    componentDidUpdate() {
        const { show_details } = this.props;
        if (show_details && !this.show) {
            this.show = true;
            this.myTimeLine.add(new TimelineMax().to(this.details, 1, { opacity: 1 }))
            this.myTimeLine.eventCallback("onComplete", null);
            this.myTimeLine.play();
        }

        if (!show_details && this.show) {
            this.show = false;
            this.myTimeLine.add(new TimelineMax().to(this.details, 1, { 
                                            opacity: 0,
                                            onComplete: this.props.setExpand,
                                            onCompleteParams: [false]
                                        }))
            // this.myTimeLine.eventCallback("onComplete", this.props.setExpand, [false]);
            this.myTimeLine.play();
        }
    }

    render(){
        return (
            <div
                ref={el => {this.details = el}}
                style={{
                    position: 'absolute',
                    // zIndex: 0,
                    top: 237,
                    right: 0,
                    width: 530,
                    opacity: 0
                }}
            >
                {/* Design the reaction introduction content here */}
                {
                    new Array(3).fill(0).map(el => (
                        <div>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        <br/>
                        </div>
                    ))
                }

                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 250
                    }}
                >
                    <Button  
                        style={{ background: "none", color: "#D5D8DC" }} 
                        icon='close'
                        content='Close'
                        onClick={() => this.props.showDetails(false)}
                    >
                    </Button>
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
    show_details: state.beaker.show_details
})

export default connect(
  mapStateToProps,
  { setExpand, showDetails }
)(Description);
