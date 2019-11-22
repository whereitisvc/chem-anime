import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Button, Header, Grid, Divider, Icon } from 'semantic-ui-react'

// import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Description from './description.component'
import { selectReact, selectItem, setScroll } from '../actions/action'
import { MENU, CONTROLLER, EPISODE } from '../namespace/mynamespace'
import { clrchg_list, bubble_list, percipitate_list, heat_list } from '../data/reactions'
import * as Items from '../data/items';

import "./selector.css";

const solid_ary = [Items.Fe, Items.CuO, Items.CaCO3, Items.NaHCO3, Items.Fe2O3, Items.CuCO3];

const liquid_ary = [Items.H2SO4, Items.HCl, Items.HBr, Items.PbNO32, Items.NaI, Items.NaCl, Items.AgNO3, Items.HNO3,
                    Items.CdSO4, Items.MgCl2, Items.K2S, Items.NaOH];

const gas_ary = [Items.CH4, Items.O2, Items.C3H8, Items.C4H10, Items.C3H7OH];

const classNames = require('classnames');

class Selector extends Component {
    constructor(props){
        super(props);
        this.scroll = null;
        this.menu = null;
        this.description = null;
        this.item2item = null;

        let table = new Map();
        solid_ary.forEach(item => table.set(item.id, 1));
        liquid_ary.forEach(item => table.set(item.id, 1));
        gas_ary.forEach(item => table.set(item.id, 1));

        this.state = {
            table: table
        }
    }

    reactOnClick(react) {
        if (this.props.reaction) return;
        this.props.selectReact(react);
    }

    itemonClick(item) {
        if (!this.state.table.get(item.id)) return;
        if (this.props.reaction) return;
        if (this.props.stack.length >= 2) return;
        this.props.selectItem(item);
    }

    itemButton(item) {
        let type = item.animation.type;
        let icon;
        if (type === EPISODE.ADD_SOLID) icon = "cube";
        else if (type === EPISODE.ADD_LIQUID) icon = "tint";
        else icon = "circle outline"

        let status = this.state.table.get(item.id);
        let btn_class = classNames({
            itemBtn: true,
            active: status === 1,
            selected: status === 2
        })

        return (
            <div 
                className={btn_class}
                onClick={() => this.itemonClick(item)}
                style={{ color: item.animation.color }}
            >
                <div className="itemBox">
                    <Icon className="item" name={icon} size='huge' /> 
                </div>
                <div className="itemText"> {item.display} </div>
            </div>
        )
    }

    switchTab(tab) {
        let ary = [];
        switch(tab) {
            case CONTROLLER.SOLID:
                ary = solid_ary;
                break;
            case CONTROLLER.LIQUID:
                ary = liquid_ary;
                break;
            case CONTROLLER.GAS:
                ary = gas_ary;
                break;
            default:
        }
        // if (ary.length < 10) return [...ary, ...ary].map((item, idx) => this.itemButton(item));
        return ary.map((item, idx) => this.itemButton(item));
    }

    componentDidMount() {
        let item2item = new Map();

        function initOrPush(key, value) {
            if (!item2item.has(key)) 
                item2item.set(key, new Set().add(value));
            else
                item2item.get(key).add(value);
        }
        function mapInput(input) {
            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < input.length; j++) {
                    if (i == j) continue;
                    initOrPush(input[i].id, input[j].id);
                }
            }
        }
        clrchg_list.forEach(reaction => mapInput(reaction.input));
        bubble_list.forEach(reaction => mapInput(reaction.input));
        percipitate_list.forEach(reaction => mapInput(reaction.input));
        heat_list.forEach(reaction => mapInput(reaction.input));

        this.item2item = item2item;
    }

    componentDidUpdate() {
        const { stack, stack_idx, do_reset_beaker } = this.props;
        const { table } = this.state;

        if (do_reset_beaker) {
            for (let [key, active] of table) {
                table.set(key, 1);
            }
        }
        else {
            if (stack_idx < stack.length) {
                let item = stack[stack_idx];
                table.set(item.id, 2);
                for (let [key, active] of table) {
                    if ( key === item.id ) continue;
                    if (active && !this.item2item.get(item.id).has(key))
                        table.set(key, 0);
                }
            }
        }
    }

    render(){
        const react_font_size = 16;
        return (
            <PerfectScrollbar
                containerRef={el => this.scroll = el}
                style={{
                    // background: '#F6DDCC',
                    width: '80%',
                    height: "15vh",
                    margin: 'auto',
                    marginTop: 20
                }}
                // suppressScrollY
            >
            {/* <div style={{ width: 2000, background: 'black', margin: 10 }}> test </div> */}
            <div style={{ width: 2000, textAlign: "left" }}>
            { this.switchTab(this.props.controller) }
            </div>
            </PerfectScrollbar>
        )
    }
}

Selector.propTypes = {
}

Selector.defaultProps = {
}

const mapStateToProps = state => ({
    stack: state.beaker.stack,
    reaction: state.beaker.reaction,
    controller: state.beaker.controller,
    stack: state.beaker.stack,
    stack_idx: state.beaker.stack_idx,
    do_reset_beaker: state.beaker.do_reset_beaker
})

export default connect(
  mapStateToProps,
  { selectReact, selectItem, setScroll }
)(Selector);
