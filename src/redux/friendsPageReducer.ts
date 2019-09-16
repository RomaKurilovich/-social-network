import { API } from "../api/axios-instance";

const SET_STATUS = 'FR/SET_STATUS';
const SET_USERS = 'FR/SET_USERS';
const UNSUBSCRIBE = 'FR/UNSUBSCRIBE';
const SET_DELETE_USERS = 'FR/SET_DELETE_USERS';
const SET_FRIENDS = 'FR/SET_FRIENDS';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS',
}

let initialState = {
    status: statuses.NOT_INITIALIZED,
    allUsers: [],
    myFriends: [],
    totalCount: null,
}

const friendsReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USERS: {
            return { ...state, allUsers: state.allUsers.concat(action.users) }
        }
        case SET_FRIENDS: {
            
            return { ...state, myFriends: state.allUsers.filter((u: any) => u.followed) }
        }
        case SET_DELETE_USERS: {
            return { ...state, allUsers: [] }
        }
        case UNSUBSCRIBE: {
            return {
                ...state,
                allUsers: state.allUsers.map((u: any) => {
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

export const setUsers = (users: Array<object>) => ({ type: SET_USERS, users: users });
export const setFriends = () => ({ type: SET_FRIENDS });
export const setDeleteUsers = () => ({ type: SET_DELETE_USERS });
export const setStatus = (status: string) => ({ type: SET_STATUS, status: status });
export const unsubscribe = (userId: number) => ({ type: UNSUBSCRIBE, userId: userId });

export const unsubscribeFriend = (userId: number) => (dispatch: Function) => {
    API.unSubscribe(userId)
        .then((res) => {
            dispatch(unsubscribe(userId))
            dispatch(setFriends())
        })
}

function foo() {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!");
        }, 10)   
    }))
}

// because part "friends" on the backend are not implemented, I do so
export const getFriendsThunk = () => async (dispatch: Function, getState: any) => {
    let state = getState();
    if (state.friends.status !== statuses.INPROGRESS){
        dispatch(setStatus(statuses.INPROGRESS))
    let totalCount = 0;
    const res: any = await API.getPeople(1);
    totalCount = res.data.totalCount

    dispatch(setDeleteUsers())

    let countRequest = Math.ceil(totalCount / 100)
    for (let i = 1; i <= countRequest; i++) {
        await foo()
        let res = await API.getBundleOfUsers(i)
        dispatch(setUsers(res.data.items))
    }

    dispatch(setFriends())
    dispatch(setStatus(statuses.SUCCESS))
}
     }
    

export default friendsReducer; 