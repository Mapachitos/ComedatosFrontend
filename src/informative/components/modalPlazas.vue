<template>
  <div v-if="showModal"
    class="absolute w-full h-full top-0 left-0 bg-black/50 z-20 flex justify-center items-center p-4">

    <div
      class="flex flex-col p-8 w-full h-full sm:h-7/8 sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 rounded-lg bg-white border-2 border-gray-300 shadow-xl shadow-black/30">

      <div class="flex flex-col w-full h-full space-y-2">

        <div class="relative w-full mb-4 flex items-center">
          <h1 class="text-xl font-semibold text-gray-800 mx-auto">Plazas</h1>
          <button type="button" @click="closeModal" class="w-20 px-3 py-2 botonVisualizar">Cerrar</button>
        </div>


        <input type="text" placeholder="Buscar..."
          class="rounded-md border-gray-400 border-2 focus:outline-none focus:border-gray-600 w-full truncate font-medium placeholder-gray-500 text-sm md:text-base min-h-10 h-10 p-2 focus:placeholder-gray-600">


        <div class="w-full h-full relative overflow-hidden">

          <div class="size-full rounded-lg bg-gray-200">
            <DataTable :value="selectedRow" scrollable scrollHeight="flex"
              tableStyle="min-width: 70rem; width: 100%; height: 70%;" class="tablaPrimeVue">
              <Column sortable field="Plazas.Area_Denominacion" header="Denominación del área" style="width: 20%;"
                class="text-center">
              </Column>
              <Column sortable field="Plazas.Puesto_Clave" header="Clave o nivel de puesto" style="width: 10%;"
                class="text-center">
              </Column>
              <Column sortable field="Plazas.Puesto_DenominacionGenero"
                header="Denominación del puesto (Redactados con perspectiva de género)" style="width: 20%;"
                class="text-center">
              </Column>
              <Column sortable field="Plazas.Plaza_Tipo" header="Tipo de Plaza" style="width: 10%;" class="text-center">
              </Column>
              <Column sortable field="Plazas.Area_Adscripcion" header="Ärea de Adscripción" style="width: 20%;"
                class="text-center">
              </Column>
              <Column sortable field="Plazas.Plaza_Estatus" header="Estado de la Plaza" style="width: 10%;" class="text-center">
              </Column>
              <Column sortable field="Plazas.Plaza_Genero" header="Sexo" style="width: 10%;" class="text-center">
              </Column>
            </DataTable>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { type PuestoInterface } from '../interfaces/puestoInterface';
/*
  {
    Plazas.Area_Denominacion: 'Área de Finanzas',
    Plazas.Puesto_Clave: 'F001',
    Plazas.Puesto_DenominacionGenero: 'Analista Financiero',
    Plazas.Plaza_Tipo: 'Temporal',
    Plazas.Area_Adscripcion: 'Finanzas Corporativas',
    Plazas.Plaza_Estatus: 'Ocupada',
    Plazas.Plaza_Genero: 'Indistinto',
  }
*/
// Definición de puestos estáticos

// Props que recibe el modal
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  selectedRow: {
    type: Array,
    default: () => ({}),
  },
});
import { watch } from 'vue';

// Emitir evento para cerrar el modal
const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>