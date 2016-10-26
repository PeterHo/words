/*
 * Copyright (C) 2016. All Rights Reserved.
 *
 * @author  Arno Zhang
 * @email   zyfgood12@163.com
 * @date    2016/06/22
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

const events = window.require('events');
const path = window.require('path');
const fs = window.require('fs');

const electron = window.require('electron');
const {ipcRenderer, shell} = electron;
const {dialog} = electron.remote;

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class MainWindow extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();

        this.state = {
            curPrefixLetter: 'a',
            curPrefix: 'a',
        };
    }

    getPrefix() {
        var prefix = require('../public/data/prefix.json');
        var prefixes = [];
        var style = {margin: 12};
        for (var pre in prefix) {
            prefixes.push(
                <RaisedButton key={pre} label={pre} style={style} primary={this.state.curPrefixLetter == pre}
                              onClick={this._handlePrefixClick.bind(this, pre)}/>
            );
        }
        return prefixes;
    }

    getFirstPrefixByLetter(letter) {
        var prefix = require('../public/data/prefix.json');
        for (var pre in prefix[letter]) {
            return pre;
        }
    }

    getPrefixList(letter) {
        var prefix = require('../public/data/prefix.json');
        var prefixes = [];
        var style = {margin: 12};
        var labelStyle = {"textTransform": "lowercase"};
        for (var pre in prefix[letter]) {
            prefixes.push(
                <FlatButton key={pre} label={pre} style={style} primary={this.state.curPrefix === pre}
                            labelStyle={labelStyle}
                            onClick={this._handlePrefixListClick.bind(this, pre)}/>
            );
        }
        return prefixes;
    }

    getPrefixDetail(prefix) {
        const style = {
            margin: 20,
            padding: 20,
        };
        var prefixes = require('../public/data/prefix.json');
        var details = [];
        var prefixNode = prefixes[this.state.curPrefixLetter][prefix];
        for (var pre in prefixNode) {
            var detail = prefixNode[pre];
            details.push(
                <Paper key={pre} style={style} zDepth={2}>
                    <div>{detail.chinese_meaning}</div>
                </Paper>
            )
        }

        return details;
    }

    render() {
        var muiTheme = getMuiTheme({
            fontFamily: "WenQuanYi Micro Hei"
        });

        var paperStyle = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Tabs>
                    <Tab label="前缀">
                        <div>
                            {this.getPrefix()}
                        </div>
                        <Divider />
                        <div>
                            {this.getPrefixList(this.state.curPrefixLetter)}
                        </div>
                        <div>
                            {this.getPrefixDetail(this.state.curPrefix)}
                        </div>
                    </Tab>
                    <Tab label="词根">
                        <div>
                            <h2 style={styles.headline}>Tab Two</h2>
                            <p>
                                This is another example tab.
                            </p>
                        </div>
                    </Tab>
                    <Tab label="后缀">
                        <div>
                            <h2 style={styles.headline}>Tab Three</h2>
                            <p>
                                This is a third example tab.
                            </p>
                        </div>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }

    _handlePrefixClick(letter) {
        this.setState({curPrefixLetter: letter});
        this.setState({curPrefix: this.getFirstPrefixByLetter(letter)});
    }

    _handlePrefixListClick(prefix) {
        this.setState({curPrefix: prefix});
    }
}

const styles = {
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 40
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    },
    buttons_container: {
        paddingTop: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};


let mainWndComponent = ReactDOM.render(
    <MainWindow />,
    document.getElementById('content'));