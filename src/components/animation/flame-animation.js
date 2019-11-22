import React, {Component} from 'react';
import './flame-animation.css'

class Flame extends Component {
  constructor(props) {
    super(props);
    this.flame = null;
  }
  componentDidMount() {
    this.props.setComponentRef('flame', this.flame);
  }
  render(){
    return (
        <div 
          class="container" 
          ref={el => this.flame = el} 
          style={{ 
            opacity: 0,
            // color: 'blue'
          }}
        >
            <div class="red flame"></div>
            <div class="orange flame"></div>
            <div class="yellow flame"></div>
            <div class="white flame" ></div>

            {/* <div class="blue circle" ></div> */}
            {/* <div class="black circle"></div> */}
        </div>
    )
  }
}

export default Flame;
