<template>
    <div class="flex h-screen w-screen flex-row overflow-auto">
        <div class="w-full h-full flex min-h-160">
            <aside :class="[ 'bg-color-2 text-white transition-all duration-300 flex flex-col', isExpanded ? 'w-64' : 'w-20' ]">
                <div class="w-full min-h-20 h-20 flex z-10 bg-color-2">
                    <button @click="toggleSidebar"
                        class="text-white w-full py-4 px-8 flex justify-center items-center focus:outline-none hover:bg-color-3">
                        <span class="text-center font-bold text-lg mr-4" v-if="isExpanded">Sistema Concursos</span>
                        <i class="pi pi-bars"></i>
                    </button>
                </div>

                <!-- Enlace a Concursos -->
                <RouterLink :to="{ name: 'contestInformation' }"
                            class="flex items-center w-full py-4 px-8 rounded hover:bg-color-3"
                            exact-active-class="bg-color-3/30">
                    <i class="pi pi-briefcase text-xl"></i>
                    <span v-if="isExpanded" class="ml-4">Concursos</span>
                </RouterLink>

                <!-- Enlace a Plantilla -->
                <RouterLink :to="{ name: 'createTemplate' }"
                            class="flex items-center w-full py-4 px-8 rounded hover:bg-color-3"
                            exact-active-class="bg-color-3/30">
                    <i class="pi pi-book text-xl"></i>
                    <span v-if="isExpanded" class="ml-4">Plantilla</span>
                </RouterLink>

                <!-- Botón de Cerrar sesión -->
                <div class="mt-auto">
                    <button class="flex items-center w-full py-4 px-8 rounded hover:bg-color-3">
                        <i class="pi pi-power-off"></i>
                        <span v-if="isExpanded" class="ml-4">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            <div class="flex h-full flex-col w-full max-w-full">
                <header class="bg-color-2 w-full min-h-20 h-20 flex shadow-xl z-10 justify-center items-center">
                    <h1 class="text-xl font-bold mx-auto text-white">{{ storeNav.getTitle() }}</h1>
                </header>
                <div class="bg-slate-200 w-full h-full flex flex-col items-center justify-center overflow-hidden p-4">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

//Store
import { navInfoStore } from '@/stores/NavInfoStore';
const storeNav = navInfoStore();

// Control de expansión del sidebar
const isExpanded = ref(true);

function toggleSidebar() {
    isExpanded.value = !isExpanded.value;
}
</script>
