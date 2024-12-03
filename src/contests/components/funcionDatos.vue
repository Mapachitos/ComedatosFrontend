<template>
    <div class="w-full flex flex-col">
        <label for="nombreDato" class="labelStyle mb-2">
            Nombre y Tipo de Dato:
        </label>
        <div v-for="(dato, index) in datos" :key="index"
            class="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 mb-4">
            <!-- Input de nombre -->
            <input type="text" v-model="dato.nombre" class="inputStyle" placeholder="Ingrese el nombre del dato"
                required />

            <select v-model="dato.tipo" required class="inputStyle">
                <option value="" disabled>Selecciona el Tipo de Dato</option>
                <option value="Sin función">Texto</option>
                <option value="Publicación de documentos">Archivo</option>
            </select>

            <button v-if="index > 0" @click="removeDato(index)" class="botonCancelar">
                Eliminar
            </button>
        </div>

        <div class="flex justify-center mt-6">
            <button @click="addDato" class="botonAgregar">
                Agregar Dato
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const datos = ref<{ nombre: string; tipo: string }[]>([{ nombre: '', tipo: '' }]);

function addDato() {
    datos.value.push({ nombre: '', tipo: '' });
}

function removeDato(index: number) {
    datos.value.splice(index, 1);
}
</script>