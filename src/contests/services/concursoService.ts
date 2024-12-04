import axios from "axios";
import type { ConcursoInterface } from "../interfaces/concursoInterface";

const concurso = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "concursos",
    headers: {
        'Accept': 'application/vnd.api+json'
    }
});

export const getConcursos = async () => {
    const data = await concurso.get("");
    const concursoData: ConcursoInterface[] = data.data.data;
    console.log(concursoData);
    return concursoData;
}