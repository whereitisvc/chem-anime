import React, {Component} from 'react';

import { Icon } from 'semantic-ui-react'

class Solid extends Component {
  constructor(props){
    super(props);
    this.solid = null;
  }

  componentDidMount() {
      this.props.setComponentRef('solid', this.solid);
  }

  render(){
    return (
        <div
            ref={el => this.solid = el} 
            style={{
                // backgroundColor: "#577057",
                position: 'absolute',
                top: 0,
                left: '43%',
                opacity: 0,
                width: '15%',
                color: 'black'
            }}
        >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="229.40540540540542 459.7094594594594 97.04054054054052 97.04054054054058" 
                width="100%" height="100%"><defs><path d="M303.45 460.71C314.49 460.71 323.45 469.66 323.45 480.71C323.45 495.32 323.45 519.14 323.45 533.75C323.45 544.8 314.49 553.75 303.45 553.75C288.84 553.75 265.01 553.75 250.41 553.75C239.36 553.75 230.41 544.8 230.41 533.75C230.41 519.14 230.41 495.32 230.41 480.71C230.41 469.66 239.36 460.71 250.41 460.71C265.01 460.71 288.84 460.71 303.45 460.71Z" id="aEmjPEmbI"></path></defs><g><g>
                <use xlinkHref="#aEmjPEmbI" opacity="1" fill="currentColor" fill-opacity="1"></use><g><filter id="shadow6209472" x="174.41" y="404.71" width="207.04" height="205.04" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood></feFlood><feComposite in2="SourceAlpha" operator="out"></feComposite><feGaussianBlur stdDeviation="4.8"></feGaussianBlur><feOffset dx="2" dy="0" result="afterOffset"></feOffset><feFlood flood-color="#ffffff" flood-opacity="0.8"></feFlood><feComposite in2="afterOffset" operator="in"></feComposite><feMorphology operator="dilate" radius="3"></feMorphology><feComposite in2="SourceAlpha" operator="in"></feComposite></filter><path d="M303.45 460.71C314.49 460.71 323.45 469.66 323.45 480.71C323.45 495.32 323.45 519.14 323.45 533.75C323.45 544.8 314.49 553.75 303.45 553.75C288.84 553.75 265.01 553.75 250.41 553.75C239.36 553.75 230.41 544.8 230.41 533.75C230.41 519.14 230.41 495.32 230.41 480.71C230.41 469.66 239.36 460.71 250.41 460.71C265.01 460.71 288.84 460.71 303.45 460.71Z" id="jtuKCCpkM" fill="white" fill-opacity="1" filter="url(#shadow6209472)"></path></g></g></g></svg>
        </div>
    )
  }
}

export default Solid;
