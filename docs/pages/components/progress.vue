<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Progress</h1>
					<p class="text-dark">
						Display the current progress of an operation flow.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						If it will take a long time to complete an operation, you can use Progress 
						to show the current progress and status.
					</p>
					<ul>
						<li>
							When an operation will interrupt the current interface, or it needs to
							run in the background for more than 2 seconds.
						</li>
						<li>When you need to display the completion percentage of an operation.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-20" id="Progress-bar">
					<a-divider orientation="left">Progress bar</a-divider>
					<p>
						A standard progress bar.
					</p>
					<div class="showcase">
						<a-progress :percent="30" />
						<a-progress :percent="50" status="active" />
						<a-progress :percent="70" status="exception" />
						<a-progress :percent="100" />
						<a-progress :percent="50" :show-info="false" />
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Progress? Please check the
					<a target="_blank" href="https://antdv.com/components/progress/">official docs</a>.
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
			title: 'Progress | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Display the current progress of an operation flow.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Progress-bar": "Progress bar",
			},
			codeSample: `
<template>
  <div>
    <a-progress :percent="30" />
    <a-progress :percent="50" status="active" />
    <a-progress :percent="70" status="exception" />
    <a-progress :percent="100" />
    <a-progress :percent="50" :show-info="false" />
  </div>
</template>`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
</style>