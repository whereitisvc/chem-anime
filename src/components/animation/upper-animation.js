import React, {Component} from 'react';
import "./base-animation.css"

class Upper extends Component {
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

            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-439.842" y1="659.41" x2="-410.442" y2="659.41"
                gradientTransform="matrix(2.0066 0 0 -2.0066 7.837 1628.648)">
                <stop offset="0" stopColor="#FFF" />
                <stop offset="1" stopColor="#FFF" stopOpacity="0" />
            </linearGradient>
            <path opacity=".7" fill="url(#a)"
                d="M-815.74 240.994h-58.992c8.026 10.233 10.033 41.134 10.033 54.177v53.175c0 12.04 9.833 21.67 21.672 21.67h27.29v-129.02z" />
            <path opacity=".07"
                d="M-790.055 240.994h33.91c-8.025 10.233-9.83 41.134-9.83 54.177v53.175c0 11.838-9.833 21.67-21.672 21.67h-2.207v-129.02h-.2z" />           

        </svg>
    )
  }
}

export default Upper;
