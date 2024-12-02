<template>
    <div class="w-full h-full p-8 space-y-6 min-w-120 overflow-y-auto scroll-tracking rounded-lg">

        <div class="w-full flex items-center flex-row">
            <h1 class="text-xl font-bold text-color-2 flex-grow sm:text-center text-start flexr">
                Nombre del Concurso
                <i class="pi pi-trophy mr-2 text-yellow-500"></i>
            </h1>
            <button
                class="justify-end px-3 py-2 text-white active:text-gray-200 bg-color-2 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Editar
            </button>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <div class="gap-y-6 w-full flex flex-col">

                <!-- Descripción -->
                <div class="flex flex-col w-full">
                    <label for="descripcionProyecto"
                        class="text-lg font-semibold text-gray-700 mb-2">Descripción:</label>
                    <div class="px-3 py-2 bg-gray-100 rounded-md">
                        <h1
                            class="text-sm sm:text-base 3xl:text-lg font-bold text-gray-800 w-full text-wrap break-words text-justify">
                            holaaaa</h1>
                    </div>
                </div>

                <!-- Área -->
                <div class="flex flex-col w-full">
                    <label for="nombreProyecto" class="text-lg font-semibold text-gray-900 mb-2">Área:</label>
                    <div class="px-3 py-2 bg-gray-100 rounded-md">
                        <h1
                            class="text-sm sm:text-base 3xl:text-lg font-bold text-gray-800 w-full text-wrap break-words text-justify">
                            holaaaa</h1>
                    </div>
                </div>

                <!-- Puestos -->
                <div class="flex flex-col w-full">
                    <label for="puestos" class="text-lg font-semibold text-gray-900 mb-2">Puesto:</label>
                    <div class="px-3 py-2 bg-gray-100 rounded-md">
                        <h1
                            class="text-sm sm:text-base 3xl:text-lg font-bold text-gray-800 w-full text-wrap break-words text-justify">
                            holaaaa</h1>
                    </div>
                </div>

                <!-- Ubicación y Sueldo -->
                <div class="flex flex-col md:flex-row md:space-x-6">
                    <div class="flex flex-col w-full md:w-3/5">
                        <label for="ubicacion" class="text-lg font-semibold text-gray-900 mb-2">Ubicación:</label>
                        <div class="px-3 py-2 bg-gray-100 rounded-md">
                            <h1
                                class="text-sm sm:text-base 3xl:text-lg font-bold text-gray-800 w-full text-wrap break-words text-justify">
                                holaaaa</h1>
                        </div>
                    </div>
                    <div class="flex flex-col w-full md:w-2/5 mt-4 md:mt-0">
                        <label for="sueldo" class="text-lg font-semibold text-gray-900 mb-2">Sueldo:</label>
                        <div class="px-3 py-2 bg-gray-100 rounded-md">
                            <h1
                                class="text-sm sm:text-base 3xl:text-lg font-bold text-gray-800 w-full text-wrap break-words text-justify">
                                holaaaa</h1>
                        </div>
                    </div>
                </div>

                <!-- Requisitos -->
                <div class="flex flex-col w-full">
                    <label for="requisitosProyecto" class="text-lg font-semibold text-gray-900 mb-2">Requisitos:</label>
                    <div class="px-3 py-2 bg-gray-100 rounded-md">
                        <h1
                            class="text-sm sm:text-base 3xl:text-lg font-bold text-gray-800 w-full text-wrap break-words text-justify">
                            holaaaa</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- Botones fuera del formulario -->
        <div class="flex justify-around space-x-4">
            <button @click="storeNav.setSelectedView('ListaConcursos');"
                class="pi pi-arrow-left px-3 py-2 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md fixed-button">
            </button>
        </div>

        <detallesEtapa />
        
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navInfoStore } from '@/stores/NavInfoStore';
// Componentes
import detallesEtapa from './detallesEtapa.vue';

// Store 
const storeNav = navInfoStore();
</script>

<style scoped>
.scroll-tracking::-webkit-scrollbar {
    width: 8px;
}

.scroll-tracking::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.scroll-tracking::-webkit-scrollbar-thumb {
    background: #cac9c9;
    border-radius: 10px;
}

.scroll-tracking::-webkit-scrollbar-thumb:hover {
    background: #807f7f;
}

.fixed-button {
    position: fixed;
    bottom: 52px;
    right: 25px;
}
</style>
