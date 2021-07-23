<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24" id="Introduction">
					<h1>Muse Admin Dashboard - Ant Design Vue</h1>
					<p class="text-dark">
						A user-friendly, open source and beautiful dashboard based on Ant Design Vue.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24">
					<p>
						We at <a href="https://www.creative-tim.com/">Creative Tim</a> have always wanted to deliver great tools to all the web developers. We want to see better websites and web apps on the internet.
					</p>
					<a-row :gutter="[24,24]">
						<a-col :span="24" :lg="8" class="">

							<a-card :bordered="false" class="widget-2 h-full bg-gray-3 text-center p-30">
								<div class="icon">
									<svg xmlns="http://www.w3.org/2000/svg" class="fill-primary	" width="22" height="22" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
								</div>
								<h4>Developer First</h4>
								<p>
									Muse Dashboard is a "Developer First" product, with a lot of variables for colors, fonts, sizes and other elements.
								</p>
							</a-card>

						</a-col>
						<a-col :span="24" :lg="8" class="">

							<a-card :bordered="false" class="widget-2 h-full bg-gray-3 text-center p-30">
								<div class="icon">
									<svg xmlns="http://www.w3.org/2000/svg" class="fill-primary	" width="22" height="22" viewBox="0 0 384 512"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"/></svg>
								</div>
								<h4>High quality</h4>
								<p>
									We are following the latest code standards provided by the guys from Bootstrap, so you will love working with this dashboard.
								</p>
							</a-card>

						</a-col>
						<a-col :span="24" :lg="8" class="">

							<a-card :bordered="false" class="widget-2 h-full bg-gray-3 text-center p-30">
								<div class="icon">
									<svg xmlns="http://www.w3.org/2000/svg" class="fill-primary	" width="22" height="22" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/></svg>
								</div>
								<h4>Community helpers</h4>
								<p>
									Since all our products are built on top of Open Source also Soft UI Dashboard is released under <a class="text-white font-semibold" href="https://github.com/creativetimofficial/softui-dashboard/blob/master/LICENSE.md">MIT License</a>.
								</p>
							</a-card>

						</a-col>
					</a-row>
				</section>
				<section class="mb-24" id="Resources-and-credits">
					<h2>Resources and credits</h2>
					<p>This Dashboard is fully coded and built on top of Open Source, more details here:</p>
					<ul class="font-semibold credits">
						<li><a href="https://vuejs.org/">VueJS</a> : The Progressive JavaScript Framework</li>
						<li><a href="https://antdv.com/">Ant Design Vue</a> : A Vue UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.</li>
					</ul>
				</section>
				<section class="mb-24" id="Learn-more">
					<h2>Learn more</h2>
					<p>Stay up to date on the development journey and connect with us on:</p>
					<ul class="font-semibold credits">
						<li>Follow <a href="https://twitter.com/creativetim">Creative Tim on Twitter</a>.</li>
						<li>Read and subscribe to The Official <a href="https://creative-tim.com/blog?_ga=2.82963030.1761768429.1624962735-2035188204.1618172375">Creative Tim Blog</a>.</li>
						<li>Follow <a href="https://www.instagram.com/creativetimofficial">Creative Tim on Instagram</a>.</li>
						<li>Follow <a href="https://www.facebook.com/creativetim">Creative Tim on Facebook</a>.</li>
					</ul>
				</section>
				<section class="mb-24">
					<h2><a class="text-dark" href="/quick-start/vue-ant-design-dashboard/">Press here to Quick start</a></h2>
				</section>
			</div>
			<muse-anchor :anchors="anchors"></muse-anchor>
		</div>
	</div>
  
</template>

<script>

export default {
	head () {
		return {
			title: 'Muse Admin Dashboard - Ant Design Vue | Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'A user-friendly, open source and beautiful dashboard based on Ant Design Vue.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Introduction": "Introduction",
				"Resources-and-credits": "Resources and credits",
				"Learn-more": "Learn more",
			},
		}
	},
}
</script>


<style scoped lang="scss">
	.widget-2 {
		background-image: url('~/assets/info-card-3.jpg');
		background-position: 50%;
		background-size: cover;
		border: none;


		.icon {
			background-color: #ffffff;
		}

		h4 {
			color: #ffffff;
			font-size: 18px;
		}
		p {
			color: #eeeeee;
			font-size: 16px;
		}
	}
	.credits {
		line-height: 2;
    	padding-inline-start: 30px;
	}
</style>