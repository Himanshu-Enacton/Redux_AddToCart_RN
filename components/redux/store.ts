import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware:()=>[SagaMiddleware]
})
export default store;