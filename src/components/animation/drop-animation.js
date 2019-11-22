import React, {Component} from 'react';

class Drop extends Component {
  constructor(props){
    super(props);
    this.drop = null;
  }

  componentDidMount() {
      this.props.setComponentRef('drop', this.drop);
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

            <circle 
                ref={el => {this.drop = el}} 
                opacity="0"
                fill="#FF5B00" cx="-814" cy="130" r="3"
            >                
            </circle>

        </svg>
    )
  }
}

export default Drop;
