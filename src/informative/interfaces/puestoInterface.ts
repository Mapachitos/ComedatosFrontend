export interface PuestoInterface {
    _id:                         ID;
    Area_Denominacion:           string;
    Puesto_DenominacionGenero:   string;
    Puesto_Cargo:                string;
    Area_Adscripcion:            string;
    Puesto_Norma:                string;
    Puesto_Funciones:            string;
    Area_Adscripcion_Normalized: string;
    Plazas:                      Plaza[];
}

export interface Plaza {
    _id:                       ID;
    Area_Denominacion:         string;
    Puesto_DenominacionGenero: string;
    Puesto_Clave:              string;
    Plaza_Tipo:                string;
    Area_Adscripcion:          string;
    Plaza_Estatus:             string;
    Plaza_Genero:              string;
}

export interface ID {
    $oid: string;
}