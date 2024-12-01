<template>
    <div class="w-full flex flex-col">
        <label for="nombreDato" class="text-lg font-semibold text-gray-700 mb-2">Nombre y Tipo de Dato:</label>
        <div v-for="(dato, index) in datos" :key="index"
            class="flex md:flex-row flex-col w-full justify-center items-center md:space-x-6 mb-2">
            <div :class="['flex flex-col mt-4 md:mt-0', index === 0 ? 'w-full md:w-1/2' : 'w-full']">
                <input type="text" v-model="dato.nombre"
                    class="block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                    placeholder="Ingrese el nombre del dato" required />
            </div>
            <div
                :class="['flex md:flex-row flex-col', index === 0 ? 'md:w-1/2 w-full' : 'w-full justify-center items-center md:space-x-6']">
                <div :class="['flex flex-col mt-4 md:mt-0', index === 0 ? 'w-full' : 'md:w-full']">
                    <el-select v-model="dato.tipo" placeholder="Selecciona el Tipo de Dato" required
                        style="z-index: 0;">
                        <el-option label="Sin función" value="Sin función"></el-option>
                        <el-option label="Publicación de documentos" value="Publicación de documentos"></el-option>
                        <el-option label="Llenado de datos" value="Llenado de datos"></el-option>
                    </el-select>
                </div>

                <div v-if="index > 0" class="flex flex-col w-full md:w-48 mt-4 md:mt-0">
                    <button @click="removeDato(index)"
                        class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Eliminar
                    </button>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-6">
            <button @click="addDato"
                class="px-3 py-2 text-white active:text-gray-200 bg-color-2 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Agregar Dato
            </button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Lista reactiva para almacenar los datos
const datos = ref<{ nombre: string, tipo: string }[]>([{ nombre: '', tipo: '' }]);

// Función para agregar un nuevo dato
function addDato() {
    datos.value.push({ nombre: '', tipo: '' });
}

// Función para eliminar un dato
function removeDato(index: number) {
    datos.value.splice(index, 1);
}
</script>