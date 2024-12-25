import axios from "axios";
import { URL } from "../../urls";

//registrarse
export const registrarse = (data) => {
    return async function() { 
        const resp = await axios.post(`${URL}/usuario/registrarse`, data);
        return resp;
    }
}