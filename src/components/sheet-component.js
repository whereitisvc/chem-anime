import React, {Component} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"


import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { Button, Header, Grid, Icon, Dimmer } from 'semantic-ui-react'

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Description from './description.component'
import { selectReact, selectItem, setScroll, resetBeaker, resetHighlight, clearReact } from '../actions/action'
import { MENU, CONTROLLER, EPISODE } from '../namespace/mynamespace'
import { clrchg_list, bubble_list, percipitate_list, heat_list } from '../data/reactions'
import * as Items from '../data/items';


class Sheet extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    iconClick() {
        this.setState({ open: !this.state.open });
    }

    reactOnClick(react) {
        this.setState({ open: false });

        if (this.props.reaction) {
            // setTimeout(this.props.selectReact(react), 10000);
            this.props.resetBeaker(true);
            this.props.resetHighlight(true);
            this.props.clearReact();
            setTimeout(() => this.props.selectReact(react), 2500);
        }
        else {
            this.props.selectReact(react);
        }
    }

    showCategory(list, title) {
        // console.log('yo', list)
        return (
            <div>
            <Header size='big' color='teal'>{ title }</Header>
                { list.map(react => (
                    <div style={{ marginBottom: 5 }}>
                    <Button 
                        style={{ background: "none", color: "#DCDCDC", fontSize: 16, paddingLeft: 0 }}
                        key={react.name}
                        onClick={() => this.reactOnClick(react)}
                    >
                        {react.equation}
                    </Button>
                    </div>
                )) }
            </div>
        )
    }

    render() {
        const top = 90;
        const left = 90;
        return (
            <div>

            <div
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: top,
                    left: left,
                    color: '#D0D3D4',
                }}
            >
                <Button 
                    circular 
                    icon='list' 
                    size='large' 
                    onClick={() => this.iconClick()} 
                    style={{
                        background: '#252525',
                        color: 'white'
                    }}
                />
            </div>

            <Dimmer 
                page
                active={this.state.open} 
                onClickOutside={() => this.iconClick()} 
            >
            <div
                style={{
                    position: 'absolute',
                    top: 100,
                    left: 100,
                    textAlign: 'left',
                    // width: "800px"
                }}
            >
            <Grid style={{ width: 800 }}>
                <Grid.Row>
                    <Grid.Column width={8}> { this.showCategory(clrchg_list, "Color Change") } <br/></Grid.Column>
                    <Grid.Column width={8}> { this.showCategory(bubble_list, "Gas Bubble") } <br/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}> { this.showCategory(percipitate_list, "Percipitate") } <br/></Grid.Column>
                    <Grid.Column width={8}> { this.showCategory(heat_list, "Heat") } <br/> </Grid.Column>
                </Grid.Row>
            </Grid>

            </div>
            </Dimmer>
 

            </div>
        );
    }
}

Sheet.propTypes = {
}

Sheet.defaultProps = {
}

const mapStateToProps = state => ({
    stack: state.beaker.stack,
    do_scroll: state.beaker.do_scroll,
    scroll_to: state.beaker.scroll_to,
    reaction: state.beaker.reaction,
    controller: state.beaker.controller
})

export default connect(
  mapStateToProps,
  { selectReact, selectItem, setScroll, resetBeaker, resetHighlight, clearReact }
)(Sheet);
