<template>
	<header>
		<div :class="headerStyle">
			<div>
				<a class="hidden sm:block" href="https://ivstudio.com.br"><img id="logo" :class="logoStyle" src="../assets/images/ivstudio-logo.png"></a>
				<a class="sm:hidden" href="https://ivstudio.com.br"><img class="w-16" src="../assets/images/iv-icon.png"></a>
			</div>
			<div>
				<nav class="hidden md:block">
					<ul class="flex space-x-7">
						<li><a id="home-link" :class="navItem" href="#">Home</a></li>
						<li><a id="sobre-link" :class="navItem" href="#sobre">Sobre</a></li>
						<li><a id="projetos-link" :class="navItem" href="#projetos">Projetos</a></li>
						<li><a id="contato-link" :class="navItem" href="#contato">Contato</a></li>
					</ul>
				</nav>
				<div class="md:hidden">
					<button id="open-drawer-btn" class="space-y-1.5 mt-2">
						<div class="w-8 h-1 bg-white rounded"></div>
						<div class="w-8 h-1 bg-white rounded"></div>
						<div class="w-8 h-1 bg-white rounded"></div>
					</button>
				</div>
			</div>

			<SideMenu />
		</div>
	</header>
</template>

<script setup>
	import {ref, onMounted, onBeforeUnmount} from 'vue'
	import SideMenu from './SideMenu.vue'

	const headerStyle = ref("desactived-header")
	const logoStyle = ref("logo-off")
	const navItem = ref("nav-item-off")

	const configHeader = event => {
		if(!window.scrollY){
			headerStyle.value = "desactived-header"
			logoStyle.value = "logo-off"
			navItem.value = "nav-item-off"
		}else{
			headerStyle.value = "actived-header"
			logoStyle.value = "logo-on"
			navItem.value = "nav-item-on"
		}
	}

	onMounted(() => {
		window.addEventListener('scroll', configHeader)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', configHeader)
	})

</script>

<style scoped>
	.actived-header {
		@apply fixed top-0 left-0 z-20 w-full bg-black flex md:gap-28 lg:gap-x-36 justify-between md:justify-center items-center py-5 px-16 shadow-header transition-all
	}

	.desactived-header {
		@apply fixed top-0 left-0 z-20 w-full flex md:gap-28 lg:gap-x-36 justify-between md:justify-center items-center pt-16 px-16 transition-all
	}

	.logo-on {
		@apply min-w-[13rem] w-56 lg:w-48 transition-all
	}

	.logo-off {
		@apply min-w-[13rem] w-56 lg:w-64 transition-all
	}

	.nav-item-on {
		@apply text-white relative font-montserrat font-bold text-2xl lg:text-2xl transition-all
	}

	.nav-item-off {
		@apply text-white relative font-montserrat font-bold text-2xl lg:text-3xl transition-all
	}
</style>