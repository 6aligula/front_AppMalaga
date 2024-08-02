import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
//import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userForgotPasswordReducer,
    userResetPasswordReducer,
} from '../reducers/userReducers';

import {contactReducer} from '../reducers/contactReducers';

import { 
    usosParcelaListReducer,
    caracteristicasParcelaListReducer,
    contadoresParcelaListReducer,
    consumosParcelaListReducer,
    datosAdicionalesParcelaListReducer,
    pagosParcelaListReducer,

 } from '../reducers/parcelaReducers';

 import {
    comunidadDetailsReducer,
    comunidadUpdateProfileReducer

 }from '../reducers/communityReducers';

 import {
    plotListReducer,
 } from '../reducers/plotReducer';
import { cultivoDetailsReducer, cultivoListReducer, faseCultivoDetailsReducer } from '../reducers/cultivoReducers';
import { documentoListReducer, documentoCreateReducer, documentoDetailsReducer } from '../reducers/documentReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,
    contact: contactReducer,
    usosParcelaList: usosParcelaListReducer,
    caracteristicasParcelaList: caracteristicasParcelaListReducer,
    contadoresParcelaList: contadoresParcelaListReducer,
    consumosParcelaList: consumosParcelaListReducer,
    datosAdicionalesParcelaList: datosAdicionalesParcelaListReducer,
    pagosParcelaList: pagosParcelaListReducer,
    comunidadDetails: comunidadDetailsReducer,
    comunidadUpdateProfile: comunidadUpdateProfileReducer,
    plotList: plotListReducer,
    cultivoList: cultivoListReducer,
    cultivoDetails: cultivoDetailsReducer,
    faseCultivoDetails: faseCultivoDetailsReducer,
    documentoList: documentoListReducer,
    documentoCreate: documentoCreateReducer,
    documentoDetails: documentoDetailsReducer,

});

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },

}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;
// export default configureStore({
//     reducer: { reducer, initialState }
// })