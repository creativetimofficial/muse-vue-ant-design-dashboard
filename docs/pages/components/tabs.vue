<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Tabs</h1>
					<p class="text-dark">
						Tabs make it easy to switch between different views.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						Ant Design has 3 types of Tabs for different situations.
					</p>
					<ul>
						<li>Card Tabs: for managing too many closeable views.</li>
						<li>Normal Tabs: for functional aspects of a page.</li>
						<li>RadioButton: for secondary tabs.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Default activate first tab.
					</p>
					<div class="showcase">
						<a-tabs default-active-key="1">
							<a-tab-pane key="1" tab="Tab 1">
								Content of Tab Pane 1
							</a-tab-pane>
							<a-tab-pane key="2" tab="Tab 2" force-render>
								Content of Tab Pane 2
							</a-tab-pane>
							<a-tab-pane key="3" tab="Tab 3">
								Content of Tab Pane 3
							</a-tab-pane>
						</a-tabs>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Tabs? Please check the
					<a target="_blank" href="https://antdv.com/components/tabs/">official docs</a>.
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
			title: 'Tabs | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Tabs make it easy to switch between different views.' }
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
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
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