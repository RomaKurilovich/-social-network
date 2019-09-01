import { API } from "../api/axios-instance";

const SET_MESSAGES = 'MPP/SET_MESSAGES';
const SET_DIALOGS = 'MPP/SET_DIALOGS';
const ADD_MESSAGE ='MPP/ADD_MESSAGE';
const SET_CURRENT_DISALOGS_ID ='MPP/SET_CURRENT_DISALOGS_ID';

let initialState ={
    dialogs: [],
    messages: [    ],
    currentDialogId: null,
    message: '',
}

export let setMessagesAC = (messages: string) => ({type: SET_MESSAGES , messages})
export let setDialodgsAC = (dialogs: any) => ({type: SET_DIALOGS , dialogs})
export let setCurrentDialogIdAC = (id: number) => ({type: SET_CURRENT_DISALOGS_ID , id})
export let addMessageAC = (value: string) => ({type: ADD_MESSAGE , value})
export const onAddMessage = (text: string) => ({type: 'ADD-MESSAGE', text: text })



const messagePageReducer = (state = initialState, action: any) => {

    switch (action.type){ 
        case ADD_MESSAGE:{
          return {...state, message : action.value}
          
        }

        case SET_DIALOGS:{
            return { ...state , dialogs: action.dialogs}
        }

        case SET_MESSAGES:{
            return { ...state , messages: action.messages}
        }

        case SET_CURRENT_DISALOGS_ID:{
            return { ...state , currentDialogId: action.id}
        }
        
        default:
            return state;
    }

}


export const sendMessageThunk = (userId: number) => (dispatch: Function, getState: any) => {

    let state = getState();
    let message = state.messagePage.message

    
    API.sendMessage(userId, message)
            .then(() => API.getMessage(userId))
            .then((response: any) => {
                dispatch(addMessageAC(''))
                dispatch(setMessagesAC(response.data.items))
                
                debugger
            })    
}

export const getDialogsAndMessageThunk = (userId: any) => (dispatch: Function, getState: any) => {

    let state = getState();

    if (userId) {
        API.updateDialogs(userId)
            .then(() => API.getDialogs())
            .then((response: any) => {
                dispatch(setDialodgsAC(response.data));
                dispatch(setCurrentDialogIdAC(userId));
            })
            .then(() => API.getMessage(userId))
            .then((response: any) => {
                dispatch(setMessagesAC(response.data.items));
                debugger
            })

    } else {
        API.getDialogs()
            .then((response: any) => {
                dispatch(setDialodgsAC(response.data))
            })
    }   
}





export default messagePageReducer;