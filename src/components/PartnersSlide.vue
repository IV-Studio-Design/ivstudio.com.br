<template>
	<div class="splide" role="group" aria-label="Splide Basic HTML Example">
		<div class="splide__track py-5">
			<ul class="splide__list flex items-center">
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-20" src="../assets/images/partners/geek_planet_logo.png" alt="Geek Planet">
					</div>
				</li>
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-44" src="../assets/images/partners/thales_developer_logo.png" alt="Thales Web Developer">
					</div>	
				</li>
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-28" src="../assets/images/partners/vex_logo.png	" alt="Vex">
					</div>
				</li>
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-36" src="../assets/images/partners/sidirlan_logo.png" alt="Sidirlan">
					</div>
				</li>
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-44" src="../assets/images/partners/jeivisselly_logo.png" alt="Jeivisselly">
					</div>
				</li>
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-20" src="../assets/images/partners/damaris_toledo_logo.png" alt="Damris Toledo">
					</div>
				</li>
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-44" src="../assets/images/ivstudio-logo.png" alt="IV Studio">
					</div>
				</li>
				<li class="splide__slide">
					<div class="w-full flex justify-center">
						<img class="w-20" src="../assets/images/partners/lins_fitness.png" alt="Lins Fitness">
					</div>
				</li>
			</ul>
	 	</div>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import Splide from '@splidejs/splide'
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	onMounted(() => {
		new Splide('.splide', {
			type: 'loop',
			perPage: 9,
			arrows: false,
			drag: false,
			pagination: false,
			fixedWidth: '12rem',
			autoScroll: {
				speed: 3
			}
		}).mount({ AutoScroll })		
	})
</script>