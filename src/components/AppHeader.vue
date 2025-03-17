<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import ArrowForward from './Icons/arrow-forward.vue';
</script>

<template>
    <header class="w-full p-10 md:p-5 bg-black border-0 md:border-b border-neutral-900/50">
        <div class="w-full max-w-4xl h-full mx-auto flex justify-between items-center">
            <div>
                <img class="w-16 md:hidden" src="@/assets/images/iv-icon.png" />
                <img class="w-36 hidden md:block" src="@/assets/images/ivstudio-logo.png" />
            </div>
            <nav class="flex gap-7 items-center">
                <ul class="hidden md:flex gap-7 items-center">
                    <li>
                        <RouterLink to="/"
                            class="text-white font-poppins font-light"
                        >
                            Inicío
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/"
                            class="text-white font-poppins font-light"
                        >
                            Sobre
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/"
                            class="text-white font-poppins font-light"
                        >
                            Portfólio
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/"
                            class="text-white font-poppins font-light"
                        >
                            Contato
                        </RouterLink>
                    </li>
                </ul>
                <a class="hidden md:flex gap-2 items-center font-poppins font-medium bg-gradient-to-r from-neutral-300 from-75% to-neutral-500 px-3 py-1 rounded-xl">
                    Solicitar Orçamento
                    <ArrowForward width="24" height="24" stroke="#000" />
                </a>

                <button class="flex md:hidden gap-1.5 flex-col justify-center mt-2">
                    <div class="w-12 h-1.5 bg-white rounded-lg"></div>
                    <div class="w-12 h-1.5 bg-white rounded-lg"></div>
                    <div class="w-12 h-1.5 bg-white rounded-lg"></div>
                </button>
            </nav>
        </div>
    </header>
</template>