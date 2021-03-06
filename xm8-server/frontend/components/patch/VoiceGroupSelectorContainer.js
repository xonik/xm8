import { connect } from 'react-redux';
import VoiceGroupSelector from './VoiceGroupSelector';
import { changeVoiceGroup } from '../../../shared/state/actions/gui/guipatch';
import { getGuiPatchviews } from '../../state/selectors';

const mapStateToProps = (state, ownProps) => {
  let guipatchviewsRoot = getGuiPatchviews(state);
  return {
    selectedVoiceGroupId: guipatchviewsRoot.get('selectedPatchNumber'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeVoiceGroup: voiceGroupId => dispatch(changeVoiceGroup(voiceGroupId))
  }
}

const VoiceGroupSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoiceGroupSelector);

export default VoiceGroupSelectorContainer;