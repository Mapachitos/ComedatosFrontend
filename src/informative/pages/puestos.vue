<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-white shadow-lg">

        <div class="flex flex-col w-full h-full space-y-2">


            <div class="flex md:flex-row flex-col w-full md:space-x-2 space-y-2 md:space-y-0">

                <select
                    class="p-2 min-h-10 h-10 min-w-48 text-sm outline-none border-2 border-gray-400 bg-gray-00 focus:border-gray-600 rounded-md transition-colors duration-200 ease-in-out">
                    <option value="global">Clave o nivel de puesto</option>
                    <option value="Proyecto.Proyecto_Nombre">Otra</option>
                    <!-- <option value="Proyecto.Proyecto_Estatus">Estatus</option> -->
                    <option value="Profesor_Asesor.Profesor_Nombre">Otra</option>
                </select>
                <input type="text" placeholder="Buscar..."
                    class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">
            </div>


            <div class="w-full h-full relative overflow-hidden">

                <div class="size-full rounded-lg bg-gray-200">
                    <DataTable :value="productos" scrollable scrollHeight="100%"
                        tableStyle="min-width: 100rem; width: 100%; height: 100%;" class="tablaPrimeVue">
                        <Column sortable field="denominacionCargo" header="Denominación del cargo" style="width: 25%;"
                            class="text-center font-semibold">
                        </Column>
                        <Column sortable field="denominacionPuesto"
                            header="Denominación del puesto (Redactados con perspectiva de género)" style="width: 20%;"
                            class="text-center">
                        </Column>
                        <Column sortable field="areaAdscripción" header="Ärea de Adscripción" style="width: 20%;" class="text-center">
                        </Column>
                        <Column sortable field="denominacionArea"
                            header="Denominación del área" style="width: 20%;"
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

        <modalPlazas :showModal="isModalVisible"  @close="isModalVisible = false" />

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

//Componentes
import modalPlazas from '@/informative/components/modalPlazas.vue';

// Definición de productos estáticos
const productos = ref([
    {
        denominacionCargo: 'Gerente Financiero',
        denominacionPuesto: 'Gerente de Finanzas (Perspectiva de Género)',
        areaAdscripción: 'Unidad de Transparencia, Acceso a la Información Pública y Protección de Datos Personales',
        denominacionArea: 'Área de Finanzas',
        hipervinculo: 'http://example.com/norma-finanzas',
    },
    {
        denominacionCargo: 'Especialista en Recursos Humanos',
        denominacionPuesto: 'Especialista de Recursos Humanos',
        areaAdscripción: 'Recursos Humanos',
        denominacionArea: 'Área de Recursos Humanos',
        hipervinculo: 'http://example.com/norma-recursos-humanos',
    },
    {
        denominacionCargo: 'Desarrollador de Software',
        denominacionPuesto: 'Desarrollador Backend',
        areaAdscripción: 'TI',
        denominacionArea: 'Área de Tecnologías de la Información',
        hipervinculo: 'http://example.com/norma-ti',
    },
    {
        denominacionCargo: 'Analista de Marketing',
        denominacionPuesto: 'Analista de Campañas',
        areaAdscripción: 'Marketing',
        denominacionArea: 'Área de Marketing',
        hipervinculo: 'http://example.com/norma-marketing',
    },
    {
        denominacionCargo: 'Representante de Ventas',
        denominacionPuesto: 'Ejecutivo de Ventas',
        areaAdscripción: 'Comercial',
        denominacionArea: 'Área de Ventas',
        hipervinculo: 'http://example.com/norma-ventas',
    },
    {
        denominacionCargo: 'Coordinador de Logística',
        denominacionPuesto: 'Coordinador de Distribución',
        areaAdscripción: 'Operaciones',
        denominacionArea: 'Área de Logística',
        hipervinculo: 'http://example.com/norma-logistica',
    },
    {
        denominacionCargo: 'Analista Financiero',
        denominacionPuesto: 'Analista de Finanzas',
        areaAdscripción: 'Finanzas',
        denominacionArea: 'Área de Finanzas',
        hipervinculo: 'http://example.com/norma-analista-finanzas',
    },
]);


const isModalVisible = ref(false);

function openModal() {
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