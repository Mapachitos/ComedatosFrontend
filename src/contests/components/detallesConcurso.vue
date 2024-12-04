<template>
    <div class="w-full h-full p-8 space-y-6 min-w-120 overflow-y-auto scroll-tracking rounded-lg">

        <div class="w-full flex items-center flex-row">
            <h1 class="text-xl font-bold text-color-2 flex-grow sm:text-center text-start flexr">
                Concurso de Innovación
                <i class="pi pi-trophy mr-2 text-yellow-500"></i>
            </h1>
            <button
                class="px-3 py-2 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md">
                Editar
            </button>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <div class="space-y-4 w-full flex flex-col">

                <!-- Descripción -->
                <div class="divDatos">
                    <label for="descripcion" class="labelStyle">Descripción:</label>
                    <div class="divDatosMostrar">
                        <h1 class="h1DatosMostrar 3xl:text-lg">
                            Un concurso innovador es una competencia diseñada para fomentar la creatividad y la invención.
                        Los participantes presentan ideas o proyectos originales que abordan problemas específicos o
                        mejoran procesos existentes. El objetivo es incentivar el pensamiento fuera de lo común y
                        premiar las soluciones más ingeniosas y efectivas.
                        </h1>
                    </div>
                </div>

                <!-- Área -->
                <div class="divDatos">
                    <label for="nombre" class="labelStyle">Área:</label>
                    <div class="divDatosMostrar">
                        <h1 class="h1DatosMostrar 3xl:text-lg">
                            Tecnología</h1>
                    </div>
                </div>

                <!-- Puestos -->
                <div class="divDatos">
                    <label for="puestos" class="labelStyle">Puesto:</label>
                    <div class="divDatosMostrar">
                        <h1 class="h1DatosMostrar 3xl:text-lg">
                            Innovador</h1>
                    </div>
                </div>

                <!-- Ubicación y Sueldo -->
                <div class="flex flex-col md:flex-row md:space-x-6">
                    <div class="divDatos md:w-3/5">
                        <label for="ubicacion" class="labelStyle">Ubicación:</label>
                        <div class="divDatosMostrar">
                            <h1 class="h1DatosMostrar 3xl:text-lg">
                                Global</h1>
                        </div>
                    </div>
                    <div class="divDatos md:w-2/5 mt-4 md:mt-0">
                        <label for="sueldo" class="labelStyle">Sueldo:</label>
                        <div class="divDatosMostrar">
                            <h1 class="h1DatosMostrar 3xl:text-lg">
                                100000</h1>
                        </div>
                    </div>
                </div>

                <!-- Requisitos -->
                <div class="divDatos">
                    <label for="requisitosProyecto" class="labelStyle">Requisitos:</label>
                    <div class="divDatosMostrar">
                        <h1 class="h1DatosMostrar 3xl:text-lg">
                            Conociemientos en Laravel</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- Botones fuera del formulario -->
        <div class="flex justify-around space-x-4">
            <button @click="storeNav.setSelectedView('ListaConcursos');"
                class="pi pi-arrow-left fixed-button botonRegresar">
            </button>
        </div>

        <detallesEtapa />


    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// Store 
import { navInfoStore } from '@/stores/NavInfoStore';
const storeNav = navInfoStore();
storeNav.setTitle('Detalles del Concurso');
// Componentes
import detallesEtapa from './detallesEtapa.vue';
</script>