import { API } from "../api/axios-instance";

const SET_STATUS = 'PR/SET_STATUS';
const SET_USERS = 'PR/SET_USERS';
const SET_TOTAL_COUNT = 'PR/SET_TOTAL_COUNT';
const SUBSCRIBE = 'PR/SUBSCRIBE';
const UNSUBSCRIBE = 'PR/UNSUBSCRIBE';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS',
}

let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: [],
    totalCount: 0,

}

const peopleReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.totalCount }
        }
        case SUBSCRIBE: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    } else {
                        return u;
                    }
                })
            }
        }
        case UNSUBSCRIBE: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    } else {
                        return u;
                    }
                })
            }
        }

        default:
            return state;
    }
}

export const setUsers = (users: any) => ({ type: SET_USERS, users: users });
export const setStatus = (status: string) => ({ type: SET_STATUS, status: status });
export const setTotalCount = (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount: totalCount });
export const subscribe = (userId: number) => ({ type: SUBSCRIBE, userId: userId });
export const unsubscribe = (userId: number) => ({ type: UNSUBSCRIBE, userId: userId });


export const getPeopleThunk = (pageNumber: number) => (dispatch: Function) => {
    if (initialState.status === statuses.NOT_INITIALIZED) {
        dispatch(setStatus(statuses.INPROGRESS));
        API.getPeople(pageNumber)
            .then((res: any) => {
                dispatch(setStatus(statuses.SUCCESS))
                dispatch(setUsers(res.data.items))
                dispatch(setTotalCount(res.data.totalCount))
            })
    }
}
export const subscribeThunk = (userId: number) => (dispatch: Function) => {
    API.subscribe(userId)
    .then((res: any )=>{
       dispatch(subscribe(userId));
    })
}

export const unsubscribeThunk = (userId: number) => (dispatch: Function) => {
    API.unSubscribe(userId)
    .then ((res)=>{
        dispatch(unsubscribe(userId));
    })
}


export default peopleReducer;