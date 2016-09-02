import { Map } from 'immutable';

import config from '../../shared/config';
import { getUndoWrapper } from './undo';
import { groups as undoGroups } from '../../shared/state/actions/undo';

import { getInitialState as getInitialGraphState, undoableActions as undoableGraphActions } from './graph';
import { getInitialState as getInitialMatrixState, undoableActions as undoableMatrixActions } from './matrix';
import { getInitialVirtualState as getInitialVirtualInputState, undoableActions as undoableInputActions } from './inputs';
import { getInitialState as getInitialInputGroupsState, undoableActions as undoableInputGroupsActions } from './inputgroups';

import graph from './graph';
import matrix from './matrix';
import inputgroups from './inputgroups';
import { virtualInputs } from './inputs';

// join all undoable actions from the sub reducers
const undoableActions = undoableGraphActions
  .concat(undoableMatrixActions)
  .concat(undoableInputActions)
  .concat(undoableInputGroupsActions);


/*
 main patches reducer, includes all sub reducers for patches for all voice groups
  */
const patch = (state, action) => {

  return state
    .updateIn(['graph'], substate => graph(substate, action))
    .updateIn(['matrix'], substate => matrix(substate, action))
    .updateIn(['virtualInputs'], substate => virtualInputs(substate, action))
    .updateIn(['inputgroups'], substate => inputgroups(substate, action))
}

const initialPatchState = new Map({
  graph: getInitialGraphState(),
  matrix: getInitialMatrixState(),
  virtualInputs: getInitialVirtualInputState(),
  inputgroups: getInitialInputGroupsState()
});
const getInitialPatchState = () => initialPatchState;

const getInitialState = () => {
  let patches = new Map();
  for(let i=0; i<config.voices.numberOfGroups; i++){

    // the same initial state is reused, but this is no problem as it
    // is immutable, changes to state won't bleed across patches.
    patches = patches.set('' + i, initialPatchState);
  }
  return patches;
}

// create an undo wrapper per patch
let patchUndoReducers = new Array();
for(let i=0; i<config.voices.numberOfGroups; i++){
  patchUndoReducers.push(getUndoWrapper(undoGroups.PATCH + i, undoableActions, patch, getInitialPatchState));
}

const patches = (state = getInitialState(), action) => {
  // TODO: Change later.
  action.patchNumber = '0';
  if(action.patchNumber) {
    return state.updateIn([action.patchNumber], patchState => patchUndoReducers[action.patchNumber](patchState, action))
  } else {
    return state;
  }
}

export default patches;