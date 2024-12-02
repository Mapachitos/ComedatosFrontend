import axios from "axios";
import type { GobiernoInterface } from "../interfaces/gobiernoInterface";

const gobierno = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "gobierno",
    headers: {
        'Accept': 'application/vnd.api+json'
    }
});

export const getGobierno = async () => {
    const data = await gobierno.get("");
    const gobiernoData: GobiernoInterface[] = data.data.data;
    console.log(gobiernoData);
    return gobiernoData;
}