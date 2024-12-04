<template>
    <div class="w-full h-full p-8 space-y-8 min-w-120 overflow-y-auto scroll-form">
        <div v-for="(etapa, index) in etapas" :key="etapa">
            <!-- Pasamos la propiedad "isFirstStageNonDeletable" -->
            <agregarEtapa :index="index" @quitar="removeStage" :isFirstStageNonDeletable="index === 0" />
        </div>

        <!-- Botones fuera del formulario -->
        <div class="flex justify-around space-x-4">
            <button @click="addNewStage" class="botonAgregar">
                Nueva Etapa
            </button>
            <button v-if="etapas.length > 0" class="botonGuardar">
                Guardar Plantilla
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navInfoStore } from '@/stores/NavInfoStore';
// Componentes
import AgregarEtapa from '@/contests/components/AgregarEtapa.vue';
// Store 
const storeNav = navInfoStore();
storeNav.setTitle('Crear Plantilla');

const etapas = ref<number[]>([0]); // Inicia con una etapa por defecto

const addNewStage = () => {
    etapas.value.push(etapas.value.length);
};

const removeStage = (index: number) => {
    etapas.value.splice(index, 1); // Elimina la etapa en el índice dado
};
</script>
