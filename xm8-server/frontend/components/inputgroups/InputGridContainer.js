import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { moveElement, inputgroupsUndoPointPositionChanged } from '../../../shared/state/actions/inputgroups.js'
import { selectElement, deselectElement, deselectDragElement } from '../../../shared/state/actions/gui/guiinputgroups.js'
import { getGuiVirtualInputGroups, getVirtualInputGroups, getVirtualInputs, getPhysicalInputs } from '../../state/selectors';

import InputGrid from './InputGrid';

const mapStateToProps = (state, ownProps) => {

  // TODO: Maybe selected group should be part of the undo buffer? This means mixing frontend and backend undo buffers though.
  let inputGroups = getVirtualInputGroups(state);
  let guiinputGroups = getGuiVirtualInputGroups(state);

  let selectedGroupId = guiinputGroups.get('selectedGroup');
  let selectedGroup = inputGroups.getIn(['groups', selectedGroupId]);
  if(selectedGroup) selectedGroup = selectedGroup.toJS();

  let inputs = getVirtualInputs(state).get('byId').toJS();
  _.merge(inputs, getPhysicalInputs(state).get('byId').toJS());

  return {
    selectedGroup,
    inputs,
    dragElementId: guiinputGroups.get('dragElementId'),
    selectedElementId: guiinputGroups.get('selectedElementId'),
    dragStart: guiinputGroups.get('dragStart').toJS()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectElement: (id, mouseX, mouseY, offsetXem, offsetYem) => dispatch(selectElement(id, mouseX, mouseY, offsetXem, offsetYem)),
    moveElement: (groupId, id, x, y) => dispatch(moveElement(groupId, id, x, y)),
    deselectDragElement: () => {
      dispatch(deselectDragElement());
      dispatch(inputgroupsUndoPointPositionChanged());
    },
    deselectElement: () => {
      dispatch(deselectElement());
    }
  }
}


const InputGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGrid);

export default InputGridContainer;