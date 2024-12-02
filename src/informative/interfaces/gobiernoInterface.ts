export interface GobiernoInterface {
    _id:                    ID;
    Area_Denominacion:      string;
    Area_NormaAtribuciones: string;
    Area_Reglamento:        string;
    Puestos:                Puesto[];
}

export interface Puesto {
    _id:                         ID;
    Area_Denominacion:           string;
    Puesto_DenominacionGenero:   string;
    Puesto_Cargo:                string;
    Area_Adscripcion:            string;
    Puesto_Norma?:               string;
    Puesto_Funciones?:           string;
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
    Plaza_Genero:              PlazaGenero;
}
export enum PlazaGenero {
    Hombre = "Hombre",
    Mujer = "Mujer",
}
export interface ID {
    $oid: string;
}
/*
export enum PlazaEstatus {
    Ocupado = "Ocupado",
}


export enum PlazaTipo {
    Confianza = "Confianza",
}

export enum PuestoCargoEnum {
    Analista = "ANALISTA",
    SubprocuradoraFiscal = "SUBPROCURADORA FISCAL",
}
*/