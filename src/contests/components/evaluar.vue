<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-white shadow-lg">

        <div class="flex justify-center mb-4">
            <h1 class="text-xl font-bold text-color-2">Nombre del Concurso</h1>
        </div>


        <div class="flex flex-col w-full h-full space-y-2">


            <div class="w-full flex flex-row items-center justify-between md:space-x-6">

                <div class="w-48 h-full flex items-center">
                    <button
                        class="px-3 md:py-2 py-3 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md md:text-sm text-xs outline-none">
                        Finalizar Etapa
                    </button>
                </div>



                <input type="text" placeholder="Buscar Proyecto..."
                    class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">

            </div>



            <div class="w-full h-full relative overflow-hidden">

                <div class="size-full rounded-lg bg-gray-200">
                    <DataTable :value="productos" scrollable scrollHeight="30em"
                        tableStyle="min-width: 70rem; width: 100%; height: 100%;" class="tablaPrimeVue">
                        <Column sortable field="clave" header="Clave del área" style="width: 10%;"
                            class="text-center font-semibold">
                        </Column>
                        <Column sortable field="denominacionArea" header="Denominación del área" style="width: 15%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="denominacionNorma"
                            header="Denominación de la norma que establece atribuciones, responsabilidades y/o funciones y el fundamento legal (artículo y/o fracción)"
                            style="width: 25%;" class="text-center">
                        </Column>
                        <Column field="hipervinculo"
                            header="Hipervínculo al fragmento de la norma que establece las facultades que correspondan a cada área"
                            style="width: 25%;" class="text-center">
                        </Column>
                        <Column header="Empleados" style="width: 10%;" class="text-center">
                            <template #body="slotProps">
                                <div class="size-full flex items-center justify-center">
                                    <button class="space-x-1 px-3 py-2 botonVisualizar">
                                        Visualizar
                                    </button>
                                </div>
                            </template>
                        </Column>
                        <Column header="Puestos" style="width: 10%;" class="text-center">
                            <template #body="slotProps">
                                <div class="size-full flex items-center justify-center">
                                    <button class="space-x-1 px-3 py-2 botonVisualizar">
                                        Visualizar
                                    </button>
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>

            </div>
        </div>

        <div class="flex justify-around space-x-4">
            <button @click="storeNav.setSelectedView('detallesConcurso');"
                class="pi pi-arrow-left fixed-button botonRegresar">
            </button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

//Store
import { navInfoStore } from '@/stores/NavInfoStore';
const storeNav = navInfoStore();

// Definición de productos estáticos
const productos = ref([
    {
        clave: 'A001',
        denominacionArea: 'Área de Finanzas',
        denominacionNorma: 'Norma de Responsabilidad Financiera, Artículo 5, Fracción II',
        hipervinculo: 'http://example.com/norma-finanzas',
    },
    {
        clave: 'A002',
        denominacionArea: 'Área de Recursos Humanos',
        denominacionNorma: 'Norma de Gestión de Personal, Artículo 12, Fracción IV',
        hipervinculo: 'http://example.com/norma-recursos-humanos',
    },
    {
        clave: 'A003',
        denominacionArea: 'Área de Tecnologías de la Información',
        denominacionNorma: 'Norma de Seguridad Informática, Artículo 8, Fracción I',
        hipervinculo: 'http://example.com/norma-ti',
    },
]);

</script>