import React, {Component} from 'react';
import './flame-animation.css'

class Match extends Component {
  constructor(props) {
    super(props);
    this.match = null;
    this.spark = null;
  }
  componentDidMount() {
    this.props.setComponentRef('match', this.match);
    this.props.setComponentRef('spark', this.spark);
  }
  render(){
    return (
        <div style={{ width: '100%', height: '100%' }}>
        <div 
            ref={el => this.match = el} 
            style={{ 
                // background: 'green',
                position: 'absolute',
                top: '200px',
                left: '-20px',
                width: '60%',
                opacity: 0,
                // transform: 'rotate(0deg) translate(-10%, 0)'
                transform: 'rotate(10deg)'
                // transform: 'rotate(10deg) translate(-20px, -10px)'
            }}
        >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="95.01351351351352 139.81081081081086 262.74324324324334 31.567567567567522" 
                width="100%"
                //width="258.74" 
                //height="27.57"
            >
                <defs><path d="" id="b2cZR2bHHS"></path><path d="M96.01 144.26L330.34 144.26L330.34 163.78L96.01 163.78L96.01 144.26Z" id="d5J8qDcaAN"></path><path d="M341.55 140.81C348.84 140.81 354.76 146.72 354.76 154.02C354.76 156.66 354.76 151.38 354.76 154.02C354.76 161.32 348.84 167.23 341.55 167.23C332.47 167.23 318.46 167.23 309.39 167.23C302.09 167.23 296.18 161.32 296.18 154.02C296.18 151.38 296.18 156.66 296.18 154.02C296.18 146.72 302.09 140.81 309.39 140.81C318.46 140.81 332.47 140.81 341.55 140.81Z" id="i10cXPO1Ia"></path></defs><g><g><g>
                <use xlinkHref="#b2cZR2bHHS" opacity="1" fillOpacity="0" stroke="#2f4480" strokeWidth="1" strokeOpacity="1"></use></g></g><g><use xlinkHref="#d5J8qDcaAN" opacity="1" fill="#b68d61" fillOpacity="1"></use></g><g>
                <use xlinkHref="#i10cXPO1Ia" opacity="1" fill="#b14a47" fillOpacity="1"></use></g></g>
            </svg>

        </div>

        <div 
            className="blue circle" 
            ref={el => this.spark= el} 
            style={{
                position: 'absolute',
                top: '215px',
                left: '135px',
                opacity: 0,
                // transform: 'translate(5px, -100px)'
                // transform: 'translate(5px, 0px)'
            }}
        >
        </div>
        </div>
    )
  }
}

export default Match;
