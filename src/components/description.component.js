import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Image } from 'semantic-ui-react'


class Description extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {/* Design the reaction introduction content here */}
                <br/>
                {
                    new Array(10).fill(0).map(el => (
                        <div>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        <br/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

Description.propTypes = {
}

Description.defaultProps = {
}

const mapStateToProps = state => ({
    highlight: state.beaker.highlight
})

export default connect(
  mapStateToProps,
  {  }
)(Description);
