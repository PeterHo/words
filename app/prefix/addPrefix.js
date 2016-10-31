/**
 * Created by peter on 10/27/16.
 */
import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import PrefixData from './prefixData';

import * as db from '../db/nedb';

export default class AddPrefix extends React.Component {

    static get prefixJsonFile() {
        return "./public/data/prefix2.json";
    }

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            prefix: null,
            englishMeaning: null,
            chineseMeaning: null,
            example: null,
        };
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose(submit) {
        console.log(submit);
        this.setState({open: false});
        if (submit) {
            console.log(this.state.prefix);
            console.log(this.state.englishMeaning);
            console.log(this.state.chineseMeaning);
            console.log(this.state.example);

            var prefix = PrefixData.loadData();
            var letter = this.state.prefix[0];
            prefix[letter] = this.state.prefix;
            // prefix.set(letter, this.state.englishMeaning);
            // prefix.set(letter, this.state.englishMeaning);
            // prefix.set(letter, this.state.englishMeaning);
            // prefix[letter].chineseMeaning = this.state.chineseMeaning;
            // prefix[letter].example = this.state.example;
            fs.writeFile(AddPrefix.prefixJsonFile, prefix, 'utf8');
        }
    }

    render() {
        const floatingStyle = {
            margin: 20,
            position: "fixed",
            bottom: 20,
            right: 20,
        };

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this, false)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this, true)}
            />,
        ];

        return (
            <div>
                <FloatingActionButton style={floatingStyle}
                                      onClick={this.handleOpen.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Add Prefix"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this, false)}
                >
                    <TextField hintText='Prefix'
                               onChange={(event) => {
                                   this.setState({prefix: event.target.value})
                               }}/>
                    <TextField hintText='English meaning'
                               onChange={(event) => {
                                   this.setState({englishMeaning: event.target.value})
                               }}/>
                    <TextField hintText='Chinese meaning'
                               onChange={(event) => {
                                   this.setState({chineseMeaning: event.target.value})
                               }}/>
                    <TextField hintText='Example'
                               onChange={(event) => {
                                   this.setState({example: event.target.value})
                               }}/>
                </Dialog>
            </div>
        );
    }

    static testWrite() {
        var o = {};
        var prefix = "ce";
        var letter = prefix[0];
        o[letter] = prefix;
        // db.init();
        console.log(db);
    }
}

