import axios from "axios";
import type { PuestoInterface } from "../interfaces/puestoInterface";

const puesto = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "puestos",
    headers: {
        'Accept': 'application/vnd.api+json'
    }
});

export const getPuesto = async () => {
    const data = await puesto.get("");
    const puestoData: PuestoInterface[] = data.data.data;
    console.log(puestoData);
    return puestoData;
}