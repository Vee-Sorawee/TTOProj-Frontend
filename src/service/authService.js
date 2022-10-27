import apiClient from "./apiClient";
import state from "@/state";
export default {
    register(user,imgUrls) {
        console.log(user)
        return apiClient.post('/register', {
            "username": user.username,
            "password": user.password,
            "gender": user.sex,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.emailAddress,
            "homeTown": user.hometown,
            "birthDate": user.birthday,
            "imageUrls" : imgUrls
        }).then((response) => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    uploadFile(file) {
        let formData = new FormData()
        formData.append('file', file)
        return apiClient.post('/uploadFile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    login(user){
        return apiClient.post('/auth',{
            username: user.username,
            password: user.password
        }).then((response) => {
            localStorage.setItem('token',response.data.token)
            state.dispatch('setStatus',true)
            this.getUser().then((response) => {
                state.dispatch('setCurrentUser',response.data)
                state.dispatch('setRole',response.data.authorities[0])
            })
            return Promise.resolve(response.data)           
        }).catch((error) => {
            return Promise.reject(error)
        })          
    },
    getUser(){
        return apiClient.get('/credential')
    },
    logout(){
        localStorage.removeItem('token');
        state.dispatch('setCurrentUser',null)
        state.dispatch('setRole',"")
        state.dispatch('setStatus',false)
    },
}