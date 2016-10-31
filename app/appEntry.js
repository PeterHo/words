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

const electron = window.require('electron');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

import AddPrefix from './prefix/addPrefix';
import ShowPrefix from './prefix/showPrefix';


class MainWindow extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();

        this.state = {
        };

        AddPrefix.testWrite();
    }

    render() {
        const muiTheme = getMuiTheme({
            fontFamily: "WenQuanYi Micro Hei"
        });

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Tabs>
                    <Tab label="前缀">
                        <ShowPrefix/>
                        <AddPrefix/>
                    </Tab>
                    <Tab label="词根">
                        <div>
                            <h2>Tab Two</h2>
                            <p>
                                This is another example tab.
                            </p>
                        </div>
                    </Tab>
                    <Tab label="后缀">
                        <div>
                            <h2>Tab Three</h2>
                            <p>
                                This is a third example tab.
                            </p>
                        </div>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(
    <MainWindow />,
    document.getElementById('root'));