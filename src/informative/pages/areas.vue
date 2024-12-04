<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-white shadow-lg">

        <div class="flex flex-col w-full h-full space-y-2">

            <div class="flex flex-row w-full space-x-2">

                <div class="min-w-32 w-32 flex items-center space-x-3">
                    <h1 class="text-left font-semibold text-base lg:text-xl">Áreas: </h1>
                    <span class="font-bold text-color-5 text-xl text-center">{{ productos.length }}</span>
                </div>

                <input type="text" placeholder="Buscar..."
                    class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">
            </div>

            <div class="w-full h-full relative overflow-hidden">

                <div class="size-full rounded-lg bg-gray-200">
                    <DataTable :value="productos" scrollable scrollHeight="100%"
                        tableStyle="min-width: 100rem; width: 100%; height: 100%;" class="tablaPrimeVue">
                        <Column sortable field="Area_Denominacion" header="Denominación del área" style="width: 30%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Area_NormaAtribuciones"
                            header="Denominación de la norma que establece atribuciones, responsabilidades y/o funciones y el fundamento legal (artículo y/o fracción)"
                            style="width: 30%;" class="text-center">
                        </Column>
                        <Column field="Area_Reglamento"
                            header="Hipervínculo a la norma que establece las facultades de cada área"
                            style="width: 25%;" class="text-center">
                            <template #body="slotProps">
                                <template v-if="slotProps.data.Area_Reglamento">
                                    <button @click="redirectToUrl(slotProps.data.Area_Reglamento)"
                                        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        Ir a...
                                    </button>
                                </template>
                                <template v-else>
                                    <span class="text-gray-500 italic">Hipervínculo no disponible</span>
                                </template>
                            </template>
                        </Column>

                        <Column header="Puestos" style="width: 15%;" class="text-center">
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

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { type GobiernoInterface } from '../interfaces/gobiernoInterface';
import { getGobierno } from '../services/gobiernoService';

// Definición de productos estáticos
const productos = ref<GobiernoInterface[]>([]);

onMounted(async () => {
    productos.value = await getGobierno();
});

function redirectToUrl(url: string): void {
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
}

</script>

<style></style>
