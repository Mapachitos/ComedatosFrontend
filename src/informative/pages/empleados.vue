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
                    <DataTable :value="empleados" scrollable scrollHeight="100%"
                        tableStyle="min-width: 100rem; width: 100%; height: 100%;" class="tablaPrimeVue"
                        @row-click="handleRowClick">
                        <Column sortable field="Empleado_Nombre" header="Nombre de la persona servidora pública"
                            style="width: 10%;" class="text-center">
                            <template #body="slotProps">
                                {{ slotProps.data.Empleado_Nombre + ' ' + slotProps.data.Empleado_Ap1 + ' ' + slotProps.data.Empleado_Ap2 }}
                            </template></Column>
                        <Column sortable field="Area_Denominacion" header="Denominación del área" style="width: 15%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Puesto_Denominacion" header="Denominación del cargo" style="width: 15%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Empleados_Carrera" header="Carrera genérica en su cargo" style="width: 10%;"
                            class="text-center"></Column>
                        <Column sortable field="Empleado_Trayectoria"
                            header="Hipervínculo al documento que contenga la trayectoria" style="width: 20%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Empleado_Sanciones" header="Sanciones administrativas" style="width: 10%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Empleado_Sueldo" header="Monto de la remuneración mensual bruta"
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
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import modalEmpleados from '../components/modalEmpleados.vue';
import { type EmpleadoInterface } from '../interfaces/empleadoInterface';
import { getEmpleados } from '../services/empleadoService';

const empleados = ref<EmpleadoInterface[]>();

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

// Función para manejar el clic en una fila
function handleRowClick(event: any) {
    selectedRow.value = event.data;
    showModal.value = true;
}
</script>

<style scoped>
/* Estilo opcional para el modal */
</style>
