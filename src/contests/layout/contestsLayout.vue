<template>
    <div class="flex h-screen w-screen flex-row overflow-auto">
        <div class="w-full h-full flex min-h-160">

            <aside :class="[
                'bg-color-2 text-white transition-all duration-300 flex flex-col',
                isExpanded ? 'w-64' : 'w-20'
            ]">


                <div class="w-full min-h-20 h-20 flex z-10 bg-color-2">
                    <button @click="toggleSidebar"
                        class="text-white w-full py-4 px-8 flex justify-center items-center focus:outline-none hover:bg-color-3">
                        <span class="text-center font-bold text-lg mr-4" v-if="isExpanded">Sistema Concursos</span>
                        <i :class="[isExpanded ? 'pi pi-bars' : 'pi pi-bars']"></i>
                    </button>
                </div>


                <!-- Menú de íconos y textos -->
                <ul class="mt-8">
                    <li v-for="route in routes">
                        <router-link :to="route.path"
                            class="flex items-center w-full py-4 px-8 rounded hover:bg-color-3"
                            :class="{ 'bg-color-3/30': isRouteSelected === route.name }"
                            @click="changeRoute(route.name)">
                            <i :class="['pi', route.icon, 'text-xl']"></i>
                            <span v-if="isExpanded" class="ml-4">{{ route.title }}</span>
                        </router-link>
                    </li>
                </ul>

                <!-- Botón de Cerrar sesión, con margen automático para empujarlo hacia abajo -->
                <div class="mt-auto">
                    <Button class="flex items-center w-full py-4 px-8 rounded hover:bg-color-3">
                        <i class="pi pi-power-off"></i>
                        <span v-if="isExpanded" class="ml-4">Cerrar Sesión</span>
                    </Button>
                </div>
            </aside>

            <div class="flex h-full flex-col w-full max-w-full">
                <header class="bg-color-2 w-full min-h-20 h-20 flex shadow-xl z-10 justify-center items-center">
                    <h1 class="text-lg font-bold mx-auto text-white">Mi Aplicación</h1>
                </header>

                <div class="bg-slate-200 w-full h-full flex flex-col items-center justify-center overflow-hidden p-4">
                    <router-view />

                </div>
            </div>

        </div>
    </div>

</template>


<script setup lang="ts">
import useSidebar from '../composables/useSideBar';

const {
    routes,
    isRouteSelected,
    isExpanded,
    toggleSidebar,
    changeRoute,
} = useSidebar();

</script>