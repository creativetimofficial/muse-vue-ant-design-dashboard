<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Card</h1>
					<p class="text-dark">
						Simple rectangular container.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Widget-Card">
					<a-divider orientation="left">Widget Card</a-divider>
					<div class="showcase pb-0">
						<a-row :gutter="24">
							<a-col :span="24" :lg="12" class="mb-24">
								<!-- Widget 1 Card -->
								<a-card :bordered="false" class="widget-1">
									<a-statistic
										title="Today’s Sales"
										:value="53000"
										:precision="0"
										class="text-success"
									>
										<template #prefix>$</template>
										<template #suffix>+30%</template>
									</a-statistic>
									<div class="icon">
										<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
											<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
										</svg>
									</div>
								</a-card>
								<!-- / Widget 1 Card -->
							</a-col>
							<a-col :span="24" :lg="12" class="mb-24">
								<!-- Widget 1 Card -->
								<a-card :bordered="false" class="widget-1">
									<a-statistic
										title="Today’s Users"
										:value="3200"
										:precision="0"
										class="text-success"
									>
										<template #suffix>+20%</template>
									</a-statistic>
									<div class="icon">
										<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="#111827"/>
											<path d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z" fill="#111827"/>
											<path d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z" fill="#111827"/>
											<path d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z" fill="#111827"/>
										</svg>
									</div>
								</a-card>
								<!-- / Widget 1 Card -->
							</a-col>
						</a-row>
					</div>
					<muse-snippet :code="widgetCode"></muse-snippet>
				</section>
				<section class="mb-24" id="Information-Card">
					<a-divider orientation="left">Information Card</a-divider>
					<div class="showcase pb-0">

						<!-- Information Card 1 -->
						<a-card :bordered="false" class="card-info mb-24">
							<a-row type="flex">
								<a-col class="col-content" :span="24" :xl="12">
									<div class="card-content">
										<h6>Built by developers</h6>
										<h5>Muse Dashboard for Ant Design</h5>
										<p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
									</div>
									<div class="card-footer">
										<a href="#" size="small">
											<span>Read More</span>
											<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#111827"/>
											</svg>
										</a>
									</div>
								</a-col>
								<a-col class="col-img" :span="24" :xl="12">
									<div class="card-img-bg">
										<img src="~@/assets/info-card-1.jpg" alt="">
									</div>
								</a-col>
							</a-row>
						</a-card>
						<!-- / Information Card 1 -->

						<!-- Information Card 2 -->
						<a-card :bordered="false" class="card-info-2 mb-24 h-full">
							<div class="col-content h-full" style="background-image: url('/images/info-card-2.jpg')">
								<div class="card-content">
									<h5>Work with the best </h5>
									<p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
								</div>
								<div class="card-footer">
									<a href="#" size="small">
										<span>Read More</span>
										<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#111827"/>
										</svg>
									</a>
								</div>
							</div>
						</a-card>
						<!-- / Information Card 2 -->

					</div>
					<muse-snippet :code="informationCode"></muse-snippet>
				</section>
				<section class="mb-24" id="Project-Card">
					<a-divider orientation="left">Project Card</a-divider>
					<div class="showcase">

						<a-row type="flex" :gutter="[24,24]" align="stretch">

							<!-- Project Column -->
							<a-col :span="24" :md="12">

								<!-- Project Card -->
								<a-card class="card-project">
									<img
									slot="cover"
									alt="example"
									src="/images/home-decor-3.jpeg"
									/>
									<div class="card-tag">Project #1</div>
									<h5>Modern</h5>
									<p>
										As Uber works through a huge amount of internal management turmoil.
									</p>
									<a-row type="flex" :gutter="6" class="card-footer" align="middle">
										<a-col :span="12">
											<a-button size="small">VIEW PROJECT</a-button>
										</a-col>
										<a-col :span="12" class="text-right">
											<a-space :size="-12" class="avatar-chips">
												<a-avatar  size="small" src="/images/face-1.jpg" />
												<a-avatar  size="small" src="/images/face-4.jpg" />
												<a-avatar  size="small" src="/images/face-2.jpg" />
												<a-avatar  size="small" src="/images/face-3.jpg" />
											</a-space>
										</a-col>
									</a-row>
								</a-card>
								<!-- / Project Card -->

							</a-col>
							<!-- / Project Column -->

							<!-- Project Column -->
							<a-col :span="24" :md="12">

								<!-- Project Card -->
								<a-card class="card-project">
									<img
									slot="cover"
									alt="example"
									src="/images/home-decor-2.jpeg"
									/>
									<div class="card-tag">Project #2</div>
									<h5>Scandinavian</h5>
									<p>
										Music is something that every person has his or her own specific opinion about.
									</p>
									<a-row type="flex" :gutter="6" class="card-footer" align="middle">
										<a-col :span="12">
											<a-button size="small">VIEW PROJECT</a-button>
										</a-col>
										<a-col :span="12" class="text-right">
											<a-space :size="-12" class="avatar-chips">
												<a-avatar  size="small" src="/images/face-1.jpg" />
												<a-avatar  size="small" src="/images/face-4.jpg" />
												<a-avatar  size="small" src="/images/face-2.jpg" />
												<a-avatar  size="small" src="/images/face-3.jpg" />
											</a-space>
										</a-col>
									</a-row>
								</a-card>
								<!-- Project Card -->

							</a-col>
							<!-- / Project Column -->

						</a-row>

					</div>
					<muse-snippet :code="projectCode"></muse-snippet>
				</section>
				<section class="mb-24" id="Widget-Card-2">
					<a-divider orientation="left">Widget Card 2</a-divider>
					<div class="showcase pb-0">
						<a-row :gutter="24">
							<a-col :span="12" :lg="8" :xl="6" class="mb-24">

								<!-- Salary Card -->
								<a-card :bordered="false" class="widget-2 h-full">
									<a-statistic :value="2000" prefix="+$">
										<template #title>
											<div class="icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
													<g id="bank" transform="translate(0.75 0.75)">
														<path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
														<path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
														<path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
													</g>
												</svg>
											</div>
											<h6>Salary</h6>
											<p>Belong Interactive</p>
										</template>
									</a-statistic>
								</a-card>
								<!-- / Salary Card -->

							</a-col>
							<a-col :span="12" :lg="8" :xl="6" class="mb-24">

								<!-- Paypal Card -->
								<a-card :bordered="false" class="widget-2 h-full">
									<a-statistic :value="49000" prefix="+$">
										<template #title>
											<div class="icon">
												<img src="/images/logos/paypal-logo-2.png" alt="">
											</div>
											<h6>Paypal</h6>
											<p>Freelance Payment</p>
										</template>
									</a-statistic>
								</a-card>
								<!-- Paypal Card -->

							</a-col>
						</a-row>
					</div>
					<muse-snippet :code="widget2Code"></muse-snippet>
				</section>
				<section class="mb-24" id="Credit-Card">
					<a-divider orientation="left">Credit Card</a-divider>
					<div class="showcase">

						<a-row>
						  <a-col :span="24" :lg="12">
								<!-- Master Card -->
								<a-card class="card-credit header-solid h-full">
									<template #title>
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22.5 20.625">
											<g id="wifi" transform="translate(0.75 0.75)">
												<circle id="Oval" cx="1.5" cy="1.5" r="1.5" transform="translate(9 16.875)" fill="#fff"/>
												<path id="Path" d="M0,1.36a6.377,6.377,0,0,1,7.5,0" transform="translate(6.75 11.86)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path-2" data-name="Path" d="M14.138,2.216A12.381,12.381,0,0,0,0,2.216" transform="translate(3.431 6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path-3" data-name="Path" d="M0,3.294a18.384,18.384,0,0,1,21,0" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
											</g>
										</svg>
									</template>
									<h5 class="card-number">4562 1122 4594 7852</h5>
									
									<div class="card-footer">
										<div class="mr-30">
											<p>Card Holder</p>
											<h6>Jack Peterson</h6>
										</div>
										<div class="mr-30">
											<p>Expires</p>
											<h6>11/22</h6>
										</div>
										<div class="card-footer-col col-logo ml-auto">
											<img src="/images/logos/mastercard-logo.png">
										</div>
									</div>
								</a-card>
								<!-- / Master Card -->
							</a-col>
						</a-row>

					</div>
					<muse-snippet :code="creditCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Card? Please check the
					<a target="_blank" href="https://antdv.com/components/card/">official docs</a>.
				</p>
			</div>
			<muse-anchor :anchors="anchors"></muse-anchor>
		</div>
	</div>
  
</template>

<script>

export default {
	head () {
		return {
			title: 'Card | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Simple rectangular container.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Widget-Card": "Widget Card",
				"Information-Card": "Information Card",
				"Project-Card": "Project Card",
				"Widget-Card-2": "Widget Card 2",
				"Credit-Card": "Credit Card",
			},
			widgetCode: `
<template>
	<a-card :bordered="false" class="widget-1">
		<a-statistic
			title="Today’s Sales"
			:value="53000"
			:precision="0"
			class="text-success"
		>
			<template #prefix>$</template>
			<template #suffix>+30%</template>
		</a-statistic>
		<div class="icon">
			<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
				<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
			</svg>
		</div>
	</a-card>
</template>`,
			informationCode: `
<template>
	<!-- Information Card 1 -->
	<a-card :bordered="false" class="card-info mb-24">
		<a-row type="flex">
			<a-col class="col-content" :span="24" :xl="12">
				<div class="card-content">
					<h6>Built by developers</h6>
					<h5>Muse Dashboard for Ant Design</h5>
					<p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
				</div>
				<div class="card-footer">
					<a href="#" size="small">
						<span>Read More</span>
						<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#111827"/>
						</svg>
					</a>
				</div>
			</a-col>
			<a-col class="col-img" :span="24" :xl="12">
				<div class="card-img-bg">
					<img src="~@/assets/info-card-1.jpg" alt="">
				</div>
			</a-col>
		</a-row>
	</a-card>
	<!-- / Information Card 1 -->

	<!-- Information Card 2 -->
	<a-card :bordered="false" class="card-info-2 mb-24 h-full">
		<div class="col-content h-full" style="background-image: url('/images/info-card-2.jpg')">
			<div class="card-content">
				<h5>Work with the best </h5>
				<p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
			</div>
			<div class="card-footer">
				<a href="#" size="small">
					<span>Read More</span>
					<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#111827"/>
					</svg>
				</a>
			</div>
		</div>
	</a-card>
	<!-- / Information Card 2 -->
</template>`,
			projectCode: `
<template>
	<a-row type="flex" :gutter="[24,24]" align="stretch">

		<!-- Project Column -->
		<a-col :span="24" :md="12">

			<!-- Project Card -->
			<a-card class="card-project">
				<img
				slot="cover"
				alt="example"
				src="/images/home-decor-3.jpeg"
				/>
				<div class="card-tag">Project #1</div>
				<h5>Modern</h5>
				<p>
					As Uber works through a huge amount of internal management turmoil.
				</p>
				<a-row type="flex" :gutter="6" class="card-footer" align="middle">
					<a-col :span="12">
						<a-button size="small">VIEW PROJECT</a-button>
					</a-col>
					<a-col :span="12" class="text-right">
						<a-space :size="-12" class="avatar-chips">
							<a-avatar  size="small" src="/images/face-1.jpg" />
							<a-avatar  size="small" src="/images/face-4.jpg" />
							<a-avatar  size="small" src="/images/face-2.jpg" />
							<a-avatar  size="small" src="/images/face-3.jpg" />
						</a-space>
					</a-col>
				</a-row>
			</a-card>
			<!-- / Project Card -->

		</a-col>
		<!-- / Project Column -->

		<!-- Project Column -->
		<a-col :span="24" :md="12">

			<!-- Project Card -->
			<a-card class="card-project">
				<img
				slot="cover"
				alt="example"
				src="/images/home-decor-2.jpeg"
				/>
				<div class="card-tag">Project #2</div>
				<h5>Scandinavian</h5>
				<p>
					Music is something that every person has his or her own specific opinion about.
				</p>
				<a-row type="flex" :gutter="6" class="card-footer" align="middle">
					<a-col :span="12">
						<a-button size="small">VIEW PROJECT</a-button>
					</a-col>
					<a-col :span="12" class="text-right">
						<a-space :size="-12" class="avatar-chips">
							<a-avatar  size="small" src="/images/face-1.jpg" />
							<a-avatar  size="small" src="/images/face-4.jpg" />
							<a-avatar  size="small" src="/images/face-2.jpg" />
							<a-avatar  size="small" src="/images/face-3.jpg" />
						</a-space>
					</a-col>
				</a-row>
			</a-card>
			<!-- Project Card -->

		</a-col>
		<!-- / Project Column -->

	</a-row>
</template>`,
			widget2Code: `
<template>
	<a-row :gutter="24">
		<a-col :span="12" :lg="8" :xl="6" class="mb-24">

			<!-- Salary Card -->
			<a-card :bordered="false" class="widget-2 h-full">
				<a-statistic :value="2000" prefix="+$">
					<template #title>
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
								<g id="bank" transform="translate(0.75 0.75)">
									<path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
									<path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
									<path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
								</g>
							</svg>
						</div>
						<h6>Salary</h6>
						<p>Belong Interactive</p>
					</template>
				</a-statistic>
			</a-card>
			<!-- / Salary Card -->

		</a-col>
		<a-col :span="12" :lg="8" :xl="6" class="mb-24">

			<!-- Paypal Card -->
			<a-card :bordered="false" class="widget-2 h-full">
				<a-statistic :value="49000" prefix="+$">
					<template #title>
						<div class="icon">
							<img src="/images/logos/paypal-logo-2.png" alt="">
						</div>
						<h6>Paypal</h6>
						<p>Freelance Payment</p>
					</template>
				</a-statistic>
			</a-card>
			<!-- Paypal Card -->

		</a-col>
	</a-row>
</template>`,
			creditCode: `
<template>
	<!-- Master Card -->
	<a-card class="card-credit header-solid h-full">
		<template #title>
			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22.5 20.625">
				<g id="wifi" transform="translate(0.75 0.75)">
					<circle id="Oval" cx="1.5" cy="1.5" r="1.5" transform="translate(9 16.875)" fill="#fff"/>
					<path id="Path" d="M0,1.36a6.377,6.377,0,0,1,7.5,0" transform="translate(6.75 11.86)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
					<path id="Path-2" data-name="Path" d="M14.138,2.216A12.381,12.381,0,0,0,0,2.216" transform="translate(3.431 6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
					<path id="Path-3" data-name="Path" d="M0,3.294a18.384,18.384,0,0,1,21,0" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
				</g>
			</svg>
		</template>
		<h5 class="card-number">4562 1122 4594 7852</h5>
		
		<div class="card-footer">
			<div class="mr-30">
				<p>Card Holder</p>
				<h6>Jack Peterson</h6>
			</div>
			<div class="mr-30">
				<p>Expires</p>
				<h6>11/22</h6>
			</div>
			<div class="card-footer-col col-logo ml-auto">
				<img src="/images/logos/mastercard-logo.png">
			</div>
		</div>
	</a-card>
	<!-- / Master Card -->
</template>`
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
</style>