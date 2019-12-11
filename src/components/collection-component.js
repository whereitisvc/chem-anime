import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Button, Header, Grid, Icon, Visibility } from 'semantic-ui-react'

import { resetBeaker, resetHighlight, clearReact, selectReact, showDetails, newReactFound, setUnlockAll } from '../actions/action'
import { clrchg_list, bubble_list, percipitate_list, heat_list } from "../data/reactions"
import { EPISODE } from "../namespace/mynamespace"

import "./collection-component.css"

class Collection extends Component {
    constructor(props){
        super(props);

        let unlock_table = new Map();
        clrchg_list.forEach(react => unlock_table.set(react.name, false));
        bubble_list.forEach(react => unlock_table.set(react.name, false));
        percipitate_list.forEach(react => unlock_table.set(react.name, false));
        heat_list.forEach(react => unlock_table.set(react.name, false));
        // clrchg_list.forEach(react => unlock_table.set(react.name, true));
        // bubble_list.forEach(react => unlock_table.set(react.name, true));
        // percipitate_list.forEach(react => unlock_table.set(react.name, true));
        // heat_list.forEach(react => unlock_table.set(react.name, true));

        // unlock_table.set("CLR_2", false);
        // unlock_table.set("CLR_4", false);

        this.cheat_mode = false;

        this.state = {
            unlock_table: unlock_table,
            clrchg_visable: false,
            bubble_visable: false,
            percipitate_visable: false,
            heat_visable: false,

            clrchg_unlock: 0,
            bubble_unlock: 0,
            percipitate_unlock: 0,
            heat_unlock: 0
        }
    }

    unlockAll(val) {
        // Since we use Map().set to change the state variable (unlock_table) instead of setState()
        // We use setState({ ... }) to fire the render function
        for ( let [k, v] of this.state.unlock_table ) {
            this.state.unlock_table.set(k, val);
        }
        this.setState({ ...this.state }); 
        this.props.setUnlockAll(val);
    }

    reactOnClick(react) {

        if (this.props.stack.length === 0) {
            this.props.selectReact(react);
        }
        else  {
            this.props.resetBeaker(true);
            this.props.resetHighlight(true);
            this.props.showDetails(false);
            setTimeout(() => this.props.clearReact(), 1000);
            setTimeout(() => this.props.selectReact(react), 3000);
        }
    }

    visableOnChange(field, value) {
        this.setState({ [field]: value });
    }

    showInput(input) {
        const { display, animation } = input;

        let icon = "";
        if (animation.type === EPISODE.ADD_SOLID) icon = "cube";
        else if (animation.type === EPISODE.ADD_LIQUID) icon = "tint";
        else icon = "circle outline";

        return (
            <div className="slot">
                <div className="icon"><Icon style={{ color: animation.color }} name={icon} /></div>
                <div className="text">{display}</div> 
            </div>
        )
    }


    showCategory(list, title, unlock_type, field, icon) {
        let visable = this.state[field];
        let count = this.props.unlock[unlock_type]
        return (
            <div>
            <Visibility 
                once={false} 
                onBottomVisible={() => this.setState({ [field]: true })}
                onOffScreen={() => this.setState({ [field]: false })}
            >
            <div className="header">{title} <span className="count"> ( {count} / 4 ) </span></div>
                { 
                    list.map(react => {
                        let open = false;
                        let type_clr = "#85C1E9";
                        if (visable && this.state.unlock_table.get(react.name)) open = true;
                        if (react.animation.hasOwnProperty("clr")) type_clr = react.animation.clr;
                        return (
                            <div   
                                key={react.name}
                                className={open ? "accomplish_box open" : "accomplish_box"} 
                                style={{ marginBottom: 5 }}
                                onClick={() => {
                                    if (!open) return;
                                    this.props.main.scrollIntoView({ behavior: "smooth" });
                                    setTimeout(() => this.reactOnClick(react), 1200);
                                }}
                            >
                            <div className="box" >

                                <div className="accomplish">
                                    <div className="slot">
                                    <Icon style={{ color: "#808B96" }} name="lock"/>
                                    </div>
                                    { this.showInput(react.input[0]) }
                                    { this.showInput(react.input[1]) }
                                    <Icon style={{ fontSize: 25, color: "#808B96", marginLeft: 10 }} name="arrow right" /> 
                                    <Icon style={{ fontSize: 25, color: type_clr, marginLeft: 20 }} name={icon} /> 
                                </div>
                            
                            </div>
                            </div>
                        )
                    }) 
                }
            </Visibility>
            </div>
        )
    }

    componentDidUpdate() {
        const { reaction } = this.props;
        if (reaction) {
            if (!this.state.unlock_table.get(reaction.name)) {
                this.props.newReactFound(true);
            }
            this.state.unlock_table.set(reaction.name, true);
        }
    }

    render(){

        return (
            <div className="area">
                <h1>Collections</h1>
                <div className="sub-area">
                <Grid >
                    <Grid.Row>
                        <Grid.Column width={8}> { this.showCategory(clrchg_list, "Color Change", "clrchg", "clrchg_visable", "certificate") } <br/></Grid.Column>
                        <Grid.Column width={8}> { this.showCategory(bubble_list, "Gas Bubble", "bubble", "bubble_visable", "braille") } <br/></Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}> { this.showCategory(percipitate_list, "Percipitate", "percipitate", "percipitate_visable", "cubes") } <br/></Grid.Column>
                        <Grid.Column width={8}> { this.showCategory(heat_list, "Heat", "heat", "heat_visable", "fire") } <br/> </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>

                {/* <Button style={{ position: "absolute", bottom: "30px" }} content="test" 
                    onClick={() => this.setState({ open: !this.state.open })} /> */}

                <Button 
                    circular 
                    // icon="code" 
                    content="cheat mode"
                    style={{ position: "absolute", left: "44%", top: -100, background: "black", color: "#B8B8B8", opacity: "0.1" }}  
                    onClick={() => {
                        this.cheat_mode = !this.cheat_mode;
                        this.unlockAll(this.cheat_mode);
                    }}
                />
            </div>
        )
    }
}

Collection.propTypes = {
}

Collection.defaultProps = {
}

const mapStateToProps = state => ({
    reaction: state.beaker.reaction,
    stack: state.beaker.stack,
    unlock: state.beaker.unlock,
    main: state.nav.main,
})

export default connect(
  mapStateToProps,
  { resetBeaker, resetHighlight, clearReact, selectReact, showDetails, newReactFound, setUnlockAll }
)(Collection);
