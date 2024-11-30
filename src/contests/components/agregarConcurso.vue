<template>
    <div class="w-full h-full p-8 space-y-8 min-w-120 overflow-y-auto scroll-tracking bg-gray-50 rounded-lg">
        <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <div class="gap-y-6 w-full flex flex-col">

                <!-- Campo Nombre del Concurso -->
                <div class="flex flex-col w-full relative rounded-md border border-gray-200 bg-white">
                    <input type="text" id="encargadoNombre"
                        class="block px-2.5 py-3 w-full text-sm text-black bg-gray-50 outline-none rounded-lg appearance-none focus:ring-2 focus:ring-gray-400 focus:outline-none peer"
                        placeholder=" " required />
                    <label
                        class="truncate absolute text-sm rounded-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Nombre del Concurso
                    </label>
                </div>

                <!-- Descripción -->
                <div class="flex flex-col w-full">
                    <label for="descripcionProyecto"
                        class="text-lg font-semibold text-gray-700 mb-2">Descripción</label>
                    <textarea id="descripcionProyecto" rows="3"
                        class="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese la descripción del proyecto" required></textarea>
                </div>

                <!-- Área -->
                <div class="flex flex-col w-full">
                    <label for="nombreProyecto" class="text-lg font-semibold text-gray-700 mb-2">Área</label>
                    <input type="text" id="nombreProyecto"
                        class="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese el área del proyecto" required />
                </div>

                <!-- Puestos -->
                <div class="flex flex-col w-full">
                    <label for="puestos" class="text-lg font-semibold text-gray-700 mb-2">Puestos</label>
                    <input type="text" id="puestos"
                        class="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese los puestos disponibles" required />
                </div>

                <!-- Ubicación y Sueldo -->
                <div class="flex flex-col md:flex-row md:space-x-6">
                    <div class="flex flex-col w-full md:w-3/5">
                        <label for="ubicacion" class="text-lg font-semibold text-gray-700 mb-2">Ubicación</label>
                        <input type="text" id="ubicacion"
                            class="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                            placeholder="Ingrese la ubicación" required />
                    </div>
                    <div class="flex flex-col w-full md:w-2/5 mt-4 md:mt-0">
                        <label for="sueldo" class="text-lg font-semibold text-gray-700 mb-2">Sueldo</label>
                        <input type="text" id="sueldo"
                            class="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                            placeholder="Ingrese el sueldo ofrecido" required />
                    </div>
                </div>

                <!-- Requisitos -->
                <div class="flex flex-col w-full">
                    <label for="requisitosProyecto" class="text-lg font-semibold text-gray-700 mb-2">Requisitos</label>
                    <textarea id="requisitosProyecto" rows="3"
                        class="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        placeholder="Ingrese los requisitos del proyecto" required></textarea>
                </div>
            </div>
        </div>

        <!-- Botones fuera del formulario -->
        <div class="flex justify-around space-x-4">
            <button
                class="px-3 py-2 text-white active:text-gray-200 bg-color-2 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Nueva Etapa
            </button>
            <button
                class="px-3 py-2 text-white active:text-gray-200 bg-color-5 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Cargar Plantilla
            </button>
            <button  @click="storeNav.setSelectedView('ListaConcursos');" class="pi pi-times px-3 py-2 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md">
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navInfoStore } from '@/stores/NavInfoStore';

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
</style>