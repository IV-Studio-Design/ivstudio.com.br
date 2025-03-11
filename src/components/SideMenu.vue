<template>
	<div class="fixed top-0 left-0 w-full h-full flex justify-end">
		<div class="w-80 h-screen bg-black p-5">
			<div class="w-full py-2 flex justify-end">
				<button @click="$emit('close')" class="text-white text-4xl font-bold font-montserrat">X</button>
			</div>
			<nav>
				<ul class="space-y-5 text-right mt-5">
					<li><a @click="$emit('close')" id="home-link" class="text-white relative font-montserrat font-bold text-2xl transition-all" href="#">Home</a></li>
					<li><a @click="$emit('close')" id="sobre-link" class="text-white relative font-montserrat font-bold text-2xl transition-all" href="#sobre">Sobre</a></li>
					<li><a @click="$emit('close')" id="projetos-link" class="text-white relative font-montserrat font-bold text-2xl transition-all" href="#projetos">Projetos</a></li>
					<li><a @click="$emit('close')" id="contato-link" class="text-white relative font-montserrat font-bold text-2xl transition-all" href="#contato">Contato</a></li>
				</ul>
			</nav>
		</div>
	</div>
</template>