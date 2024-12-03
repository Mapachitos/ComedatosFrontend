import axios from "axios";
import type { EmpleadoInterface } from "../interfaces/empleadoInterface";

const empleado = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "empleados",
    headers: {
        'Accept': 'application/vnd.api+json'
    }
});

export const getEmpleados = async () => {
    const data = await empleado.get("");
    const empleadoData: EmpleadoInterface[] = data.data.data;
    console.log(empleadoData);
    return empleadoData;
}