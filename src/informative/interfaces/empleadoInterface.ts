export interface EmpleadoInterface {
    _id:                            ID;
    Puesto_Clave:                   string;
    Puesto_Denominacion:            string;
    Empleado_Nombre:                string;
    Empleado_Ap1:                   string;
    Empleado_Ap2:                   string;
    Empleado_Sexo:                  string;
    Area_Denominacion:              string;
    Empleado_FechaAlta:             string;
    Empleado_DomicilioTipoVialidad: string;
    Empleado_DomicilioVialidad:     string;
    Empleado_DomicilioNumExterior:  string;
    Empleado_DomicilioNumInterior:  string;
    Empleado_DomicilioColonia:      string;
    Empleado_DomicilioAsentamiento: string;
    Empleado_DomicilioLocalidad:    string;
    Empleado_DomicilioMunicipio:    string;
    Empleado_DomicilioEstado:       string;
    Empleado_CP:                    string;
    Empleado_NumTelefono:           string;
    Empleado_Extension:             string;
    Empleado_Sanciones:             string;
    Sueldos_Coincidencias:          SueldosCoincidencia[];
    Sanciones_Coincidencias:        SancionesCoincidencia[];
}

export interface SancionesCoincidencia {
    _id:                       ID;
    Puesto_DenominacionGenero: string;
    Puesto_Denominacion:       string;
    Empleado_Nombre:           string;
    Empleado_Ap1:              string;
    Empleado_Ap2:              string;
    Empleado_Sexo:             string;
    Area_Adscripcion:          string;
    Empleado_NivelEstudios:    string;
    Empleados_Carrera:         string;
    Empleado_Experiencia:      string;
    Empleado_Trayectoria:      string;
    Empleado_Sanciones:        string;
}

export interface ID {
    $oid: string;
}

export interface SueldosCoincidencia {
    _id:                 ID;
    Tipo_Integrante:     string;
    Puesto_Clave:        string;
    Puesto_Denominacion: string;
    Puesto_Cargo:        string;
    Area_Adscripcion:    string;
    Empelado_Nombre:     string;
    Empleado_Ap1:        string;
    Empleado_Ap2:        string;
    Empelado_Sexo:       string;
    Empleado_Sueldo:     string;
}
