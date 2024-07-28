import axios from 'axios';
import {

    COMUNIDAD_DETAILS_REQUEST,
    COMUNIDAD_DETAILS_SUCCESS,
    COMUNIDAD_DETAILS_FAIL,
    COMUNIDAD_DETAILS_RESET,

    COMUNIDAD_UPDATE_PROFILE_REQUEST,
    COMUNIDAD_UPDATE_PROFILE_SUCCESS,
    COMUNIDAD_UPDATE_PROFILE_FAIL,

} from "../constants/comunidadConstants";

export const getComunidadDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMUNIDAD_DETAILS_REQUEST

        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/community/all`,
            config
        )

        dispatch({
            type: COMUNIDAD_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COMUNIDAD_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateComunidad = (comunidad) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMUNIDAD_UPDATE_PROFILE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/community/update/`,
            comunidad,
            config
        )

        dispatch({
            type: COMUNIDAD_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        // Actualizar localStorage si es necesario
        // localStorage.setItem('comunidadInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: COMUNIDAD_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
