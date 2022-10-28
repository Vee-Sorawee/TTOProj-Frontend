import apiClient from "./apiClient";

export default {
    getAdmin() {
        return apiClient.get('/admin/users/9')
    },
    getPatients(page,size) {
        return apiClient.get(`/admin/patients?_page=${page}&_limit=${size}`)
    },
    getDoctors(page,size) {
        return apiClient.get(`/admin/doctors?_page=${page}&_limit=${size}`)
    },
    getUsers(page,size) {
        return apiClient.get(`/admin/users/unverified?_page=${page}&_limit=${size}`)
    }
}