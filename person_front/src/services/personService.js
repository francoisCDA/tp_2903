import api from "./api";

const getAllPerson = async () => {
    const reponse = await api.get("/persons")
    return reponse.data;
}

const postPerson = async (fisrt, last, dob) => {
    const person = {
        "first":fisrt,
        "last":last,
        "birthday":dob
    }
    return api.post('/persons',person).then((resp) => resp.data);
}

export default {getAllPerson, postPerson}