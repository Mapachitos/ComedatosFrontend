<template>
    <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <div class="space-y-4 w-full flex flex-col">

            <div class="flex flex-col w-full relative rounded-md border border-gray-200 bg-white">
                <input type="text" id="encargadoNombre"
                    class="block px-3 py-2 w-full text-sm text-black bg-gray-50 outline-none rounded-lg appearance-none focus:ring-2 focus:ring-gray-400 focus:outline-none peer"
                    placeholder=" " required />
                <label
                    class="truncate absolute text-sm rounded-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:bg-white peer-focus:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                    Nombre de la Etapa
                </label>
            </div>

            <div class="divDatos2">
                <div class="flex flex-col w-full md:w-1/2 space-y-2">
                    <label for="fechaApertura" class="labelStyle">Fecha
                        Apertura:</label>
                    <input type="text" id="ubicacion"
                        class="inputStyle"
                        placeholder="Ingrese la Fecha de Apertura" required />
                </div>
                <div class="flex flex-col w-full md:w-1/2 mt-4 md:mt-0 space-y-2">
                    <label for="fechaCierre" class="labelStyle">Fecha Cierre:</label>
                    <input type="text" id="sueldo"
                        class="inputStyle"
                        placeholder="Ingrese la Fecha de Cierre" required />
                </div>
            </div>

            <div class="divDatos">
                <label for="tipoFuncion" class="labelStyle">Función:</label>
                <div class="flex md:flex-row flex-col w-full justify-center items-center md:space-x-6">
                    <div class="flex flex-col w-full mt-4 md:mt-0">
                        <select v-model="tipoFuncion" id="tipoFuncion" required
                            class="inputStyle">
                            <option value="Sin función">Sin Función</option>
                            <option value="Publicación de documentos">Publicación de Documentos</option>
                            <option value="Llenado de datos">Llenado de Datos</option>
                        </select>

                    </div>

                    <div class="flex flex-col w-full md:w-48 mt-4 md:mt-0">
                        <button @click="removeStage"
                            class="botonCancelar">Quitar Etapa
                        </button>
                    </div>
                </div>

               
            </div>

            <funcionDatos v-if="tipoFuncion === 'Llenado de datos'" />
            <funcionDocumentos v-if="tipoFuncion === 'Publicación de documentos'" />

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import funcionDocumentos from './funcionDocumentos.vue';
import funcionDatos from './funcionDatos.vue';

const props = defineProps<{ index: number }>();

// Evento para quitar la etapa
const emit = defineEmits(['quitar']);

function removeStage() {
    emit('quitar', props.index); // Emitir el índice
}

const tipoFuncion = ref('Sin función');
</script>
