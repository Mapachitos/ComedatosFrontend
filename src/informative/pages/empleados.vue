<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-white shadow-lg">
        <div class="flex flex-col w-full h-full space-y-2">
            <div class="w-full flex flex-col md:flex-row items-center justify-end md:space-x-8 space-y-2 md:space-y-0">
                <div class="flex md:flex-row flex-col w-full md:space-x-2">
                    <select
                        class="p-2 min-h-10 h-10 min-w-48 text-sm outline-none border-2 border-gray-400 bg-gray-00 focus:border-gray-600 rounded-md transition-colors duration-200 ease-in-out">
                        <option value="global">RFC</option>
                        <option value="Proyecto.Proyecto_Nombre">Nombre</option>
                        <option value="Profesor_Asesor.Profesor_Nombre">Primer apellido</option>
                    </select>
                    <input type="text" placeholder="Buscar..."
                        class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">
                </div>
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
                        <Column header="Sueldos" style="width: 8.75%;" class="text-center">
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

        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="overflow-hidden p-6 w-full max-h-full md:w-3/5 lg:w-2/5 xl:w-1/3 bg-white flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 shadow-xl shadow-black/30">
                <div class="flex items-center justify-between w-full h-10 min-h-10 mb-4">
                    <h1 class="text-xl font-bold">Detalles del Registro</h1>
                    <button type="button" @click="showModal = false" class="space-x-1 px-3 py-2 botonVisualizar">Cerrar</button>
                </div>
                <div class="flex w-full h-full overflow-y-auto">
                    <ul class="w-full">
                        <li v-for="(value, key) in selectedRow" :key="key" class="p-2 border-b border-gray-300">
                            <strong>{{ headers[key] }}:</strong> {{ value }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const productos = ref([
    {
        clave: 'RFC001',
        denominacionArea: 'Juan Carlos',
        denominacionNorma: 'Pérez',
        hipervinculo: 'Gómez',
        sexo: 'Masculino',
        fechaAltaCargo: '2023-05-15',
        viabilidad: 'Calle',
    },
    {
        clave: 'RFC002',
        denominacionArea: 'María Fernanda',
        denominacionNorma: 'López',
        hipervinculo: 'Hernández',
        sexo: 'Femenino',
        fechaAltaCargo: '2021-09-10',
        viabilidad: 'Avenida',
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
