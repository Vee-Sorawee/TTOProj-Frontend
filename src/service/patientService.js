import apiClient from "./apiClient";

export default {
    getPatient(id) {
        return apiClient.get(`/patient/${id}`)
    }
}