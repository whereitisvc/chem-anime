import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Button } from 'semantic-ui-react'

import Beaker from './beaker-component'
import HighLight from './highlight-component'
import Description from './description.component'
import { setExpand } from '../actions/action'

class Canvas extends Component {

  render(){
    return (
        <div 
          style={{
              // background: "yellow",
              position: 'relative',  
              height: 550, // '80%',
              width:  850,//'100%',
              margin: 'auto',
          }}
        >
            <HighLight />

            <Beaker />

            <Description />

        </div>
    )
  }
}

Canvas.propTypes = {
}

Canvas.defaultProps = {
}

const mapStateToProps = state => ({
    expand: state.beaker.expand
})

export default connect(
  mapStateToProps,
  { setExpand }
)(Canvas);
