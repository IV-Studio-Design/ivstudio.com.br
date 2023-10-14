<template>
	<header>
		<div class="fixed top-0 left-0 z-20 w-full flex md:gap-28 lg:gap-x-36 justify-between md:justify-center items-center pt-16 px-16 transition-all">
			<div>
				<a class="hidden sm:block" href="https://ivstudio.com.br"><img id="logo" class="min-w-[13rem] w-56 lg:w-64" src="../assets/images/ivstudio-logo.png"></a>
				<a class="sm:hidden" href="https://ivstudio.com.br"><img class="w-16" src="../assets/images/iv-icon.png"></a>
			</div>
			<div>
				<nav class="hidden md:block">
					<ul class="flex space-x-7">
						<li><a id="home-link" class="text-white relative link-selected font-montserrat font-bold text-2xl lg:text-3xl" href="#">Home</a></li>
						<li><a id="sobre-link" class="text-white relative font-montserrat font-bold text-2xl lg:text-3xl" href="#sobre">Sobre</a></li>
						<li><a id="projetos-link" class="text-white relative font-montserrat font-bold text-2xl lg:text-3xl" href="#projetos">Projetos</a></li>
						<li><a id="contato-link" class="text-white relative font-montserrat font-bold text-2xl lg:text-3xl" href="#contato">Contato</a></li>
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
		</div>
	</header>
</template>