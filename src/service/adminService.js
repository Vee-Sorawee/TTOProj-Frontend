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
    },
    verifyAsDoctor(id,hospital) {
        return apiClient.post(`/admin/verify/doctor/${id}`,{"hospital":hospital})
    },
    verifyAsPatient(id) {
        return apiClient.post(`/admin/verify/patient/${id}`)
    },
    getUser(id){
        return apiClient.get(`/admin/users/${id}`)
    },
    getVaccine(){
        return apiClient.get(`/admin/vaccines`)
    },
    addVaccine(id,vaccine,date){
        return apiClient.post("/admin/add-vaccine-history",
            {
                "patientID":id,
                "history":[
                    {
                        "codeName": vaccine.toLowerCase(),
                        "fullName" : '',
                        "vaccineDate": date,
                    }
                ]
            }
        )
    },
    setDoctor(patient_id,doctor_id){
        return apiClient.post(`/admin/assign-doctor`,
            {
                "patientID" : patient_id,
                "doctorID" : doctor_id
            }
        )
    }
}