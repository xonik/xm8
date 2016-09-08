import { combineReducers } from 'redux';
import patches from './patches';
import links from './links';
import patchviews from './patchviews';
import guipatchviews from './gui/guipatchviews';
import guiinputgroups from './gui/guiinputgroups';
import network from './network';
import filesystem from './filesystem';
import filedialog from './gui/filedialog';
import { physicalInputs } from './inputs';
import controllers from './controllers';

const guiReducers = combineReducers({
  controllers,
  patches,
  links,
  patchviews,
  guipatchviews,
  filedialog,
  filesystem,
  network,
  physicalInputs,
  guiinputgroups
});

export default guiReducers;