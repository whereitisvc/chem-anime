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

    itemonClick(item) {
        if (this.props.reaction) return;
        if (this.props.stack.length >= 3) return;
        this.props.selectItem(item);
    }

    componentDidUpdate() {
        const { do_scroll, scroll_to } = this.props;
        if (do_scroll) {
            let pos = 0;
            switch(scroll_to) {
                case MENU.DESCRIPTION:
                    pos = this.description.getBoundingClientRect().top - this.menu.getBoundingClientRect().top - 10;
                    break;
                default:
            }
            this.scroll.scrollTo({ top: pos, left: 0, behavior: 'smooth' });
            this.props.setScroll(false);
        }
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
            <PerfectScrollbar
                containerRef={el => this.scroll = el}
                style={{
                    position: "absolute",
                    top: "20vh",
                    left: "22vw",
                    width: '30vw',
                    height: "62vh"
                }}
            >

            <div ref={el => this.menu = el} style={{ width: '25vw', }}>
                
                <Header size='large' style={{ color: "white" }}>Solid</Header>
                {
                    [Items.Fe, Items.CuO, Items.CaCO3, Items.NaHCO3]
                        .map((item, idx) => this.itemButton(item))
                }

                <Header size='large' style={{ color: "white" }}>Liquid & Aqueous Solution</Header>
                {
                    [Items.H2SO4, Items.HCl, Items.HBr, Items.PbNO32, Items.NaI, Items.NaCl, Items.AgNO3]
                        .map((item, idx) => this.itemButton(item))
                }
                

                <br />
                <br />
                <Divider />
                

                <Header size='large' color='teal'>Color Change</Header>
                { clrchg_list.map(react => (
                    <div style={{ marginBottom: 5 }}>
                    <Button 
                        style={{ background: "none", color: "#DCDCDC", fontSize: react_font_size, paddingLeft: 0 }}
                        key={react.name}
                        onClick={() => this.reactOnClick(react)}
                    >
                        {react.equation}
                    </Button>
                    </div>
                )) }

                
                    
                <Header size='large' color='teal'>Gas Bubble</Header>
                { bubble_list.map(react => (
                    <div style={{ marginBottom: 5 }}>
                    <Button 
                        style={{ background: "none", color: "#DCDCDC", fontSize: react_font_size, paddingLeft: 0 }}
                        key={react.name}
                        onClick={() => this.reactOnClick(react)}
                    >
                        {react.equation}
                    </Button>
                    </div>
                )) }

                
                    
                <Header size='large' color='teal'>Gas Bubble</Header>
                { bubble_list.map(react => (
                    <div style={{ marginBottom: 5 }}>
                    <Button 
                        style={{ background: "none", color: "#DCDCDC", fontSize: react_font_size, paddingLeft: 0 }}
                        key={react.name}
                        onClick={() => this.reactOnClick(react)}
                    >
                        {react.equation}
                    </Button>
                    </div>
                )) }

                
                
                <Header size='large' color='teal'>Color Change</Header>
                { clrchg_list.map(react => (
                    <div style={{ marginBottom: 5 }}>
                    <Button 
                        style={{ background: "none", color: "#DCDCDC", fontSize: react_font_size, paddingLeft: 0 }}
                        key={react.name}
                        onClick={() => this.reactOnClick(react)}
                    >
                        {react.equation}
                    </Button>
                    </div>
                )) }

                
                <br />
                <Divider />
                <br />

                <div ref={el => this.description = el}>
                    <Description />
                </div>

            </div>
            </PerfectScrollbar>
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
