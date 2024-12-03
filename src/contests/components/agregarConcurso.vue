<template>
    <div class="w-full h-full p-8 space-y-8 min-w-120 overflow-y-auto scroll-form">
        <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <div class="space-y-4 w-full flex flex-col">

                <!-- Campo Nombre del Concurso -->
                <div class="flex flex-col w-full relative rounded-md border border-gray-200 bg-white">
                    <input type="text" id="encargadoNombre"
                        class="block px-3 py-2 w-full text-sm text-black bg-gray-50 outline-none rounded-md appearance-none focus:ring-2 focus:ring-gray-400 focus:outline-none peer"
                        placeholder=" " required />
                    <label
                        class="truncate absolute text-sm rounded-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:bg-white peer-focus:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Nombre del Concurso:
                    </label>
                </div>

                <!-- Descripción -->
                <div class="divDatos">
                    <label for="descripcion" class="labelStyle">Descripción:</label>
                    <textarea id="descripcion" rows="3" class="inputStyle"
                        placeholder="Ingrese la Descripción del Concurso" required></textarea>
                </div>

                <!-- Área -->
                <div class="divDatos">
                    <label for="area" class="labelStyle">Área:</label>
                    <input type="text" id="area" class="inputStyle" placeholder="Ingrese el Área" required />
                </div>

                <!-- Puestos -->
                <div class="divDatos">
                    <label for="puestos" class="labelStyle">Puesto:</label>
                    <input type="text" id="puestos" class="inputStyle" placeholder="Ingrese el Puesto Disponible"
                        required />
                </div>

                <!-- Ubicación y Sueldo -->
                <div class="divDatos2">
                    <div class="flex flex-col w-full md:w-3/5 space-y-2">
                        <label for="ubicacion" class="labelStyle ">Ubicación:</label>
                        <input type="text" id="ubicacion" class="inputStyle" placeholder="Ingrese la Ubicación"
                            required />
                    </div>
                    <div class="flex flex-col w-full md:w-2/5 space-y-2">
                        <label for="sueldo" class="labelStyle ">Sueldo:</label>
                        <input type="text" id="sueldo" class="inputStyle" placeholder="Ingrese el Sueldo Ofrecido"
                            required />
                    </div>
                </div>

                <!-- Requisitos -->
                <div class="divDatos">
                    <label for="requisitos" class="labelStyle">Requisitos:</label>
                    <textarea id="requisitos" rows="3" class="inputStyle"
                        placeholder="Ingrese los Requisitos del Concurso" required></textarea>
                </div>
            </div>
        </div>

        <div v-for="(etapa, index) in etapas" :key="etapa">
            <agregarEtapa :index="index" @quitar="removeStage" />
        </div>

        <!-- Botones fuera del formulario -->
        <div class="flex justify-around space-x-4">
            <button @click="addNewStage" class="botonAgregar">
                Nueva Etapa
            </button>
            <button class="botonCargar">
                Cargar Plantilla
            </button>
            <button v-if="etapas.length > 0" class="botonGuardar">
                Registrar Concurso
            </button>
            <button @click="storeNav.setSelectedView('ListaConcursos');"
                class="pi pi-arrow-left fixed-button botonRegresar">
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
