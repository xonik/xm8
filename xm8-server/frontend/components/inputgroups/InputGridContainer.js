import React from 'react';
import { connect } from 'react-redux'; 
import { selectElement, deselectDragElement, moveElement, inputgroupsUndoPointPositionChanged } from '../../../shared/state/actions/inputgroups.js'

import InputGrid from './InputGrid';

const mapStateToProps = (state, ownProps) => {

  // TODO: Maybe selected group should be part of the undo buffer? This means mixing frontend and backend undo buffers though.
  let selectedGroupId = state.inputgroups.get('selectedGroup');
  let selectedGroup = state.inputgroups.getIn(['groups', selectedGroupId]);
  if(selectedGroup) selectedGroup = selectedGroup.toJS();

  return {
    selectedGroup,
    inputs: state.physicalInputs.get('byId').toJS(),
    dragElementId: state.inputgroups.get('dragElementId'),    
    dragStart: state.inputgroups.get('dragStart').toJS()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {  
    selectElement: (id, mouseX, mouseY, offsetXem, offsetYem) => dispatch(selectElement(id, mouseX, mouseY, offsetXem, offsetYem)),
    moveElement: (groupId, id, x, y) => dispatch(moveElement(groupId, id, x, y)),
    deselectDragElement: () => {
      dispatch(deselectDragElement())
      dispatch(inputgroupsUndoPointPositionChanged());
    }
  }
}


const InputGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGrid);

export default InputGridContainer;