<template>
	<header>
		<div :class="header_style">
			<div>
				<a class="hidden sm:block" href="https://ivstudio.com.br"><img id="logo" :class="logo_style" src="../assets/images/ivstudio-logo.png"></a>
				<a class="sm:hidden" href="https://ivstudio.com.br"><img class="w-16" src="../assets/images/iv-icon.png"></a>
			</div>
			<div>
				<nav class="hidden md:block">
					<ul class="flex space-x-7">
						<li><a id="home-link" :class="nav_item" href="#">Home</a></li>
						<li><a id="sobre-link" :class="nav_item" href="#sobre">Sobre</a></li>
						<li><a id="projetos-link" :class="nav_item" href="#projetos">Projetos</a></li>
						<li><a id="contato-link" :class="nav_item" href="#contato">Contato</a></li>
					</ul>
				</nav>
				<div @click="drawerIsOpen = true" class="md:hidden">
					<button id="open-drawer-btn" class="space-y-1.5 mt-2">
						<div class="w-8 h-1 bg-white rounded"></div>
						<div class="w-8 h-1 bg-white rounded"></div>
						<div class="w-8 h-1 bg-white rounded"></div>
					</button>
				</div>
			</div>

			<Transition
				enter-active-class="animate__animated animate__slideInRight"
				leave-active-class="animate__animated animate__slideOutRight"
			>
				<SideMenu 
					v-show="drawerIsOpen"
					@close="drawerIsOpen = false"
				/>
			</Transition>
		</div>
	</header>
</template>

<script setup>
	import {ref, onMounted, onBeforeUnmount} from 'vue'
	import SideMenu from './SideMenu.vue'

	const drawerIsOpen = ref(false)
	const header_style = ref("header desactived")
	const logo_style = ref("logo size-off")
	const nav_item = ref("nav-item item-off")

	function configHeader(){
		header_style.value = window.scrollY ? "header actived" : "header desactived"
		logo_style.value = window.scrollY ? "logo size-on" : "logo size-off"
		nav_item.value = window.scrollY ? "nav-item" : "nav-item item-off"
	}

	onMounted(() => {
		window.addEventListener('scroll', configHeader)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', configHeader)
	})

</script>

<style scoped>
	.header {
		@apply fixed top-0 left-0 z-20 w-full flex justify-between md:justify-center items-center px-16 transition-all
	}

	.actived {
		@apply bg-black md:gap-28 lg:gap-x-36 py-5 shadow-header
	}

	.desactived {
		@apply md:gap-28 lg:gap-x-36 pt-16
	}

	.logo {
		@apply min-w-[13rem] w-56 transition-all
	}

	.size-on {
		@apply lg:w-48
	}

	.size-off {
		@apply lg:w-64
	}

	.nav-item {
		@apply text-white relative font-montserrat font-bold text-2xl transition-all
	}

	.item-off {
		@apply lg:text-3xl
	}
</style>