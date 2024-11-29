<template>
    <div class="h-screen w-screen min-h-160 flex flex-col items-center justify-center relative bg-color-2">
        <div class="absolute size-full bg-black/10"></div>
        <div
            class="min-h-20 w-full flex items-center justify-center bg-color-3 shadow-lg z-20 px-6 sm:invisible sm:min-h-0">
            <h1
                class="text-center text-lg sm:text-2xl font-medium sm:font-semibold text-white sm:text-white sm:min-h-0">
                Sistema de transparencia de puestos públicos del estado de Quintana Roo</h1>
        </div>
        <div class="flex flex-col justify-center items-center w-full h-full z-10">
            <div
                class="flex justify-center items-center w-full h-full sm:w-160 sm:h-120 sm:rounded-md shadow-xl overflow-hidden">
                <div class="sm:w-2/4 tortoise h-full invisible sm:visible">
                </div>
                
                <div
                    class="flex flex-col w-full sm:w-2/4 p-4 h-full justify-center bg-white/20 backdrop-blur-sm space-y-4">

                    <div class="w-full flex flex-col h-36 justify-center invisible sm:visible">
                        <h1 class="text-xl font-bold text-white text-center" for="login">Sistema de transparencia de
                            puestos públicos del estado de Quintana Roo</h1>
                    </div>

                    <div class="flex flex-col h-3/5 justify-start space-y-8">

                        <div class="flex flex-row justify-center space-x-2">
                            <div @click="selected = 'login'" :class="selected === 'login' ? 'bg-color-3' : 'bg-color-1/20'" class="flex w-full h-16 items-center justify-center rounded-md text-white hover:bg-color-3 transition duration-200">
                                <p :class="selected === 'login' ? 'text-xs font-bold text-center' : 'text-xs font-semibold text-center'">Iniciar Sesión</p>
                            </div>
                            <div @click="selected = 'createUser'" :class="selected === 'createUser' ? 'bg-color-3' : 'bg-color-1/20'" class="flex w-full h-16 items-center justify-center rounded-md text-white hover:bg-color-3 transition duration-200">
                                <p :class="selected === 'createUser' ? 'text-xs font-bold text-center' : 'text-xs font-semibold text-center'">Crear Usuario</p>
                            </div>
                            <div @click="selected = 'recoverPassword'" :class="selected === 'recoverPassword' ? 'bg-color-3' : 'bg-color-1/20'" class="flex w-full h-16 items-center justify-center rounded-md text-white hover:bg-color-3 transition duration-200">
                                <p :class="selected === 'recoverPassword' ? 'text-xs font-bold text-center' : 'text-xs font-semibold text-center'">Recuperar Contraseña</p>
                            </div>
                        </div>

                        <div class="flex flex-col justify-center space-y-3">
                            <input type="text" placeholder="Ingresa tu usuario" class="bg-slate-50 border border-gray-200 rounded-md px-2 py-1 w-full text-start line-clamp-4 text-sm focus:outline-none" />
                            <input type="password" placeholder="Ingresa tu contraseña" class="bg-slate-50 border border-gray-200 rounded-md px-2 py-1 w-full text-start line-clamp-4 text-sm focus:outline-none" />
                        </div>

                        <div class="flex flex-col justify-center">
                             <RouterLink :to="{ name: 'contests' }"
                                class="w-full flex flex-row bg-color-3 max-h-16 hover:brightness-125 active:brightness-75 text-white text-left text-sm font-medium rounded-md transition duration-100 shadow-md h-8">
                                <div class="flex w-full h-full items-center justify-center">
                                    <p>Iniciar Sesión</p>
                                </div>
                                <Google />
                             </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const typeUser = router.currentRoute.value.params.user;
function goTo() {
    router.push({
        name: typeUser as string,
    });
}

const selected = ref('login');
</script>

<style scoped>
.tortoise {
    background-color: white;
    background-image: url('@/assets/img/login.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
</style>
