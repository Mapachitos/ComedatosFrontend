<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-white shadow-lg">
        <div class="flex flex-col w-full h-full space-y-2">


            <div class="flex md:flex-row flex-col w-full md:space-x-2 space-y-2 md:space-y-0">
                <select
                    class="p-2 min-h-10 h-10 min-w-48 text-sm outline-none border-2 border-gray-400 bg-gray-00 focus:border-gray-600 rounded-md transition-colors duration-200 ease-in-out">
                    <option value="global">RFC</option>
                    <option value="Proyecto.Proyecto_Nombre">Nombre</option>
                    <option value="Profesor_Asesor.Profesor_Nombre">Primer apellido</option>
                </select>
                <input type="text" placeholder="Buscar..."
                    class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">
            </div>


            <div class="w-full h-full relative overflow-hidden">
                <div class="size-full rounded-lg bg-gray-200">
                    <DataTable :value="productos" scrollable scrollHeight="100%"
                        tableStyle="min-width: 100rem; width: 100%; height: 100%;" class="tablaPrimeVue"
                        @row-click="handleRowClick">
                        <Column sortable field="nombreEmpleado" header="Nombre de la persona servidora pública"
                            style="width: 10%;" class="text-center">
                            <template #body="slotProps">
                                {{ slotProps.data.nombreEmpleado + ' ' + slotProps.data.apellidoPaterno + ' ' + slotProps.data.apellidoMaterno }}
                            </template></Column>
                        <Column sortable field="denominacionArea" header="Denominación del área" style="width: 15%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="denominacionCargo" header="Denominación del cargo" style="width: 15%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="carrera" header="Carrera genérica en su cargo" style="width: 10%;"
                            class="text-center"></Column>
                        <Column sortable field="trayectoria"
                            header="Hipervínculo al documento que contenga la trayectoria" style="width: 20%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="sanciones" header="Sanciones administrativas" style="width: 10%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="sueldo" header="Monto de la remuneración mensual bruta"
                            style="width: 11.25%;" class="text-center">
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
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import modalEmpleados from '../components/modalEmpleados.vue';


const productos = ref([
    {
        nombreEmpleado: 'Juan Pablo',
        apellidoPaterno: 'Pérez',
        apellidoMaterno: 'Robles',
        denominacionArea: 'Recursos Humanos',
        denominacionCargo: 'Gerente',
        sexo: 'Masculino',
        domicilioTipoViabilidad: 'Avenida',
        domicilioNombreViabilidad: 'Insurgentes',
        numeroExterior: 'S/N',
        numeroInterior: '123',
        nombreColonia: 'Adolfo López Mateos',
        tipoAsentamiento: 'Colonia',
        localidad: 'Chetumal',
        municipio: 'Othón P. Blanco',
        estado : 'Quintana Roo',
        cp : '77000',
        celular : '9831234567',
        nivelEstudios : 'Maeestría',
        carrera: 'Administración',
        trayectoria: 'http://example.com/trayectoria/juan-perez',
        sanciones: 'Ninguna',
        sueldo: '50,000 MXN'
    },
    {
        nombreEmpleado: 'María',
        apellidoPaterno: 'López',
        apellidoMaterno: 'García',
        denominacionArea: 'Finanzas',
        denominacionCargo: 'Analista',
        sexo: 'Femenino',
        domicilioTipoViabilidad: 'Avenida',
        domicilioNombreViabilidad: 'Insurgentes',
        numeroExterior: 'S/N',
        numeroInterior: '123',
        nombreColonia: 'Adolfo López Mateos',
        tipoAsentamiento: 'Colonia',
        localidad: 'Chetumal',
        municipio: 'Othón P. Blanco',
        estado : 'Quintana Roo',
        cp : '77000',
        celular : '9831234567',
        nivelEstudios : 'Licenciatura',
        carrera: 'Contabilidad',
        trayectoria: 'http://example.com/trayectoria/maria-lopez',
        sanciones: 'Ninguna',
        sueldo: '40,000 MXN'
    }
]);

const showModal = ref(false);
const selectedRow = ref({});

const headers = {
    nombreEmpleado: 'Nombre(s) de la persona servidora pública',
    apellidoPaterno: 'Primer apellido de la persona servidora pública',
    apellidoMaterno: 'Segundo apellido de la persona servidora pública',
    denominacionArea: 'Denominación del área',
    denominacionCargo: 'Denominación del cargo',
    carrera: 'Carrera genérica en su cargo',
    trayectoria: 'Hipervínculo al documento que contenga la trayectoria',
    sanciones: 'Sanciones administrativas definitivas aplicadas por la autoridad competente (catálogo)',
    sueldo: 'Monto de la remuneración mensual bruta de conformidad al tabulador de sueldos y salarios que corresponda',
    sexo: 'Sexo (catálogo)',
    domicilioTipoViabilidad: 'Domicilio oficial: tipo de vialidad (catálogo)',
    domicilioNombreViabilidad: 'Domicilio oficial: nombre de vialidad',
    numeroExterior: 'Domicilio oficial: número exterior',
    numeroInterior: 'Domicilio oficial: número interior',
    nombreColonia: 'Domicilio oficial: tipo de asentamiento (catálogo)',
    tipoAsentamiento: 'Domicilio oficial: nombre del asentamiento',
    localidad: 'Domicilio oficial: nombre de la localidad',
    municipio: 'Domicilio oficial: nombre del municipio o delegación',
    estado: 'Domicilio oficial: nombre de la entidad federativa (catálogo)',
    cp: 'Domicilio oficial: código postal',
    celular: 'Número(s) de teléfono oficial',
    nivelEstudios: 'Nivel máximo de estudios concluido y comprobable (catálogo)'
};

// Función para manejar el clic en una fila
function handleRowClick(event: any) {
    selectedRow.value = event.data;
    showModal.value = true;
}
</script>

<style scoped>
/* Estilo opcional para el modal */
</style>
