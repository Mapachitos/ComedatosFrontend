<template>
    <div class="w-screen h-screen flex flex-col overflow-x-hidden overflow-y-auto bg-color-1">
        <div class="w-full sticky top-0 z-10 min-h-24 h-24 max-h-24 bg-color-3 shadow-xl shadow-black/30">
            <div class="w-auto h-full flex">
                <div class="w-80 h-full flex items-center justify-center bg-white">
                    <img src="@/assets/img/logo.png" class="mx-auto max-w-full max-h-full">
                </div>
                <div class="w-fit h-full flex-1 flex flex-row">
                    <RouterLink :to="{ name: 'areas' }"
                        class="seccionMenuInformative group"
                        exact-active-class="active-link">
                        <div class="relative h-full w-full px-3 flex items-center justify-center">
                            <p class="font-light text-white">Áreas</p>
                            <div
                                class="animacionSeccion">
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink :to="{ name: 'puestos' }"
                        class="seccionMenuInformative group"
                        exact-active-class="active-link">
                        <div class="relative h-full w-full px-3 flex items-center justify-center">
                            <p class="font-light text-white">Puestos</p>
                            <div
                                class="animacionSeccion">
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink :to="{ name: 'empleados' }"
                        class="seccionMenuInformative group"
                        exact-active-class="active-link">
                        <div class="relative h-full w-full px-3 flex items-center justify-center">
                            <p class="font-light text-white">Empleados</p>
                            <div
                                class="animacionSeccion">
                            </div>
                        </div>
                    </RouterLink>
                    <div
                        class="w-1/2 h-full bg-color-2 flex items-center justify-center text-center md:text-xl hover:brightness-125 transition duration-500 ease-in-out cursor-pointer group">
                        <RouterLink :to="{ name: 'auth' }"
                            class="px-3 py-2 text-white active:text-gray-200 bg-color-3 hover:brightness-125 active:brightness-75 font-medium rounded-md md:text-sm text-xs md:mx-0 mx-2 outline-none group-hover:animate-bounce">
                            Concursos
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-color-3 w-full h-full flex flex-col items-center justify-center overflow-auto">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.active-link {
    filter: brightness(1.25);
    transition: all 0.5s ease-in-out;
}
</style>
