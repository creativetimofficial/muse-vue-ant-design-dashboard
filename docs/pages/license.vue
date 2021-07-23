<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24" id="License">
					<h1>License</h1>
					<p class="text-dark">Learn more about the licenses Creative Tim offers and purchase the one that covers the needs of your project.</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="Free-Demo-Products">
					<h2>Free Demo Products</h2>
					<p>MIT License</p>
					<p>Copyright (c) 2021 <a href="https://creative-tim.com/">Creative Tim</a></p>
					<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
					<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
					<p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="PRO-Premium-Products">
					<h2>PRO Premium Products</h2>
					<p>Currently, on Creative Tim you can get the products with two types of licenses: Personal or Developer. If you are making a paid purchase, be sure to go through the table with the rights and the guidelines, so you can know what is the best fit for you. View the rights table and the description for each license on our by clicking the button below.</p>
					<p><a href="https://www.creative-tim.com/license">See licenses</a></p>
					<p>Creating your web design from scratch with dedicated designers can be very expensive. Using our solutions you don’t have to worry about design. Save time and money by focusing on the business model. Are you ready to create something amazing?</p>
					<p><a href="https://www.creative-tim.com/">Purchase now</a></p>
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
			title: 'License | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Learn more about the licenses Creative Tim offers and purchase the one that covers the needs of your project.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"License": "License",
				"Free-Demo-Products": "Free Demo Products",
				"PRO-Premium-Products": "PRO Premium Products",
			},
		} ;
	},
}
</script>


<style scoped lang="scss">
</style>