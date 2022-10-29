import apiClient from "./apiClient";

export default {
    getPatientInCare(id, page, size) {
        return apiClient.get(`/doctor/${id}/patients?_page=${page}&_limit=${size}`)
    },
    getDoctor(id) {
        return apiClient.get(`/doctor/${id}`)
    },
    getPatientById(patient_id) {
        return apiClient.get(`/doctor/1/patients/${patient_id}`)
    },
    postComment(patient_id, doctor_id, comment) {
        return apiClient.post(`/doctor/comment`,
            {
                "patientId": patient_id,
                "doctorId": doctor_id,
                "content": comment
            }
        )
    }
}