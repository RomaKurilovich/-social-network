import { API } from "../api/axios-instance";

const SET_PROFILE_INFO = 'PPR/SET_PROFILE_INFO';
const UPDATE_POST_TEXT = 'PPR/UPDATE_POST_TEXT';
const ADD_POST = 'PPR/ADD_POST';
const CHANGE_CONTACTS = 'PPR/CONTACT_CHANGE';
const  ABOUT_ME_CHANGE = 'PPR/ABOUT_ME_CHANGE';
const SET_STATUS = 'PPR/SET_STATUS';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS',
}

const initialState = {
    status: statuses.NOT_INITIALIZED,
    myPosts: {
        postText: '',
        posts: [
            { id: 1, message: 'every day like birth day', likesCount: 777 },
            { id: 2, message: 'hello', likesCount: 23 },
            { id: 3, message: 'good day', likesCount: 11 },
            { id: 4, message: 'good day', likesCount: 99 },
        ],
    },

    profileInfo: {
        fullName: 'Anonymous',
        newValue: null,
        newValueAboutMe: null,
        newValueLookingForAJobDescription: null,
        photos: {
            small: 'https://via.placeholder.com/100',
            large: 'https://via.placeholder.com/500',
        },
        contacts: {
            vk: 'Anonymous can not have contacts',
        }
    },

}

const profilePageReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_PROFILE_INFO : {
            return { ...state, profileInfo: action.profileInfo }
        }
        case UPDATE_POST_TEXT: {
            return { ...state, myPosts: { ... state.myPosts, postText: action.value }}
        }
        case ADD_POST: {
            let newComment = {
                id: 5,
                message: state.myPosts.postText ,
                likesCount: 0,
            };
            return { ...state, myPosts: { ... state.myPosts, posts: [newComment, ...state.myPosts.posts] }}
        }
        case CHANGE_CONTACTS: {
            return {
                ...state, profileInfo: {...state.profileInfo, contacts: {...state.profileInfo.contacts, [action.contactKey]: action.newValue}}
            }
        }
        case ABOUT_ME_CHANGE:
        {
            return {
                ...state, profileInfo: {...state.profileInfo, aboutMe: action.newValue  }
            }
        }

        default:
            return state;
    }
}


export const getProfileInfo = (userIdFromUrl: number) => (dispatch: Function) => {
    dispatch(setStatus(statuses.INPROGRESS))
    API.getProfile(userIdFromUrl)
        .then((profile) => {
            dispatch(setProfileInfo(profile.data));
            dispatch(setStatus(statuses.SUCCESS))
        })
}

export const fetchSetNewPhotoOfAvatar = (file: any) => {
    return async (dispatch: Function) =>{
        const res = await API.setNewPhotoOfAvatar(file)
    }
}

export const putNewInfoThunk = () => (dispatch: Function, getState: Function) =>{
    let state = getState();
    API.putNewInfo(state.profilePage.profileInfo)
}


export const setProfileInfo = (profileInfo: object) => ({type: SET_PROFILE_INFO, profileInfo: profileInfo,})
export const updatePostText = (value: string) => ({type: UPDATE_POST_TEXT, value: value,})
export const addPost = () => ({type: ADD_POST})
export const aboutMeChange = (newValue: string) => ({type: ABOUT_ME_CHANGE, newValue: newValue,})
export const setStatus = (status: string) => ({ type: SET_STATUS, status: status });

export const onContactChange = (newValue: string, key: string) => ({
        type: CHANGE_CONTACTS,
        newValue: newValue,
        contactKey: key,
})




export default profilePageReducer;