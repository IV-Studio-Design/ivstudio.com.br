<script setup lang="ts">
    import Splide from '@splidejs/splide'
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
    import { onMounted, ref } from 'vue';

    const splide = ref('splide');

	onMounted(() => {
        const slider =  new Splide(splide.value, {
            type: 'loop',
            perPage: 6,
            perMove: 1,
            arrows: false,
            pagination: false,
            fixedWidth: 'fit',
            gap: 10,
        })
        slider.mount()
    }) 
</script>

<template>
    <div class="w-full">
        <div ref="splide" class="splide w-full">
            <div class="splide__track">
                <ul class="splide__list">
                   <slot />
                </ul>
            </div>
        </div>
    </div>
</template>