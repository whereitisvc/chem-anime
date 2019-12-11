import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Button, Menu } from 'semantic-ui-react'

import { CONTROLLER } from '../namespace/mynamespace'
import { resetBeaker, resetHighlight, selectReact, clearReact, setController, setExpand, showDetails } from '../actions/action'

import "./controller-component.css"
import "../App.css"

class Controller extends Component {
  constructor(props){
    super(props);
    this.state = {
      focus: CONTROLLER.LIQUID
    }
  }

  componentDidMount(){}

  componentDidUpdate(){}

  render(){
    const { focus } = this.state;
    let focus_bar = "focus-bar";
    if (focus === CONTROLLER.SOLID) focus_bar += " solid";
    else if (focus === CONTROLLER.LIQUID) focus_bar += " liquid";
    else if (focus === CONTROLLER.GAS) focus_bar += " gas";
    return (
        <div 
            ref={el => {this.all = el}}
            style={{
                // background: "yellow",
                // position: 'absolute', 
                // zIndex: 1,   
                // bottom: '13vh', 
                // right: '24vw',
                // width: '50vw',
                // margin: 'auto'
            }}
        >
              <div style={{  }}>
              <Button.Group inverted>

                <div className="tab-box">
                <div className={focus_bar}></div>
                <Button 
                    className="mytab"
                    onClick={() => {
                          this.props.setController(CONTROLLER.SOLID)
                          this.setState({ focus: CONTROLLER.SOLID })
                        }}
                > 
                  Solid 
                </Button>
                </div>

                <div className="tab-box">
                <Button 
                    className="mytab"
                    onClick={() => {
                          this.props.setController(CONTROLLER.LIQUID)
                          this.setState({ focus: CONTROLLER.LIQUID })
                        }}
                > 
                  Liquid 
                </Button>
                </div>
                
                <div className="tab-box">
                <Button 
                    className="mytab"
                    onClick={() => {
                          this.props.setController(CONTROLLER.GAS)
                          this.setState({ focus: CONTROLLER.GAS })
                        }}
                > 
                  Gas 
                </Button>
                </div>
              </Button.Group>

             
                <Button.Group inverted className="control-group">
                <Button className={this.props.expanding ? "control-btn disable" : "control-btn"} icon='trash alternate' content='Clear' 
                    onClick={() => {
                        if (this.props.expanding) return;
                        this.props.resetBeaker(true);
                        this.props.resetHighlight(true);
                        setTimeout(() => this.props.clearReact(), 1000);

                        if (this.props.expand) this.props.showDetails(false);
                    }}
                />
                <Button className={this.props.expanding ? "control-btn disable" : "control-btn"} icon='undo' content='Replay'
                    onClick={() => {
                        if (!this.props.reaction) return;
                        if (this.props.expanding) return; 
                        this.props.resetBeaker(true);
                        this.props.resetHighlight(true);

                        if (this.props.expand) this.props.showDetails(false);

                        setTimeout(() => {
                            this.props.selectReact(this.props.reaction);
                        }, 2700);
                    }}
                />
              </Button.Group>

              

              
              </div>
        </div>
    )
  }
}

Controller.propTypes = {
}

Controller.defaultProps = {
}

const mapStateToProps = state => ({
    reaction: state.beaker.reaction,
    controller: state.beaker.controller,
    expand: state.beaker.expand,
    expanding: state.beaker.expanding
})

export default connect(
  mapStateToProps,
  {resetBeaker, resetHighlight, selectReact, clearReact, setController, setExpand, showDetails}
)(Controller);
