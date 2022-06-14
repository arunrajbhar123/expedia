import { legacy_createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(composeEnhancers(applyMiddleware()));
