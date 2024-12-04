<template>
    <div v-for="concurso in props.concursos" :key="concurso.Concurso_ID" @click="storeNav.setSelectedView('detallesConcurso');"
        class="relative z-0 flex flex-col p-4 w-full min-w-96 rounded-lg shadow-lg border border-gray-300 bg-white transition-all hover:scale-[1.01] duration-100 active:brightness-95 space-y-3">

        <div class="w-full text-center mb-4">
            <h1 class="text-md md:text-xl text-gray-800"><span class="font-bold text-color-2"> Nombre del
                    Concurso:</span> {{ concurso.Concurso_Tipo }}</h1>
        </div>

        <!-- Información del Concurso -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div class="p-4 bg-gray-100 rounded-lg">
                <p class="text-gray-600"><span class="font-bold text-gray-800">Área:</span> {{ concurso.Concurso_InfoGeneral.InfoGeneral_Area }}</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Puesto:</span> {{ concurso.Concurso_InfoGeneral.InfoGeneral_Puesto }}</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Sueldo:</span> {{ concurso.Concurso_InfoGeneral.InfoGeneral_Sueldo }}</p>
            </div>


            <div class="p-4 bg-gray-100 rounded-lg">
                <p class="text-gray-600"><span class="font-bold text-gray-800">Fecha de registro:</span> 3 de Diciembre de 2024</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Etapa:</span> {{ concurso.Concurso_Estatus }}</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Ubicación:</span> {{ concurso.Concurso_InfoGeneral.InfoGeneral_Ubicacion
                    }}</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type ConcursoInterface } from '../interfaces/concursoInterface';
//Store
import { navInfoStore } from '@/stores/NavInfoStore';
const storeNav = navInfoStore();
/*
{
        Concurso_ID: 6,
        Concurso_Tipo: 'Concurso de Música',
        Concurso_InfoGeneral.InfoGeneral_Area: 'Música',
        Concurso_InfoGeneral.InfoGeneral_Puesto: 'Músico',
        Concurso_InfoGeneral.InfoGeneral_Sueldo: '$3100',
        fechaRegistro: '2023-06-18',
        Concurso_Estatus: 'Finalizado',
        Concurso_InfoGeneral.InfoGeneral_Ubicacion: 'Presencial'
    }
*/
//const concursos = ref();
const props = defineProps({
  concursos: {
    type: Array<ConcursoInterface>,
    default: () => ({}),
  },
});
</script>
