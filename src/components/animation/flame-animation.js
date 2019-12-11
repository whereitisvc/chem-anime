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
          className="container" 
          ref={el => this.flame = el} 
          style={{ 
            opacity: 0,
            // color: 'blue'
          }}
        >
            <div className="red flame"></div>
            <div className="orange flame"></div>
            <div className="yellow flame"></div>

            {/* <div className="blue1 flame"></div>
            <div className="blue2 flame"></div>
            <div className="blue3 flame"></div> */}


            <div className="white flame" ></div>

            {/* <div class="blue circle" ></div> */}
            {/* <div class="black circle"></div> */}
        </div>
    )
  }
}

export default Flame;
