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
                        <Column sortable field="clave" header="RFC" style="width: 10%;"
                            class="text-center font-semibold"></Column>
                        <Column sortable field="denominacionArea" header="Nombre(s) de la persona servidora pública"
                            style="width: 15%;" class="text-center"></Column>
                        <Column sortable field="denominacionNorma"
                            header="Primer apellido de la persona servidora pública" style="width: 10%;"
                            class="text-center"></Column>
                        <Column sortable field="hipervinculo" header="Segundo apellido de la persona servidora pública"
                            style="width: 10%;" class="text-center"></Column>
                        <Column sortable field="sexo" header="Sexo (catálogo)" style="width: 10%;" class="text-center">
                        </Column>
                        <Column sortable field="fechaAltaCargo" header="Fecha de alta en el cargo" style="width: 10%;"
                            class="text-center"></Column>
                        <Column sortable field="sueldos" header="Sueldos" style="width: 8.75%;" class="text-center">
                        </Column>
                        <Column header="Perfil" style="width: 8.75%;" class="text-center">
                            <template #body="slotProps">
                                <div class="size-full flex items-center justify-center">
                                    <button class="space-x-1 px-3 py-2 botonVisualizar" @click.stop>Visualizar</button>
                                </div>
                            </template>
                        </Column>
                        <Column header="Sanciones" style="width: 8.75%;" class="text-center">
                            <template #body="slotProps">
                                <div class="size-full flex items-center justify-center">
                                    <button class="space-x-1 px-3 py-2 botonVisualizar" @click.stop>Visualizar</button>
                                </div>
                            </template>
                        </Column>
                        <Column header="Contratos" style="width: 8.75%;" class="text-center">
                            <template #body="slotProps">
                                <div class="size-full flex items-center justify-center">
                                    <button class="space-x-1 px-3 py-2 botonVisualizar" @click.stop>Visualizar</button>
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>

        <modalEmpleados :showModal="showModal" :selectedRow="selectedRow" :headers="headers" @close="showModal = false" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import modalEmpleados from '../components/modalEmpleados.vue';


const productos = ref([
    {
        clave: 'RFC001',
        denominacionArea: 'Juan Carlos',
        denominacionNorma: 'Pérez',
        hipervinculo: 'Gómez',
        sexo: 'Masculino',
        fechaAltaCargo: '2023-05-15',
        viabilidad: 'Calle',
        sueldos: '50000',
    },
    {
        clave: 'RFC002',
        denominacionArea: 'María Fernanda',
        denominacionNorma: 'López',
        hipervinculo: 'Hernández',
        sexo: 'Femenino',
        fechaAltaCargo: '2021-09-10',
        viabilidad: 'Avenida',
        sueldos: '60000',
    },
]);

const showModal = ref(false);
const selectedRow = ref({});

const headers = {
    clave: 'RFC',
    denominacionArea: 'Nombre(s) de la persona servidora pública',
    denominacionNorma: 'Primer apellido de la persona servidora pública',
    hipervinculo: 'Segundo apellido de la persona servidora pública',
    sexo: 'Sexo (catálogo)',
    fechaAltaCargo: 'Fecha de alta en el cargo',
    viabilidad: 'Domicilio oficial: Tipo de vialidad (catálogo)',
    sueldos: 'Sueldos',
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
