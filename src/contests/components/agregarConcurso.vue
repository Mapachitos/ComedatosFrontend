<template>
    <div class="w-full h-full p-8 space-y-8 min-w-120 overflow-y-auto scroll-form">
        <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <div class="gap-y-6 w-full flex flex-col">

                <!-- Campo Nombre del Concurso -->
                <div class="flex flex-col w-full relative rounded-md border border-gray-200 bg-white">
                    <input type="text" id="encargadoNombre"
                        class="block px-3 py-2 w-full text-sm text-black bg-gray-50 outline-none rounded-md appearance-none focus:ring-2 focus:ring-gray-400 focus:outline-none peer"
                        placeholder=" " required />
                    <label
                        class="truncate absolute text-sm rounded-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Nombre del Concurso:
                    </label>
                </div>

                <!-- Descripción -->
                <div class="flex flex-col w-full">
                    <label for="descripcionProyecto"
                        class="text-lg font-semibold text-gray-700 mb-2">Descripción:</label>
                    <textarea id="descripcionProyecto" rows="3"
                        class="block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese la Descripción del Concurso" required></textarea>
                </div>

                <!-- Área -->
                <div class="flex flex-col w-full">
                    <label for="nombreProyecto" class="text-lg font-semibold text-gray-700 mb-2">Área:</label>
                    <input type="text" id="nombreProyecto"
                        class="block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese el Área" required />
                </div>

                <!-- Puestos -->
                <div class="flex flex-col w-full">
                    <label for="puestos" class="text-lg font-semibold text-gray-700 mb-2">Puesto:</label>
                    <input type="text" id="puestos"
                        class="block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese el Puesto Disponible" required />
                </div>

                <!-- Ubicación y Sueldo -->
                <div class="flex flex-col md:flex-row md:space-x-6">
                    <div class="flex flex-col w-full md:w-3/5">
                        <label for="ubicacion" class="text-lg font-semibold text-gray-700 mb-2">Ubicación:</label>
                        <input type="text" id="ubicacion"
                            class="block w-full  px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
                            placeholder="Ingrese la Ubicación" required />
                    </div>
                    <div class="flex flex-col w-full md:w-2/5 mt-4 md:mt-0">
                        <label for="sueldo" class="text-lg font-semibold text-gray-700 mb-2">Sueldo:</label>
                        <input type="text" id="sueldo"
                            class="block w-full  px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
                            placeholder="Ingrese el Sueldo Ofrecido" required />
                    </div>
                </div>

                <!-- Requisitos -->
                <div class="flex flex-col w-full">
                    <label for="requisitosProyecto" class="text-lg font-semibold text-gray-700 mb-2">Requisitos:</label>
                    <textarea id="requisitosProyecto" rows="3"
                        class="block w-full  px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese los Requisitos del Concurso" required></textarea>
                </div>
            </div>
        </div>

        <div v-for="(etapa, index) in etapas" :key="etapa">
            <agregarEtapa :index="index" @quitar="removeStage" />
        </div>

        <!-- Botones fuera del formulario -->
        <div class="flex justify-around space-x-4">
            <button @click="addNewStage"
                class="px-3 py-2 text-white active:text-gray-200 bg-color-2 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Nueva Etapa
            </button>
            <button
                class="px-3 py-2 text-white active:text-gray-200 bg-color-5 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Cargar Plantilla
            </button>
            <button v-if="etapas.length > 0"
                class="px-3 py-2 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Registrar Concurso
            </button>
            <button @click="storeNav.setSelectedView('ListaConcursos');"
                class="pi pi-arrow-left px-3 py-2 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md fixed-button">
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navInfoStore } from '@/stores/NavInfoStore';
// Componentes
import agregarEtapa from './agregarEtapa.vue';
// Store 
const storeNav = navInfoStore();

// Manejo de etapas
const etapas = ref<number[]>([]);

const addNewStage = () => {
    etapas.value.push(etapas.value.length);
};

const removeStage = (index: number) => {
    etapas.value.splice(index, 1); // Elimina la etapa en el índice dado
};

</script>

<style scoped>

</style>
