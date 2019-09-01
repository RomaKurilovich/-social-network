import { API } from "../api/axios-instance";

const SET_STATUS = 'LR/SET_STATUS';
const SET_IS_AUTH = 'LR/SET_IS_AUTH';
const SET_USER_INFO = 'LRSET_USER_INFO';


const initialState = {
    status: 'INIT',
    isAuth: false,
    userInfo : {
        userId: null,
        userName: '',
    }
}

export const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS',
}

export const setStatus = (status: string) => ({ type: SET_STATUS, status: status })
export const setIsAuth = (status: boolean) => ({ type: SET_IS_AUTH,status: status})
export const setUserInfo = (id: any, login: string) => ({

        type: SET_USER_INFO,
        id: id,
        login: login,

})

const loginReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_IS_AUTH: {
            return { ...state, isAuth: action.status }
        }
        case SET_USER_INFO: {
            return {  ...state,  userInfo: { ...state.userInfo,  userId: action.id,  userName: action.login } }
        }

        default:
            return state;
    }
}

export const loginTC = (login: string, password: string, rememberMe: boolean) => (dispatch: Function) => {

    dispatch(setStatus(statuses.INPROGRESS));
    API.login(login, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setUserInfo(res.data.data.userId, res.data.data.login));
                dispatch(setIsAuth(true))
            } else {
                dispatch(setStatus(statuses.ERROR));
                alert(res.data.messages[0]);
            }
        })

}

export const logOut = () => (dispatch: Function,getState: any) => {
    let state = getState();
    API.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserInfo(null, ''))
                dispatch(setIsAuth(false))
            }
        })
}

export const me = () => (dispatch: Function) => {
    API.getAuth()
        .then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(true));
                dispatch(setUserInfo(res.data.data.id, res.data.data.login))
            }
        })
}



export default loginReducer;