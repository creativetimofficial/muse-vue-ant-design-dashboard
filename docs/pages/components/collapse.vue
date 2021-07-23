<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Collapse</h1>
					<p class="text-dark">
						A content area which can be collapsed and expanded.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24">
					<h2>When To Use</h2>
					<ul>
						<li>Can be used to group or hide complex regions to keep the page clean.</li>
						<li>‘Accordion’ is a special kind of ‘Collapse’, which allows only one panel to be expanded at a time.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						By default, any number of panels can be expanded at a time. The first panel is expanded in this example.
					</p>
					<div class="showcase">
						<a-collapse v-model="activeKey">
							<a-collapse-panel key="1" header="This is panel header 1">
								<p>{{ text }}</p>
							</a-collapse-panel>
							<a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
								<p>{{ text }}</p>
							</a-collapse-panel>
							<a-collapse-panel key="3" header="This is panel header 3" disabled>
								<p>{{ text }}</p>
							</a-collapse-panel>
						</a-collapse>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Collapse? Please check the
					<a target="_blank" href="https://antdv.com/components/collapse/">official docs</a>.
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
			title: 'Collapse | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'A content area which can be collapsed and expanded.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Basic": "Basic",
			},
			text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
			activeKey: ['1'],
			codeSample: `
<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3" disabled>
        <p>{{ text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      activeKey: ['1'],
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
};
<\/script>`,
		}
	},
	methods: {
	},
}
</script>


<style lang="scss" scoped>
</style>