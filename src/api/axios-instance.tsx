import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        'API-KEY': 'edcb0db2-390b-43d1-96c2-48a4199e92c2'
    }
});

export const API = {
	getProfile (userId: number) {
		return (
			axiosInstance.get(`profile/` + userId)
		)
    },
    login (login: string, password: string, rememberMe: boolean) {
        return (
            axiosInstance.post('auth/login', {
                email: login,
                password: password,
                rememberMe: rememberMe,
             })
        )
    },
    logOut () {
        return(
            axiosInstance.post('auth/logout')
        )
    },
    getPeople(pageNumber: number) {
        return(
        axiosInstance.get(`users?count=24&page=${pageNumber}`)
        )
    },
    subscribe(userId: number){
        return(
            axiosInstance.post('follow/' + userId)
        )
    },
    unSubscribe(userId: number){
        return(
            axiosInstance.delete('follow/' + userId)
        )
    },
    getBundleOfUsers(number: number){
        return(
            axiosInstance.get(`users?count=100&page=${number}`)
        )
    },
    sendMessage(userId: number, message: string){
        return(
            axiosInstance.post(`dialogs/${userId}/messages`, { body: message})
        )
    },
    getMessage(userId: number){
        return(
            axiosInstance.get(`dialogs/${userId}/messages`)
        )
    },
    updateDialogs(userId: number){
        return(
            axiosInstance.put(`dialogs/${userId}`)
        )
    },
    getDialogs(){
        return(
            axiosInstance.get('dialogs')
        )
    },
    setNewPhotoOfAvatar(file: any){
        let formData = new FormData();
        formData.append("image", file);
        return axiosInstance.post('profile/photo',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    putNewInfo(newInfo: object){
        return(
            axiosInstance.put('profile',newInfo)
        )
    },
    getAuth(){
        return(
            axiosInstance.get('auth/me')
        )
    }


}

