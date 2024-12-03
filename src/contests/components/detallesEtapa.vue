<template>
      <div class="flex flex-col p-8 w-full rounded-xl shadow-lg border border-gray-300 bg-white">
            <div class="w-full text-center mb-4 flex flex-row justify-between items-center">
                <h1 class="text-lg md:text-xl text-gray-800 text-center flex-1">
                    <span class="text-md md:text-xl font-bold text-color-2">Etapa 1</span>
                </h1>
                <button @click="storeNav.setSelectedView('evaluar');"
                    class="px-3 py-2 text-white active:text-gray-200 bg-color-2 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                    Evaluar
                </button>
            </div>

            <!-- Información del Concurso -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-4 bg-gray-100 rounded-lg">
                    <p class="text-gray-600"><span class="font-bold text-gray-800">Nombre de la Etapa:</span> </p>
                    <p class="text-gray-600"><span class="font-bold text-gray-800">Estatus:</span> </p>
                </div>
                <div class="p-4 bg-gray-100 rounded-lg">
                    <p class="text-gray-600"><span class="font-bold text-gray-800">Fecha de Registro:</span> </p>
                    <p class="text-gray-600"><span class="font-bold text-gray-800">Fecha de Cierre:</span> </p>
                </div>
            </div>
        </div>

        
</template>

<script setup lang="ts">
//Store
import { navInfoStore } from '@/stores/NavInfoStore';
const storeNav = navInfoStore();
</script>