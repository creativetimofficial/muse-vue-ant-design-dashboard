<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Checkbox</h1>
					<p class="text-dark">
						Checkbox component
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>Used for selecting multiple values from several options.</li>
						<li>
							If you use only one checkbox, it is the same as using Switch to toggle
							between two states. The difference is that Switch will trigger the state
							change directly, but Checkbox just marks the state as changed and this
							needs to be submitted.
						</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Basic usage of checkbox
					</p>
					<div class="showcase">
						<a-checkbox>
							Checkbox
						</a-checkbox>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Checkbox? Please check the
					<a target="_blank" href="https://antdv.com/components/checkbox/">official docs</a>.
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
			title: 'Checkbox | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Checkbox component' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
			},
			codeSample: `
<template>
  <a-checkbox @change="onChange">
    Checkbox
  </a-checkbox>
</template>
<script>
export default {
  methods: {
    onChange(e) {
      console.log(\`checked = \${e.target.checked}\`);
    },
  },
};
<\/script>
`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
</style>