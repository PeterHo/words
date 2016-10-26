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

import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class MainWindow extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();

        this.state = {
            curPrefixLetter: 'a',
            password: null
        };
    }

    getPrefix() {
        var prefix = require('../public/data/prefix.json');
        var prefixes = [];
        var style = {margin: 12};
        for (var pre in prefix) {
            prefixes.push(
                <RaisedButton key={pre} label={pre} style={style} primary={true}
                              onClick={this._handlePrefixClick.bind(this, pre)}/>
            );
        }
        return prefixes;
    }

    getPrefixList(letter) {
        var prefix = require('../public/data/prefix.json');
        var prefixes = [];
        var style = {margin: 12};
        var labelStyle = {"textTransform": "lowercase"};
        for (var pre in prefix[letter]) {
            prefixes.push(
                <FlatButton key={prefix[letter][pre]}
                            label={prefix[letter][pre]}
                            style={style}
                            primary={true}
                            labelStyle={labelStyle}
                              onClick={this._handlePrefixListClick.bind(this, prefix[letter][pre])}/>
            );
        }
        return prefixes;
    }

    render() {
        return (
            <MuiThemeProvider>
                <Tabs>
                    <Tab label="前缀">
                        <div>
                            {this.getPrefix()}
                        </div>
                        <div>
                            {this.getPrefixList(this.state.curPrefixLetter)}
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
    }

    _handlePrefixListClick(prefix) {

    }

    _handleActive(tab) {
        alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    }

    _handleLogin() {
        let options = {
            type: 'info',
            buttons: ['确定'],
            title: '登录',
            message: this.state.userName,
            defaultId: 0,
            cancelId: 0
        };

        dialog.showMessageBox(options, (response) => {
            if (response == 0) {
                console.log('OK pressed!');
            }
        });
    }

    _handleRegistry() {
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