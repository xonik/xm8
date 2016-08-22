import { connect } from 'react-redux';
import Dropdown from '../framework/Dropdown';


const mapStateToProps = (state, ownProps) => {

  let states = state[ownProps.type];
  if(!states) console.log(ownProps, state);
  let byId = states.get("byId");
  let js = byId.toJS()
  let inputs = state[ownProps.type].get('byId').toJS();


  return {
    values: inputs,
    value: ownProps.value,
    nameFunc: name => name.full
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: value => ownProps.onChange(value)
  }
}

const InputDropdown = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);

export default InputDropdown;
