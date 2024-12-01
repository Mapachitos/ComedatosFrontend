<template>
      <div class="w-full flex-col space-y-2">
                <h2 class="text-lg font-semibold text-gray-700">Documentos Relacionados con la Etapa:</h2>
                <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">

                    <div
                        class="h-40 min-h-40 aspect-square rounded-lg bg-color-3 flex flex-col items-center justify-center relative pt-4">
                        <h1 class="text-white text-xs absolute inset-x-0 top-0 translate-y-4 text-center">
                            Selecciona 1 o Varios Documentos</h1>
                        <input id="dropzone-file" multiple type="file"
                            class="w-full h-full opacity-0 cursor-pointer absolute inset-0 z-10" accept=".pdf"
                            @change="handleFileSelect" />
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                            <i class="pi pi-upload" style="font-size: 2rem"></i>
                        </div>
                    </div>

                    <div
                        class="h-40 min-h-40 w-full bg-gray-100 rounded-lg overflow-x-auto overflow-y-hidden flex p-3 space-x-3">
                        <div class="h-full w-fit flex items-start flex-row space-x-3">
                            <div v-for="(file, index) in fileLinks" :key="file.name"
                                class="relative group h-full flex items-center space-x-2 bg-white rounded-md shadow-md hover:scale-105 transition-all duration-300 transform p-2">
                                <div class="flex flex-col items-center space-y-2">
                                    <p class="text-black text-sm font-semibold truncate w-32 text-center">{{ file.name
                                        }}
                                    </p>
                                    <i class="pi pi-file-pdf text-color-3" style="font-size: 3.5rem"></i>
                                </div>
                                <button @click="removeFile(index)"
                                    class="pi pi-times text-white absolute top-0 right-0 -translate-x-1 translate-y-1 z-10 rounded-md bg-red-500 shadow-sm shadow-black size-6 hover:bg-red-600 active:bg-red-700 p-1">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fileLinks = ref<File[]>([]);

function handleFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
        for (const file of target.files) {
            fileLinks.value.push(file);
        }
    }
}

function removeFile(index: number) {
    fileLinks.value.splice(index, 1);
}
</script>