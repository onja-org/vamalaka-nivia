import { combineReducers } from "@reduxjs/toolkit";
import adsReducer from "./slices/adsSlice";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { configureStore } from "@reduxjs/toolkit";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history) as any,
  ads: adsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;