<template>
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        class="overflow-hidden p-6 w-full max-h-full md:w-3/5 lg:w-2/5 xl:w-1/3 bg-white flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 shadow-xl shadow-black/30">
        <div class="flex items-center justify-between w-full h-10 min-h-10 mb-4">
          <h1 class="text-xl font-bold">Detalles del Registro</h1>
          <button type="button" @click="closeModal" class="space-x-1 px-3 py-2 botonVisualizar">Cerrar</button>
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
  </template>
  
  <script setup lang="ts">
  
// Props que recibe el modal
defineProps({
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
});
  
  // Emitir evento para cerrar el modal
  const emit = defineEmits(['close']);
  
  function closeModal() {
    emit('close');
  }
  </script>
  