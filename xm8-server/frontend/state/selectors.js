import { currentVoiceGroupId } from '../../shared/state/voicegroupselector';

export const getVirtualInputGroups = state => state.patches.getIn([currentVoiceGroupId(), 'inputgroups']);
export const getGuiVirtualInputGroups = state => state.guiinputgroups.get(currentVoiceGroupId());
export const getVirtualInputs = state => state.patches.getIn([currentVoiceGroupId(), 'virtualInputs']);
export const getGuiVirtualInputs = state => state.guivirtualinputs.get(currentVoiceGroupId());
export const getPhysicalInputs = state => state.physicalInputs;
export const getGuiPhysicalInputs = state => state.guiphysicalinputs;
export const getMatrix = state => state.patches.getIn([currentVoiceGroupId(), 'matrix']);
export const getGuiMatrix = state => state.guimatrix;
export const getGraph = state => state.patches.getIn([currentVoiceGroupId(), 'graph']);
export const getNodes = state => state.patches.getIn([currentVoiceGroupId(), 'graph', 'nodes']);
export const getPatchview = state => state.patchviews.get(currentVoiceGroupId());
export const getPatchviews = state => state.patchviews;
export const getGuiPatchview = state => state.guipatchviews.get(currentVoiceGroupId());
export const getGuiPatchviews = state => state.guipatchviews;
export const getFileDialog = state => state.filedialog;
export const getFilesystem = state => state.filesystem;
export const getControllers = state => state.controllers.get(currentVoiceGroupId());
export const getGuiControllers = state => state.guicontrollers.get(currentVoiceGroupId());
export const getNetwork = state => state.network;

export const getInputsAsJS = state => {
  let inputs = getVirtualInputs(state).get('byId').toJS();
  _.merge(inputs, getPhysicalInputs(state).get('byId').toJS());
  return inputs;
}