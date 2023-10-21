<template>
	<section id="contato" class="w-full h-full bg-black py-5">
		<div class="w-full h-full py-20 flex justify-center items-center px-5">
			<div class="w-full max-w-[55rem] py-10 flex flex-wrap md:flex-nowrap gap-x-16 gap-y-8 justify-center items-center bg-[#101010] rounded-[60px]">
				<div class="w-64 sm:w-72 h-44 sm:h-80 contact-banner-image bg-cover bg-center rounded-3xl">
					<!-- image in background-image css -->
				</div>
				<div>
					<div class="text-center md:text-left px-8 sm:px-0">
						<h1 class="text-white font-montserrat font-bold text-3xl sm:text-5xl leading-8 whitespace-nowrap">Precisa de <br> um projeto?</h1>
						<p class="sm:w-96 text-white font-montserrat text-base sm:text-xl leading-5 mt-4 mb-5">
							Entre em contato com a nossa equipe
							e faça o seu orçamento! Teremos o prazer
							em participar desse projeto!
						</p>
						<div class="flex justify-center md:justify-start items-center">
							<a href="https://wa.me/message/LKGVV4OYMYBYO1" target="_blank" class="block font-black text-base sm:text-lg font-montserrat font-bold bg-[#00ff7b] rounded-3xl px-8 py-2.5 whitespace-nowrap">Quero um orçamento</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.contact-banner-image {
		background-image: url('../assets/images/contact_banner.png');
	}
</style>