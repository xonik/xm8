import { combineReducers } from 'redux';
import patches from './patches';
import links from './links';
import patchviews from './patchviews';
import network from './network';
import filesystem from './filesystem';
import physicalInputs from './physicalinputs';
import controllers from './controllers';

import filedialog from './gui/filedialog';
import guipatchviews from './gui/guipatchviews';
import guiphysicalinputs from './gui/guiphysicalinputs';
import guivirtualinputs from './gui/guivirtualinputs';
import guiinputgroups from './gui/guiinputgroups';
import guicontrollers from './gui/guicontrollers';
import guimatrix from './gui/guimatrix';

const guiReducers = combineReducers({
  controllers,
  guicontrollers,
  patches,
  links,
  patchviews,
  filedialog,
  filesystem,
  network,
  physicalInputs,
  guivirtualinputs,
  guiphysicalinputs,
  guipatchviews,
  guiinputgroups,
  guimatrix
});

export default guiReducers;