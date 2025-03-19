<script setup lang="ts">
    import ArrowForward from './Icons/arrow-forward.vue';
</script>

<template>
    <div class="w-full max-w-96 h-full bg-black ml-auto">
        <nav class="flex gap-5 flex-col justify-start items-center">
            <ul class="space-y-5">
                <li class="text-center">
                    <RouterLink to="/" @click="$emit('close')" class="text-xl text-white font-poppins font-light">
                        Inicío
                    </RouterLink>
                </li>
                <li class="text-center">
                    <RouterLink to="/" @click="$emit('close')" class="text-xl text-white font-poppins font-light">
                        Sobre
                    </RouterLink>
                </li>
                <li class="text-center">
                    <RouterLink to="/" @click="$emit('close')" class="text-xl text-white font-poppins font-light">
                        Portfólio
                    </RouterLink>
                </li>
                <li class="text-center">
                    <RouterLink to="/" @click="$emit('close')" class="text-xl text-white font-poppins font-light">
                        Contato
                    </RouterLink>
                </li>
            </ul>
            <a
                class="flex gap-2 items-center font-poppins font-medium bg-gradient-to-r from-neutral-300 from-75% to-neutral-500 px-3 py-1 rounded-xl">
                Solicitar Orçamento
                <ArrowForward width="24" height="24" stroke="#000" />
            </a>
        </nav>
    </div>
</template>