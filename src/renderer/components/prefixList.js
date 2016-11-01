/**
 * Created by peter on 10/27/16.
 */
import React, {Component, PropTypes} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import PrefixData from './prefixData';

export default class PrefixList extends Component {
    static propTypes = {
        letter: PropTypes.string.isRequired,
        prefix: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired,
    };

    getLetterList() {
        var style = {margin: 12};
        const {letter, actions} = this.props;
        return PrefixData.getLetterList().map(l =>
            <RaisedButton key={l} label={l} style={style} primary={letter === l}
                          onClick={()=>actions.selectPrefixLetter(l)}/>
        );
    }

    getFirstPrefixByLetter(letter) {
        return PrefixData.getFirstPrefixByLetter(letter);
    }

    getPrefixList(letter) {
        var style = {margin: 12};
        var labelStyle = {"textTransform": "lowercase"};
        const {prefix, actions} = this.props;
        return PrefixData.getPrefixByLetter(letter).map(p =>
            <FlatButton key={p} label={p} style={style} primary={prefix === p}
                        labelStyle={labelStyle}
                        onClick={()=>actions.selectPrefix(p)}/>
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
                    {this.getPrefixList(this.props.letter)}
                </div>
                <div>
                    {this.getPrefixDetail(this.props.letter, this.props.letter)}
                </div>
            </div>
        );
    }
};

