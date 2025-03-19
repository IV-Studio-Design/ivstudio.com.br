<script setup lang="ts">
    import ArrowForward from '@/components/Icons/arrow-forward.vue';
    import Github from '@/components/Icons/github.vue';
    import Behance from '@/components/Icons/behance.vue';
    import Instagram from '@/components/Icons/instagram.vue';
    import Pinterest from '@/components/Icons/pinterest.vue';
    import ToolsSlider from './ToolsSlider.vue';
</script>

<template>
    <section class="w-full bg-black">
        <div class="w-full h-full flex gap-7 flex-col justify-center items-center px-4 pt-36 pb-5">
            <h1 class="font-poppins text-white font-semibold text-[28px] sm:text-4xl leading-8 sm:leading-9 text-center">
                Sites que Convertem <br>
                e Impulsionam Seu <br>
                Négocio <br>
            </h1>

            <p class="w-full max-w-[488px] font-poppins font-light text-white leading-5 text-center text-sm">
                Criamos sites que fazem seu negócio vender mais.
                Do design á estrategia, tudo é pensado para
                atrair clientes e gerar conversões. Simples, bonito e
                eficiente - extamente como seu site deve ser.
            </p>

            <a class="flex gap-3 items-center bg-gradient-to-r from-neutral-300 from-75% to-neutral-500 px-5 py-1 rounded-xl font-poppins font-semibold whitespace-nowrap shadow-button">
                Solicitar Orçamento
                <ArrowForward width="24" height="24" stroke="#000" />
            </a>

            <div class="flex gap-2 items-center">
                <a><Github width="30" height="30" fill="#fff" /></a>
                <a><Behance width="30" height="30" fill="#fff" /></a>
                <a><Instagram width="30" height="30" fill="#fff" /></a>
                <a><Pinterest width="30" height="30" fill="#fff" /></a>
            </div>
        </div>

       <div class="space-y-5 bg-neutral-900/50 py-5 mt-12">
            <ToolsSlider>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/html.png" />
                        <span class="font-poppins font-light text-white text-sm">HTML 5</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/css.png" />
                        <span class="font-poppins font-light text-white text-sm">CSS</span>
                    </div>  
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/nitro.png" />
                        <span class="font-poppins font-light text-white text-sm">Nitro</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/js.png" />
                        <span class="font-poppins font-light text-white text-sm">Javascript</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/mysql.png" />
                        <span class="font-poppins font-light text-white text-sm">MySQL</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/nuxt.png" />
                        <span class="font-poppins font-light text-white text-sm">Nuxt.js</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/php.png" />
                        <span class="font-poppins font-light text-white text-sm">PHP</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/tailwind.png" />
                        <span class="font-poppins font-light text-white text-sm">Tailwind CSS</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/vue.png" />
                        <span class="font-poppins font-light text-white text-sm">Vue.js</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/prisma.svg" />
                        <span class="font-poppins font-light text-white text-sm">Prisma</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-2" src="@/assets/images/slide-icons/mongodb.png" />
                        <span class="font-poppins font-light text-white text-sm">MongoDB</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/postgresql.png" />
                        <span class="font-poppins font-light text-white text-sm">PostgreSQl</span>
                    </div>
                </li>
            </ToolsSlider>
            <ToolsSlider>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/coreldraw.png" />
                        <span class="font-poppins font-light text-white text-sm">Coreldraw</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/inkscape.png" />
                        <span class="font-poppins font-light text-white text-sm">Inkscape</span>
                    </div>
                </li>
                <li class="splide__slide">
                    <div class="w-fit flex gap-2 items-center bg-[#1e1e1e] px-4 py-1.5 rounded-xl">
                        <img class="w-5" src="@/assets/images/slide-icons/photoshop.png" />
                        <span class="font-poppins font-light text-white text-sm">Photoshop</span>
                    </div>
                </li>
            </ToolsSlider>
       </div>
    </section>
</template>