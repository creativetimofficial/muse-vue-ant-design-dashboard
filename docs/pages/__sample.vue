<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>ComponentName</h1>
					<p class="text-dark">
						Paragraph
					</p>
				</section>
   				<a-divider />
				<section class="mb-24">
					<h2>When To Use</h2>
					<p>
						Paragraph
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Paragraph
					</p>
					<div class="showcase">
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue ComponentName? Please check the
					<a target="_blank" href="antdv">official docs</a>.
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
			title: 'License | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'description' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Basic": "Basic",
			},
			codeSample: `
			`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
</style>