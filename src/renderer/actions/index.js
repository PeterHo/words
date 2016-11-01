import * as types from '../constants/ActionTypes'

export const selectPrefixLetter = letter => ({
    type: types.SELECT_PREFIX_LETTER,
    letter
});

export const selectPrefix = prefix => ({
    type: types.SELECT_PREFIX,
    prefix
});
