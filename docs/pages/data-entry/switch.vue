<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Switch</h1>
					<p class="text-dark">
						Switching Selector.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>If you need to represent the switching between two states or on-off state.</li>
						<li>
							The difference between Switch and Checkbox is that Switch will trigger a state
							change directly when you toggle it, while Checkbox is generally used for state
							marking, which should work in conjunction with submit operation.
						</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						The most basic usage.
					</p>
					<div class="showcase">
    					<a-switch default-checked />
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Switch? Please check the
					<a target="_blank" href="https://antdv.com/components/switch/">official docs</a>.
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
			title: 'Switch | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Switching Selector.' }
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
  <div>
    <a-switch default-checked @change="onChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onChange(checked) {
      console.log(\`a-switch to \${checked}\`);
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