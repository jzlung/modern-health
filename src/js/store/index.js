import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { loadState, saveState } from "../localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// Ideally this should be throttled since JSON.stringify is expensive
store.subscribe(() => {
  saveState({
    userActivity: store.getState().userActivity,
  });
});

export default store;