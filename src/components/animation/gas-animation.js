import React, {Component} from 'react';

class Gas extends Component {
  constructor(props){
    super(props);
    this.gas = [];
  }

  componentDidMount() {
    if (this.props.number === 1)
        this.props.setComponentRef('gas_1', this.gas);
    else 
        this.props.setComponentRef('gas_2', this.gas);
        
  }

  tilde(idx, top, left) { //#e7c983
      return (
        <div
            ref={el => this.gas[idx] = el}
            style={{
                position: 'absolute',
                width: '10%',
                top: top.toString() + "%",
                left: left.toString() + "%",
                color: '#white',
                transform: 'rotate(90deg)',
                opacity: 0
            }}
        >

            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 50">
            <g >
            <text x="-7" y="75" fill="currentColor"  fontFamily="Times" 
                    fontStyle="normal" fontWeight="normal" fontSize="200" textAnchor="start" >
            ~</text>
            </g>
            </svg>
           
        </div>
      )
  }

  render(){
    const top = 70;
    const left = 45;
    return (
        <div style={{ width: "100%", height: "100%" }}>
            { this.tilde(0, top, left  ) }
            { this.tilde(2, top, left + 9) }
            { this.tilde(4, top, left - 9  ) }
            { this.tilde(6, top, left + 5  ) }
            { this.tilde(7, top, left - 5  ) }

            { this.tilde(1, top, left - 20) }
            { this.tilde(5, top, left + 20) }
            { this.tilde(3, top, left + 15) }
            { this.tilde(8, top, left - 15) }
        </div>
        
    )
  }
}

export default Gas;
