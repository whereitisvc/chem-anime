import React, {Component} from 'react';
import { connect } from "react-redux"
import { Image, Button, Icon } from 'semantic-ui-react'
import "./intro-component.css"

class Intro extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="canvas">
                <div className="beaker">
                <svg
                    // style={{ backgroundColor: "#577057" }}
                    xmlns="https://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width= "100%" // "300px"
                    height="100%" // "550px"
                    viewBox="-891 230 150 50"
                >
                    <path 
                        className="stroke"
                        d="M-886.97 234.573c9.63 12.44 12.038 27.69 12.038 43.542v76.65c0 14.448 11.84 26.287 26.286 26.287h66.016c14.447 0 26.286-11.84 26.286-26.286v-75.848c0-16.052 2.208-31.503 12.04-44.144H-886.97v-.2z" 
                    />
                </svg>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
  {}
)(Intro);
