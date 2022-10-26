import apiClient from "./apiClient";
export default {
    register(user) {
        console.log(user)
        return apiClient.post('/register', {
            "username": user.username,
            "password": user.password,
            "gender": user.sex,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.emailAddress,
            "homeTown": user.hometown,
            "birthDate": user.birthday
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
    }
}