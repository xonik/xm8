import { combineReducers } from 'redux';
import graph from './graph';
import links from './links';
import patchview from './patchview';
import network from './network';
import filesystem from './filesystem';
import filedialog from './filedialog';
import {virtualInputs, physicalInputs} from './inputs';
import matrix from './matrix';
import inputgroups from './inputgroups';
import controllers from './controllers';

const guiReducers = combineReducers({
  controllers,
  graph,
  links,
  patchview,
  filedialog,
  filesystem,
  network,
  virtualInputs, 
  physicalInputs,
  matrix,
  inputgroups  
});

export default guiReducers;