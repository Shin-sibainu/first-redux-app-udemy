//ReducerとActionは別物。StoreはReducerと状態だけを管理している。
//Actionは自分で名前を決めるだけ(INCREMENTとかLOGINとかだけ)。

import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoggedReducer,
});

export default allReducers;
