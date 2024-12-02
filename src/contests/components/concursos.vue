<template>
    <div v-for="concurso in concursos" :key="concurso.id" @click="storeNav.setSelectedView('detallesConcurso');"
        class="relative z-0 flex flex-col p-4 w-full min-w-96 rounded-xl shadow-lg border border-gray-300 bg-white transition-all hover:scale-[1.01] duration-100 active:brightness-95 space-y-3">

        <div class="w-full text-center mb-4">
            <h1 class="text-lg md:text-xl text-gray-800"><span class="font-bold text-color-2"> Nombre del
                    Concurso:</span> {{ concurso.nombre }}</h1>
        </div>

        <!-- Información del Concurso -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">


            <div class="p-4 bg-gray-100 rounded-lg">
                <p class="text-gray-600"><span class="font-bold text-gray-800">Área:</span> {{ concurso.area }}</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Puesto:</span> {{ concurso.puesto }}</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Sueldo:</span> {{ concurso.sueldo }}</p>
            </div>


            <div class="p-4 bg-gray-100 rounded-lg">
                <p class="text-gray-600"><span class="font-bold text-gray-800">Fecha de registro:</span> {{
                    concurso.fechaRegistro }}</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Etapa:</span> {{ concurso.etapa }}</p>
                <p class="text-gray-600"><span class="font-bold text-gray-800">Ubicación:</span> {{ concurso.ubicacion
                    }}</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

//Store
import { navInfoStore } from '@/stores/NavInfoStore';
const storeNav = navInfoStore();

const concursos = ref([
    {
        id: 1,
        nombre: 'Concurso de Programación',
        area: 'Tecnología',
        puesto: 'Desarrollador',
        sueldo: '$3000',
        fechaRegistro: '2023-01-15',
        etapa: 'Inscripción',
        ubicacion: 'Remoto'
    },
    {
        id: 2,
        nombre: 'Concurso de Diseño',
        area: 'Creatividad',
        puesto: 'Diseñador Gráfico',
        sueldo: '$2500',
        fechaRegistro: '2023-02-20',
        etapa: 'Evaluación',
        ubicacion: 'Presencial'
    },
    {
        id: 3,
        nombre: 'Concurso de Marketing',
        area: 'Marketing',
        puesto: 'Especialista en Marketing',
        sueldo: '$2800',
        fechaRegistro: '2023-03-10',
        etapa: 'Finalizado',
        ubicacion: 'Remoto'
    },
    {
        id: 4,
        nombre: 'Concurso de Fotografía',
        area: 'Arte',
        puesto: 'Fotógrafo',
        sueldo: '$2200',
        fechaRegistro: '2023-04-05',
        etapa: 'Inscripción',
        ubicacion: 'Presencial'
    },
    {
        id: 5,
        nombre: 'Concurso de Escritura',
        area: 'Literatura',
        puesto: 'Escritor',
        sueldo: '$2700',
        fechaRegistro: '2023-05-12',
        etapa: 'Evaluación',
        ubicacion: 'Remoto'
    },
    {
        id: 6,
        nombre: 'Concurso de Música',
        area: 'Música',
        puesto: 'Músico',
        sueldo: '$3100',
        fechaRegistro: '2023-06-18',
        etapa: 'Finalizado',
        ubicacion: 'Presencial'
    }
]);
</script>
