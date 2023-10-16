<template>
	<AppHeader />
	<HomeSection />
	<AboutSection />
	<ProjectsSection />

	<!-- Partners -->
	<div class="flex gap-x-16 gap-y-5 flex-wrap justify-center items-center bg-neutral-950 p-7">
		<img class="w-20 sm:w-24 h-full" src="../assets/images/partners/geek_planet_logo.png" alt="Geek Planet">
		<img class="w-44 sm:w-48 h-full" src="../assets/images/partners/thales_developer_logo.png" alt="Thales Web Developer">
		<img class="w-28 sm:w-32 h-full" src="../assets/images/partners/vex_logo.png" alt="Vex">
		<img class="w-40 sm:w-44 h-full" src="../assets/images/partners/sidirlan_logo.png" alt="Sidirlan">
		<img class="w-44 sm:w-48 h-full" src="../assets/images/partners/jeivisselly_logo.png" alt="Jeivisselly">
		<img class="w-16 sm:w-20 h-full" src="../assets/images/partners/damaris_toledo_logo.png" alt="Damris Toledo">
	</div>
	<!-- ====== -->

	<ContactSection />

</template>

<script setup>
	import AppHeader from '@/components/AppHeader.vue'
	import HomeSection from '@/components/HomeSection.vue'
	import AboutSection from '@/components/AboutSection.vue'
	import ProjectsSection from '@/components/ProjectsSection.vue'
	import ContactSection from '@/components/ContactSection.vue'
</script>