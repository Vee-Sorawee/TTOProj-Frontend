import apiClient from "./apiClient";

export default {
    getAdmin() {
        return apiClient.get('/admin/users/9')
    },
    getPatients(page,size) {
        return apiClient.get(`/admin/patients?_page=${page}&_limit=${size}`)
    }
}