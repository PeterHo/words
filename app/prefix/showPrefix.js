/**
 * Created by peter on 10/27/16.
 */
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import PrefixData from './prefixData';

export default class ShowPrefix extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            curLetter: 'a',
            curPrefix: 'a',
        };
    }

    _handleLetterClick(letter) {
        this.setState({curLetter: letter});
        this.setState({curPrefix: this.getFirstPrefixByLetter(letter)});
    }

    _handlePrefixClick(prefix) {
        this.setState({curPrefix: prefix});
    }

    getLetterList() {
        var style = {margin: 12};
        return PrefixData.getLetterList().map(letter =>
            <RaisedButton key={letter} label={letter} style={style} primary={this.state.curLetter === letter}
                          onClick={this._handleLetterClick.bind(this, letter)}/>
        );
    }

    getFirstPrefixByLetter(letter) {
        return PrefixData.getFirstPrefixByLetter(letter);
    }

    getPrefixList(letter) {
        var style = {margin: 12};
        var labelStyle = {"textTransform": "lowercase"};
        return PrefixData.getPrefixByLetter(letter).map(prefix =>
            <FlatButton key={prefix} label={prefix} style={style} primary={this.state.curPrefix === prefix}
                        labelStyle={labelStyle}
                        onClick={this._handlePrefixClick.bind(this, prefix)}/>
        );
    }

    getPrefixDetail(letter, prefix) {
        const style = {
            margin: 20,
            padding: 20,
        };
        return PrefixData.getPrefixDetail(letter, prefix).map(detail =>
            <Paper key={prefix} style={style} zDepth={2}>
                <div>{detail.chinese_meaning}</div>
            </Paper>
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.getLetterList()}
                </div>
                <Divider />
                <div>
                    {this.getPrefixList(this.state.curLetter)}
                </div>
                <div>
                    {this.getPrefixDetail(this.state.curLetter, this.state.curPrefix)}
                </div>
            </div>
        );
    }
}