import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { reducer } from "@/modules/auth/reducer";

const rootReducer = combineReducers({
   auth: reducer,
});

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;   