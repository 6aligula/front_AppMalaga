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