import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Button, Menu } from 'semantic-ui-react'

import { CONTROLLER } from '../namespace/mynamespace'
import { resetBeaker, resetHighlight, selectReact, clearReact, setController, setExpand, showDetails } from '../actions/action'

import "./controller-component.css"

class Controller extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){}

  componentDidUpdate(){}

  render(){
    const btn_style_1 = { color: "#D5D8DC", background: "none", width: 80, textAlign: "center" }
    const btn_style = { color: "#D5D8DC", background: "none"}
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
                <Button className="mytab" style={btn_style_1} onClick={() => this.props.setController(CONTROLLER.SOLID)}> Solid </Button>
                </div>

                <div className="tab-box">
                <Button className="mytab" style={btn_style_1} onClick={() => this.props.setController(CONTROLLER.LIQUID)}> Liquid </Button>
                </div>
                
                <div className="tab-box">
                <Button className="mytab" style={btn_style_1} onClick={() => this.props.setController(CONTROLLER.GAS)}> Gas </Button>
                </div>
              </Button.Group>

             
                <Button.Group inverted>
                <Button style={btn_style} icon='trash alternate' content='Clear' 
                    onClick={() => {
                        this.props.resetBeaker(true);
                        this.props.resetHighlight(true);
                        this.props.clearReact();

                        if (this.props.expand) this.props.showDetails(false);
                    }}
                />
                <Button style={btn_style} icon='undo' content='Replay'
                    onClick={() => {
                        if (!this.props.reaction) return;
                        this.props.resetBeaker(true);
                        this.props.resetHighlight(true);

                        if (this.props.expand) this.props.showDetails(false);

                        setTimeout(() => {
                            this.props.selectReact(this.props.reaction);
                        }, 2700);
                    }}
                />
                {/* <Button style={btn_style} icon='add' content='Details' 
                    onClick={() => {
                      const { expand } = this.props;
                      if (!expand)
                        this.props.setExpand(true);
                      else
                        this.props.showDetails(false);
                    }}
                /> */}
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
    expand: state.beaker.expand
})

export default connect(
  mapStateToProps,
  {resetBeaker, resetHighlight, selectReact, clearReact, setController, setExpand, showDetails}
)(Controller);
