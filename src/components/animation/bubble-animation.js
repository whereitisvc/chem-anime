import React, {Component} from 'react';

class Bubble extends Component {
  constructor(props){
    super(props);
    this.pops = [];
    this.boile = [];
  }

  componentDidMount() {
    this.props.setComponentRef('pops', this.pops);
    this.props.setComponentRef('boile', this.boile);
  }

  render(){
    return (
        <svg
            // style={{ backgroundColor: "#577057" }}
            xmlns="https://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width= "100%" // "300px"
            height="100%" // "550px"
            viewBox="-891 230 150 50"
        >

            <g fill="#fff">
                <circle ref={el => {this.pops[0] = el}} opacity="0" cx="-831.189" cy="320" r="13.645" />
                <circle ref={el => {this.pops[1] = el}} opacity="0" cx="-791.459" cy="320" r="10.835" />
                <circle ref={el => {this.pops[2] = el}} opacity="0" cx="-836.607" cy="320" r="3.813" />
            </g>

            <g fill="#FFF" >
                <circle ref={el => {this.boile[0] = el}} opacity="0" cx="-851.054" cy="365" r="5.418" />
                <circle ref={el => {this.boile[1] = el}} opacity="0" cx="-777.899" cy="365" r="5.418" />
                <circle ref={el => {this.boile[2] = el}} opacity="0" cx="-831.054" cy="365" r="10.244" />
                <circle ref={el => {this.boile[3] = el}} opacity="0" cx="-802.902" cy="365" r="7.152" />
                <circle ref={el => {this.boile[4] = el}} opacity="0" cx="-858.148" cy="365" r="7.152" />
                <circle ref={el => {this.boile[5] = el}} opacity="0" cx="-810.054" cy="365" r="7.152" />
                <circle ref={el => {this.boile[6] = el}} opacity="0" cx="-783.317" cy="365" r="2.89" />
            </g>

        </svg>
    )
  }
}

export default Bubble;
