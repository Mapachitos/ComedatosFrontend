<template>
  <div v-if="showModal" class="absolute w-full h-full top-0 left-0 bg-black/50 z-20 flex justify-center items-center p-4">
    <div
      class="overflow-hidden p-6 w-full h-5/6 md:w-3/5 lg:w-2/5 xl:w-1/3 bg-white flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 shadow-xl shadow-black/30">
      <div class="flex items-center justify-between w-full h-10 min-h-10 mb-4">
        <h1 class="text-xl font-bold text-gray-700">Detalles Empleados</h1>
        <button type="button" @click="closeModal" class="space-x-1 px-3 py-2 botonVisualizar">Cerrar</button>
      </div>
      <div class="flex w-full h-full overflow-y-auto scroll-modal">
        <ul class="w-full">
          <li v-for="(value, key) in filteredSelectedRow" :key="key" class="p-2 border-b border-gray-300">
            <span class="font-semibold">{{ headers[key] }}:</span> {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Props que recibe el modal
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  selectedRow: {
    type: Object,
    default: () => ({}),
  },
  headers: {
    type: Object,
    default: () => ({}),
  },
  headersArray: {
    type: Array,
    default: () => [],
  },
  headersArray2: {
    type: Array,
    default: () => [],
  },
});

// Emitir evento para cerrar el modal
const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}

// Filtrar selectedRow para mostrar solo las claves que están en headers
const filteredSelectedRow = computed(() => {
  return Object.fromEntries(
    Object.entries(props.selectedRow).filter(([key]) => key in props.headers)
  );
});
</script>