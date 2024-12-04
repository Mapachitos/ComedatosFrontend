<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-white shadow-lg">
        <div class="flex flex-col w-full h-full space-y-2">


            <div class="flex flex-row w-full space-x-12">

                <div class="min-w-32 w-32 flex items-center space-x-3">
                    <h1 class="text-left font-semibold text-base lg:text-xl">Empleados: </h1>
                    <span class="font-bold text-color-5 text-xl text-center">{{ empleados.length }}</span>
                </div>

                <input type="text" placeholder="Buscar..."
                    class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">
            </div>


            <div class="w-full h-full relative overflow-hidden">
                <div class="size-full rounded-lg bg-gray-200">
                    <DataTable :value="empleados" scrollable scrollHeight="100%"
                        tableStyle="min-width: 100rem; width: 100%; height: 100%;" class="tablaPrimeVue"
                        @row-click="handleRowClick">
                        <Column sortable field="Empleado_Nombre" header="Nombre de la persona servidora pública"
                            style="width: 15%;" class="text-center">
                            <template #body="slotProps">
                                {{ slotProps.data.Empleado_Nombre + ' ' + slotProps.data.Empleado_Ap1 + ' ' +
                                    slotProps.data.Empleado_Ap2 }}
                            </template>
                        </Column>
                        <Column sortable field="Area_Denominacion" header="Denominación del área" style="width: 15%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Puesto_Denominacion" header="Denominación del cargo" style="width: 15%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Sanciones_Coincidencias.0.Empleados_Carrera"
                            header="Carrera genérica en su cargo" style="width: 10%;" class="text-center"></Column>
                        <Column sortable field="Sanciones_Coincidencias.0.Empleado_Trayectoria"
                            header="Hipervínculo al documento que contenga la trayectoria" style="width: 15%;"
                            class="text-center">
                            <template #body="slotProps">
                                <template v-if="slotProps.data.Sanciones_Coincidencias?.[0]?.Empleado_Trayectoria">
                                    <button
                                        @click="redirectToUrl(slotProps.data.Sanciones_Coincidencias[0].Empleado_Trayectoria)"
                                        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        Ir a...
                                    </button>
                                </template>
                                <template v-else>
                                    <span class="text-gray-500">Hipervínculo no disponible</span>
                                </template>
                            </template>
                        </Column>
                        <Column sortable field="Sanciones_Coincidencias.0.Empleado_Sanciones"
                            header="Sanciones administrativas" style="width: 10%;" class="text-center">
                        </Column>
                        <Column sortable field="Sueldos_Coincidencias.0.Empleado_Sueldo"
                            header="Monto de la remuneración mensual bruta" style="width: 11.25%;" class="text-center">
                        </Column>
                        <Column header="Detalles" style="width: 8.75%;" class="text-center">
                            <template #body="slotProps">
                                <div class="size-full flex items-center justify-center">
                                    <button class="space-x-1 px-3 py-2 botonVisualizar">Visualizar</button>
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>

        <modalEmpleados :showModal="showModal" :selectedRow="selectedRow" :headers="headers"
            @close="showModal = false" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import modalEmpleados from '../components/modalEmpleados.vue';
import { type EmpleadoInterface } from '../interfaces/empleadoInterface';
import { getEmpleados } from '../services/empleadoService';


const empleados = ref<EmpleadoInterface[]>([]);

const showModal = ref(false);
const selectedRow = ref({});

onMounted(async () => {
    empleados.value = await getEmpleados();
});

const headers = {
    Empleado_Nombre: 'Nombre(s) de la persona servidora pública',
    Empleado_Ap1: 'Primer apellido de la persona servidora pública',
    Empleado_Ap2: 'Segundo apellido de la persona servidora pública',
    Area_Denominacion: 'Denominación del área',
    Puesto_Denominacion: 'Denominación del cargo',
    Empleados_Carrera: 'Carrera genérica en su cargo',
    Empleado_Trayectoria: 'Hipervínculo al documento que contenga la trayectoria',
    Empleado_Sanciones: 'Sanciones administrativas definitivas aplicadas por la autoridad competente (catálogo)',
    Empleado_Sueldo: 'Monto de la remuneración mensual bruta de conformidad al tabulador de sueldos y salarios que corresponda',
    Empleado_Sexo: 'Sexo (catálogo)',
    Empleado_DomicilioTipoVialidad: 'Domicilio oficial: tipo de vialidad (catálogo)',
    Empleado_DomicilioVialidad: 'Domicilio oficial: nombre de vialidad',
    Empleado_DomicilioNumExterior: 'Domicilio oficial: número exterior',
    Empleado_DomicilioNumInterior: 'Domicilio oficial: número interior',
    Empleado_DomicilioColonia: 'Domicilio oficial: tipo de asentamiento (catálogo)',
    Empleado_DomicilioAsentamiento: 'Domicilio oficial: nombre del asentamiento',
    Empleado_DomicilioLocalidad: 'Domicilio oficial: nombre de la localidad',
    Empleado_DomicilioMunicipio: 'Domicilio oficial: nombre del municipio o delegación',
    Empleado_DomicilioEstado: 'Domicilio oficial: nombre de la entidad federativa (catálogo)',
    Empleado_CP: 'Domicilio oficial: código postal',
    Empleado_NumTelefono: 'Número(s) de teléfono oficial',
    Empleado_NivelEstudios: 'Nivel máximo de estudios concluido y comprobable (catálogo)'
};

function redirectToUrl(url: string): void {
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
}


/*
        _id: 'ID del empleado',
    Puesto_Clave: 'Clave del puesto',
    Puesto_Denominacion: 'Denominación del puesto',
    Empleado_Nombre: 'Nombre del empleado',
    Empleado_Ap1: 'Primer apellido del empleado',
    Empleado_Ap2: 'Segundo apellido del empleado',
    Empleado_Sexo: 'Sexo del empleado',
    Area_Denominacion: 'Denominación del área',
    Empleado_FechaAlta: 'Fecha de alta del empleado',
    Empleado_DomicilioTipoVialidad: 'Tipo de vialidad del domicilio',
    Empleado_DomicilioVialidad: 'Nombre de la vialidad del domicilio',
    Empleado_DomicilioNumExterior: 'Número exterior del domicilio',
    Empleado_DomicilioNumInterior: 'Número interior del domicilio',
    Empleado_DomicilioColonia: 'Colonia del domicilio',
    Empleado_DomicilioAsentamiento: 'Asentamiento del domicilio',
    Empleado_DomicilioLocalidad: 'Localidad del domicilio',
    Empleado_DomicilioMunicipio: 'Municipio del domicilio',
    Empleado_DomicilioEstado: 'Estado del domicilio',
    Empleado_CP: 'Código postal del domicilio',
    Empleado_NumTelefono: 'Número de teléfono del empleado',
    Empleado_Extension: 'Extensión del teléfono del empleado',
    Empleado_Sanciones: 'Sanciones del empleado',


    const headersArray = {
    _id: 'ID del empleado',
    Tipo_Integrante: 'Tipo de integrante',
    Puesto_Clave: 'Clave del puesto en coincidencias de sueldos',
    Puesto_Denominacion: 'Denominación del puesto en coincidencias de sueldos',
    Puesto_Cargo: 'Cargo del puesto en coincidencias de sueldos',
    Area_Adscripcion: 'Área de adscripción en coincidencias de sueldos',
    Empelado_Nombre: 'Nombre del empleado en coincidencias de sueldos',
    Empleado_Ap1: 'Primer apellido del empleado en coincidencias de sueldos',
    Empleado_Ap2: 'Segundo apellido del empleado en coincidencias de sueldos',
    Empelado_Sexo: 'Sexo del empleado en coincidencias de sueldos',
    Empleado_Sueldo: 'Sueldo del empleado en coincidencias de sueldos'
};
const headersArray2 = {
    _id: 'ID del empleado',
    Puesto_DenominacionGenero: 'Denominación de género del puesto en coincidencias de sanciones',
    Puesto_Denominacion: 'Denominación del puesto en coincidencias de sanciones',
    Empleado_Nombre: 'Nombre del empleado en coincidencias de sanciones',
    Empleado_Ap1: 'Primer apellido del empleado en coincidencias de sanciones',
    Empleado_Ap2: 'Segundo apellido del empleado en coincidencias de sanciones',
    Empleado_Sexo: 'Sexo del empleado en coincidencias de sanciones',
    Area_Adscripcion: 'Área de adscripción en coincidencias de sanciones',
    Empleado_NivelEstudios: 'Nivel de estudios del empleado en coincidencias de sanciones',
    Empleados_Carrera: 'Carrera del empleado en coincidencias de sanciones',
    Empleado_Experiencia: 'Experiencia del empleado en coincidencias de sanciones',
    Empleado_Trayectoria: 'Trayectoria del empleado en coincidencias de sanciones',
    Empleado_Sanciones: 'Sanciones del empleado en coincidencias de sanciones'
};
const headers = {
    _id: 'ID del empleado',
    Puesto_Clave: 'Clave del puesto',
    Empleado_FechaAlta: 'Fecha de alta del empleado',
    Empleado_Nombre: 'Nombre(s) de la persona servidora pública',
    Empleado_Ap1: 'Primer apellido de la persona servidora pública',
    Empleado_Ap2: 'Segundo apellido de la persona servidora pública',
    Area_Denominacion: 'Denominación del área',
    Puesto_Denominacion: 'Denominación del cargo',
    Empleados_Carrera: 'Carrera genérica en su cargo',
    Empleado_Trayectoria: 'Hipervínculo al documento que contenga la trayectoria',
    Empleado_Sanciones: 'Sanciones administrativas definitivas aplicadas por la autoridad competente (catálogo)',
    Empleado_Sueldo: 'Monto de la remuneración mensual bruta de conformidad al tabulador de sueldos y salarios que corresponda',
    Empleado_Sexo: 'Sexo (catálogo)',
    Empleado_DomicilioTipoVialidad: 'Tipo de vialidad (catálogo)',
    Empleado_DomicilioVialidad: 'Nombre de vialidad',
    Empleado_DomicilioNumExterior: 'Número exterior',
    Empleado_DomicilioNumInterior: 'Número interior',
    Empleado_DomicilioColonia: 'Tipo de asentamiento (catálogo)',
    Empleado_DomicilioAsentamiento: 'Nombre del asentamiento',
    Empleado_DomicilioLocalidad: 'Nombre de la localidad',
    Empleado_DomicilioMunicipio: 'Nombre del municipio o delegación',
    Empleado_DomicilioEstado: 'Nombre de la entidad federativa (catálogo)',
    Empleado_CP: 'Código postal',
    Empleado_NumTelefono: 'Número(s) de teléfono oficial',
    Empleado_NivelEstudios: 'Nivel máximo de estudios concluido y comprobable (catálogo)',
    Empleado_Extension: 'Extensión del teléfono del empleado', 
};
*/




// Función para manejar el clic en una fila
function handleRowClick(event: any) {
    selectedRow.value = event.data;
    showModal.value = true;
}
</script>

<style scoped>
/* Estilo opcional para el modal */
</style>
