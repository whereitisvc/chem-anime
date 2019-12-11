import React, {Component} from 'react';

class Percipitate extends Component {
  constructor(props){
    super(props);
    this.percipitate = [];
  }

  componentDidMount() {
      this.props.setComponentRef('percipitate', this.percipitate);
  }

  circle(idx, top, left) { //#e7c983
      return (
        <div
            ref={el => this.percipitate[idx] = el}
            style={{
                position: 'absolute',
                width: '10%',
                top: top.toString() + "%",
                left: left.toString() + "%",
                color: '#e7c983',
                opacity: 0
            }}
        >
            <svg 
                version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="149 273.62837837837833 45.351351351351354 37.31081081081078" 
                width="100%" height="100%"
            >

            <defs>
            <path d="M191.35 291.28C191.35 300.48 182.09 307.94 170.68 307.94C159.26 307.94 150 300.48 150 291.28C150 282.09 159.26 274.63 170.68 274.63C182.09 274.63 191.35 282.09 191.35 291.28Z" id="bXGC1yIOo"></path>
            </defs>

            <g><g><use
            xlinkHref="#bXGC1yIOo" opacity="1" fill="currentColor" fillOpacity="1"></use><g><filter id="shadow1609340" x="126" y="250.63" width="91.35" height="83.31" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood></feFlood><feComposite in2="SourceAlpha" operator="out"></feComposite><feGaussianBlur stdDeviation="2.83"></feGaussianBlur><feOffset dx="2" dy="-2" result="afterOffset"></feOffset><feFlood floodColor="#9e9e9e" floodOpacity="0.8"></feFlood><feComposite in2="afterOffset" operator="in"></feComposite><feMorphology operator="dilate" radius="1"></feMorphology><feComposite in2="SourceAlpha" operator="in"></feComposite></filter><path d="M191.35 291.28C191.35 300.48 182.09 307.94 170.68 307.94C159.26 307.94 150 300.48 150 291.28C150 282.09 159.26 274.63 170.68 274.63C182.09 274.63 191.35 282.09 191.35 291.28Z" id="cp8lgKNjG" fill="white" fillOpacity="1" filter="url(#shadow1609340)"></path></g></g></g>
            
            </svg>
        </div>
      )
  }

  render(){
    const top = 67;
    const left = 27;
    return (
        // <svg 
        //     version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="28.83634482758623 456.72721839080464 245.37931034482767 56.87356321839093" 
        //     width="100%" height="100%"
        // ><defs>
        //     <path d="M271.22 484.16C271.22 498.75 217.14 510.6 150.53 510.6C83.92 510.6 29.84 498.75 29.84 484.16C29.84 469.57 83.92 457.73 150.53 457.73C217.14 457.73 271.22 469.57 271.22 484.16Z" id="a4BqtU39wg">

        // </path></defs><g><g><use 
        //     ref={el => this.percipitate = el}
        //     xlinkHref="#a4BqtU39wg" opacity="0" fill="#8bd3a0" fill-opacity="1"
        // ></use></g></g>
        
        // </svg>
        <div style={{ width: "100%", height: "100%" }}>
            { this.circle(0, top + 5, left     ) }
            { this.circle(1, top + 1, left + 4 ) }
            { this.circle(2, top + 4, left + 7 ) }
            { this.circle(3, top + 5, left + 13) }
            { this.circle(4, top,     left + 12) }
            { this.circle(5, top + 2, left + 14) }
            { this.circle(6, top,     left + 21) }
            { this.circle(7, top + 5, left + 22) }
            { this.circle(8, top + 3, left + 26) }
            { this.circle(9, top,     left + 31) }
            { this.circle(10, top + 4, left + 33) }
            { this.circle(11, top + 3, left + 40) }
        </div>
        
    )
  }
}

export default Percipitate;
