<template>
	<div class="flex flex-col justify-center gap-y-16 sm:gap-0 sm:justify-start items-center w-full h-screen bg-neutral-900 bg-blurry-eye-iv bg-cover bg-center">
		<div class="flex flex-col justify-center items-center gap-y-10 w-full sm:h-full">
			<div>
				<img class="w-24" src="../assets/images/iv-icon.png">
			</div>
			<div>
				<nav>
					<ul class="space-y-3">
						<li>
							<a href="https://ivstudio.com.br" class="w-72 sm:w-80 text-black text-xl sm:text-2xl font-bold px-2 py-3 rounded-[2rem] bg-white flex justify-around items-center hover:bg-neutral-300 transition">
								<span></span>
								<div class="flex justify-center items-center gap-x-5">
									<img class="w-5 sm:w-6" src="../assets/images/web-icon.png">
									Nosso site
								</div>
								<img class="w-7 sm:w-8" src="../assets/images/arrow-right.png">
							</a>
						</li>
						<li>
							<a href="https://wa.me/message/LKGVV4OYMYBYO1" target="_blank" class="w-72 sm:w-80 text-black text-xl sm:text-2xl font-bold px-2 py-3 rounded-[2rem] bg-white flex justify-around items-center hover:bg-neutral-300 transition">
								<span></span>
								<div class="flex justify-center items-center gap-x-5">
									<img class="w-5 sm:w-6" src="../assets/images/whatsapp-icon.png">
									Whatsapp
								</div>
								<img class="w-7 sm:w-8" src="../assets/images/arrow-right.png">
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/ivstudio.design/" target="_blank" class="w-72 sm:w-80 text-black text-xl sm:text-2xl font-bold px-2 py-3 rounded-[2rem] bg-white flex justify-around items-center hover:bg-neutral-300 transition">
								<span></span>
								<div class="flex justify-center items-center gap-x-5">
									<img class="w-5 sm:w-6" src="../assets/images/instagram-icon.png">
									Instagram
								</div>
								<img class="w-7 sm:w-8" src="../assets/images/arrow-right.png">
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="flex flex-col items-center gap-y-5">
				<nav>
					<ul class="flex space-x-5">
						<li>
							<a href="https://www.instagram.com/ivstudio.design/" target="_blank" class="w-10 h-10 flex justify-center items-center bg-white rounded-full hover:bg-neutral-300 transition">
								<img class="w-6" src="../assets/images/instagram-icon.png">
							</a>
						</li>
						<li>
							<a href="https://wa.me/message/LKGVV4OYMYBYO1" target="_blank" class="w-10 h-10 flex justify-center items-center bg-white rounded-full hover:bg-neutral-300 transition">
								<img class="w-6" src="../assets/images/whatsapp-icon.png">
							</a>
						</li>
						<li>
							<a href="https://www.behance.net/ivstudiodesign/projects" target="_blank" class="w-10 h-10 flex justify-center items-center bg-white rounded-full hover:bg-neutral-300 transition">
								<img class="w-6" src="../assets/images/behance-icon.png">
							</a>
						</li>
					</ul>
				</nav>
				<div>
					<a href="mailto:contato@ivstudio.com.br" class="text-white text-xs hover:underline">contato@ivstudio.com.br</a>
				</div>
			</div>
		</div>
		<footer class="w-full">
			<div class="w-full flex flex-col gap-y-5 sm:hidden">
				<div class="w-full">
					<p class="text-white text-center text-xs">&copy 2023 IV Studio. Todos os direitos reservados.</p>
					<p class="text-white text-center text-xs">Desenvolvido por Thales Web Developer.</p>
				</div>
				<div class="w-full flex justify-center items-center gap-x-4">
					<div>
						<a href="https://ivstudio.com.br"><img class="w-28" src="../assets/images/ivstudio-logo.png"></a>
					</div>
					<div class="w-px h-8 bg-white"></div>
					<div>
						<a href="https://thalesdeveloper.com.br" target="_blank"><img class="w-28" src="../assets/images/thalesdeveloper-logo.png"></a>
					</div>
				</div>
			</div>

			<div class="w-full hidden sm:flex justify-between items-center px-28 py-5 sm:bg-black">
				<div>
					<a href="https://ivstudio.com.br"><img class="w-40" src="../assets/images/ivstudio-logo.png"></a>
				</div>
				<div>
					<p class="text-white text-center text-sm">&copy 2023 IV Studio. Todos os direitos reservados.</p>
					<p class="text-white text-center text-sm">Desenvolvido por Thales Web Developer.</p>
				</div>
				<div>
					<a href="https://thalesdeveloper.com.br" target="_blank"><img class="w-40" src="../assets/images/thalesdeveloper-logo.png"></a>
				</div>
			</div>
		</footer>
	</div>
</template>