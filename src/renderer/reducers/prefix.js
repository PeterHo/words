import {SELECT_PREFIX_LETTER, SELECT_PREFIX} from '../constants/ActionTypes'

const initialState = {
    letter: 'a',
    prefix: 'an',
};

export default function prefix(state = initialState, action) {
    console.log(`reducers: state: ${JSON.stringify(state)} action: ${JSON.stringify(action)}`);
    switch (action.type) {
        case SELECT_PREFIX_LETTER:
            return {
                ...state,
                letter: action.letter
            };
        case SELECT_PREFIX:
            return {
                ...state,
                prefix: action.prefix
            };
        default:
            return state;
    }
};
