import {createStore, combineReducers, applyMiddleware} from 'redux';
import patchviews from './patchviews';
import network from './network';
import filesystem from './filesystem';
import { physicalInputs } from './inputs';
import patches from './patches';
import controllers from './controllers';
import reduxSubscribeMiddleware from '../../shared/state/redux-subscribe';

const serverReducers = combineReducers({
  controllers,
  patchviews,
  filesystem,
  network,
  physicalInputs,
  patches
});

const createStoreWithMiddleware = applyMiddleware(reduxSubscribeMiddleware)(createStore);
const store = createStoreWithMiddleware(serverReducers);
export default store;