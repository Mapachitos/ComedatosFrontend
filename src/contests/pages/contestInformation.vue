<template>
    <div
        class="flex flex-col p-8 w-full h-full sm:h-7/8  sm:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-9/12 sm:rounded-2xl bg-color-1 shadow-lg" v-show="storeNav.getSelectedView() === 'ListaConcursos'">

        <div
            class="min-h-12 md:min-h-14 flex w-full justify-between items-center flex-row rounded-lg  border self-center shadow-lg overflow-x-auto overflow-y-hidden p-2 bg-color-2">
            <div class="flex items-center space-x-4">
                <h1 class="text-base md:text-xl font-bold text-white bg-color-3 rounded-lg px-2 py-1">6</h1>
                <select
                    class="h-full w-36 text-sm text-white outline-none border-b-2 border-b-color-2 focus:border-b-white bg-white/0 option-color py-2">
                    <option value="">Filtros</option>
                    <option value="">Todos</option>
                    <option value="ACEPTADO">Inscripción</option>
                    <option value="PENDIENTE">Evaluación</option>
                    <option value="ASIGNADO">Finalizado</option>
                </select>
            </div>
            <button @click="storeNav.setSelectedView('agregarConcurso');"
                class="w-48 h-full px-3 py-2 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md md:text-sm text-xs outline-none">
                Agregar Concurso
            </button>
        </div>

        <!--Aqui se agregan los concursos-->
        <div class="relative w-full flex flex-col flex-grow overflow-auto px-2 py-6 z-0 space-y-10 scroll-tracking">
            <concursos />
        </div>
    </div>

    <agregarConcurso v-if="storeNav.getSelectedView() === 'agregarConcurso'"/>
    <detallesConcurso v-if="storeNav.getSelectedView() === 'detallesConcurso'" />

</template>

<script setup lang="ts">
//Store
import { navInfoStore } from '@/stores/NavInfoStore';
const storeNav = navInfoStore();
storeNav.setSelectedView('ListaConcursos');

//Componentes
import concursos from '../components/concursos.vue';
import agregarConcurso from '../components/agregarConcurso.vue';
import detallesConcurso from '../components/detallesConcurso.vue';
</script>

<style scoped>

.scroll-tracking::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.scroll-tracking::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.scroll-tracking::-webkit-scrollbar-thumb {
    background: #cac9c9;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
}

.scroll-tracking::-webkit-scrollbar-thumb:hover {
    background: #807f7f;
}

.option-color option {
    @apply bg-color-2;
}
</style>
