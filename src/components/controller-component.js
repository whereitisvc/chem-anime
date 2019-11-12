import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"


import { Button } from 'semantic-ui-react'

import { resetBeaker, resetHighlight, selectReact, clearReact } from '../actions/action'

class Controller extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){}

  componentDidUpdate(){}

  render(){
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
                <Button inverted icon='trash alternate' content='Clear' 
                    onClick={() => {
                        this.props.resetBeaker(true);
                        this.props.resetHighlight(true);
                        this.props.clearReact();
                    }}
                />
                <Button inverted icon='undo' content='Replay' 
                    onClick={() => {
                        if (!this.props.reaction) return;
                        this.props.resetBeaker(true);
                        this.props.resetHighlight(true);
                        setTimeout(() => {
                            this.props.selectReact(this.props.reaction);
                        }, 2500);
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
    reaction: state.beaker.reaction
})

export default connect(
  mapStateToProps,
  {resetBeaker, resetHighlight, selectReact, clearReact}
)(Controller);
