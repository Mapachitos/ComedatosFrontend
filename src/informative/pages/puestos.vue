<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-white shadow-lg">

        <div class="flex flex-col w-full h-full space-y-2">

            <input type="text" placeholder="Buscar..."
                class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">

            <div class="w-full h-full relative overflow-hidden">

                <div class="size-full rounded-lg bg-gray-200">
                    <DataTable :value="puestos" scrollable scrollHeight="100%"
                        tableStyle="min-width: 100rem; width: 100%; height: 100%;" class="tablaPrimeVue"
                        @row-click="handleRowClick">
                        <Column sortable field="Puesto_Cargo" header="Denominación del cargo" style="width: 25%;"
                            class="text-center font-semibold">
                        </Column>
                        <Column sortable field="Puesto_DenominacionGenero"
                            header="Denominación del puesto (Redactados con perspectiva de género)" style="width: 20%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Area_Adscripcion" header="Ärea de Adscripción" style="width: 20%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="Area_Denominacion" header="Denominación del área" style="width: 20%;"
                            class="text-center">
                        </Column>
                        <Column header="Plazas" style="width: 15%;" class="text-center">
                            <template #body="slotProps">
                                <div class="size-full flex items-center justify-center">
                                    <button @click="openModal" class="space-x-1 px-3 py-2 botonVisualizar">
                                        Visualizar
                                    </button>
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>

            </div>
        </div>

        <modalPlazas :showModal="isModalVisible" @close="isModalVisible = false" :puestos="selectedRow"/>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

//Componentes
import modalPlazas from '@/informative/components/modalPlazas.vue';
import { type PuestoInterface } from '../interfaces/puestoInterface';
import { getPuesto } from '../services/puestoService';
/*
{
        Puesto_Cargo: 'Gerente Financiero',
        Puesto_DenominacionGenero: 'Gerente de Finanzas (Perspectiva de Género)',
        Area_Adscripcion: 'Unidad de Transparencia, Acceso a la Información Pública y Protección de Datos Personales',
        Area_Denominacion: 'Área de Finanzas'
    },
*/
// Definición de puestos estáticos
const puestos = ref<PuestoInterface[]>();
const selectedRow = ref({});
onMounted(async () => {
    puestos.value = await getPuesto();
});

const isModalVisible = ref(false);

function openModal() {
    isModalVisible.value = true;
}
function handleRowClick(event: any) {
    selectedRow.value = event.data;
    isModalVisible.value = true;
}

</script>

<style>
.scroll-tabla::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    /* Ancho de la barra de desplazamiento */
}

.scroll-tabla::-webkit-scrollbar-track {
    background: #ffffff;
    /* Color del fondo de la barra de desplazamiento */
}

.scroll-tabla::-webkit-scrollbar-thumb {
    background: #e9e9e9;
    /* Color del relleno de la barra de desplazamiento */
    /* Radio de borde de la barra de desplazamiento */
}

.scroll-tabla::-webkit-scrollbar-thumb:hover {
    @apply bg-color-3;
    /* Color del relleno de la barra de desplazamiento al pasar el mouse */
}
</style>