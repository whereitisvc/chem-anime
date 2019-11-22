import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

// import ScrollArea from 'react-scrollbar'
// import { ScrollTo, ScrollArea } from "react-scroll-to";
import { TimelineLite, TimelineMax, TweenLite, Expo, Power0 } from 'gsap'
import { Button, Header, Grid, Divider } from 'semantic-ui-react'

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Description from './description.component'
import { selectReact, selectItem, setScroll } from '../actions/action'
import { MENU } from '../namespace/mynamespace'
import { clrchg_list, bubble_list } from '../data/reactions'
import * as Items from '../data/items';

class Menu extends Component {
    constructor(props){
        super(props);
        this.scroll = null;
        this.menu = null;
        this.description = null;
    }

    reactOnClick(react) {
        if (this.props.reaction) return;
        this.props.selectReact(react);
    }

    itemButton(item) {
        return (
            <Button
                key={item.id}
                onClick={() => this.itemonClick(item)}
                style={{
                    background: item.animation.color,
                    color: item.animation.txt,
                    width: "8vw",
                    marginBottom: 5
                }}
            >
                {item.display}
            </Button>
        )
    }


    render(){
        const react_font_size = 16;
        return (
            <div 
                style={{
                    background: 'white',
                    height: '100vh'
                }}
            > 
            </div>
        )
    }
}

Menu.propTypes = {
}

Menu.defaultProps = {
}

const mapStateToProps = state => ({
    stack: state.beaker.stack,
    do_scroll: state.beaker.do_scroll,
    scroll_to: state.beaker.scroll_to,
    reaction: state.beaker.reaction
})

export default connect(
  mapStateToProps,
  { selectReact, selectItem, setScroll }
)(Menu);
