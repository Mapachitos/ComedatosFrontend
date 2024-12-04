export interface ConcursoInterface {
    Concurso_ID:          string;
    Concurso_Tipo:        string;
    Concurso_InfoGeneral: ConcursoInfoGeneral;
    Concurso_Estatus:     string;
    Concurso_Etapas:      ConcursoEtapa[];
}

export interface ConcursoEtapa {
    Etapa_Nombre:        string;
    Etapa_FechaApertura: Date;
    Etapa_FechaCierre:   Date;
    Etapa_Funcion:       string;
    Etapa_Notas:         string;
    Etapa_Estructura:    EtapaEstructura[];
    Etapa_Aspirantes?:   EtapaAspirante[];
}

export interface EtapaAspirante {
    Aspirante_Id:                    string;
    Aspirante_EstructuraPredefinida: EtapaEstructura[];
    Aspirante_Estatus:               string;
}

export interface EtapaEstructura {
    Estructura_NombreCampo:   string;
    Estructura_TipoCampo:     string;
    Estructura_AcronimoCampo: string;
}

export interface ConcursoInfoGeneral {
    InfoGeneral_Descripcion: string;
    InfoGeneral_Area:        string;
    InfoGeneral_Puesto:      string;
    InfoGeneral_Ubicacion:   string;
    InfoGeneral_Sueldo:      string;
    InfoGeneral_Requisitos:  string;
}
