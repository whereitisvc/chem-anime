import React, {Component} from 'react';

class Liquid extends Component {
  constructor(props){
    super(props);
    this.liquid = null;
  }

  componentDidMount() {
      this.props.setComponentRef('liquid', this.liquid);
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

            <path 
                ref={el => {this.liquid = el}}
                opacity="0" 
                fill="#e4cf85"
                d="M-869.313 305.705v47.054c0 12.84 10.635 23.275 23.677 23.275h59.394c13.042 0 23.677-10.435 23.677-23.276v-47.055h-106.748z" 
            />

        </svg>
    )
  }
}

export default Liquid;
