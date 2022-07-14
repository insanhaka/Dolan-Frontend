import { createStore } from "redux";
import AllReducer from "./reducer";

const store = createStore(AllReducer);

export default store;