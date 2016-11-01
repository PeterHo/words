import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Tabs, Tab} from 'material-ui/Tabs';

import * as WordsActions from '../actions'
import PrefixList from '../components/prefixList';

const App = ({letter, prefix, actions}) => (
    <div>
        <Tabs>
            <Tab label="前缀">
                <PrefixList letter={letter} prefix={prefix} actions={actions}/>
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
    </div>
);

App.propTypes = {
    letter: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    letter: state.prefix.letter,
    prefix: state.prefix.prefix
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(WordsActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


