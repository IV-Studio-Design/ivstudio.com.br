<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import ArrowForward from './Icons/arrow-forward.vue';
    import SideMenu from './SideMenu.vue';
    import { ref, useTemplateRef } from 'vue';

    const showSideMenu = ref<boolean>(false);
    const headerDiv = useTemplateRef('header-div');

    window.onscroll = () => {
        if(innerWidth > 768) return
        const addPadding = scrollY < 5 ? 'py-10' : 'py-5'
        const removePadding = scrollY > 5 ? 'py-10' : 'py-5'
        headerDiv.value?.classList.add(addPadding)
        headerDiv.value?.classList.remove(removePadding)
    }

    window.onresize = () => {
        if(showSideMenu.value) showSideMenu.value = false
    }
</script>

<template>
   <div class="w-full fixed top-0 left-0 z-50">
        <header class="w-full bg-black border-0 md:border-b border-neutral-900/50 ">
            <div ref="header-div" class="w-full max-w-4xl h-full mx-auto px-10 py-10 md:px-5 md:py-5 flex justify-between items-center transition-all">
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

                    <button @click="showSideMenu = !showSideMenu" class="flex md:hidden gap-1.5 flex-col justify-center mt-2 cursor-pointer">
                        <div :class="showSideMenu ? 'burger-bar burger-bar-x' : 'burger-bar'"></div>
                        <div :class="showSideMenu ? 'burger-bar burger-bar-x' : 'burger-bar'"></div>
                        <div :class="showSideMenu ? 'burger-bar burger-bar-x' : 'burger-bar'"></div>
                    </button>
                </nav>
            </div>
        </header>

        <Transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div v-show="showSideMenu" class="w-full h-screen bg-black/50">
                <Transition
                    enter-active-class="animate__animated animate__slideInRight"
                    leave-active-class="animate__animated animate__slideOutRight"
                >
                    <SideMenu
                        @close="showSideMenu = false"
                        v-show="showSideMenu"
                    />
                </Transition>
            </div>
        </Transition>
   </div>
</template>

<style scoped>
    .burger-bar {
        width: 3rem;
        height: 0.375rem;
        background-color: #fff;
        border-radius: 0.5rem;
        transition: .5s all;
    }
    .burger-bar-x:nth-child(1) {
        transform: rotateZ(45deg) translateX(9px) translateY(9px);
    }
    .burger-bar-x:nth-child(2) {
        opacity: 0;
    }
    .burger-bar-x:nth-child(3) {
        transform: rotateZ(-45deg) translateX(8px) translateY(-8px);
    }
</style>