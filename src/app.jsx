import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import ReactRedux from 'react-redux';

import constants from './utils/constants';
import GoBoard from './components.jsx';
import reducers from './reducers';
import range from './utils/range';


// Globals
const SIZE = 19;

// Tracks only the current board state
const store = Redux.createStore(
    reducers,
    Immutable.Map({
        turn: constants.BLACK,
        board: Immutable.List([...range(0, SIZE)].map(() => (
            Immutable.List([...range(0, SIZE)].map(() => constants.EMPTY))
        ))),
    })
);

// Renders the game board
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <GoBoard />
    </ReactRedux.Provider>,
    document.getElementById('app')
);
