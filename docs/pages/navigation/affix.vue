<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Affix</h1>
					<p class="text-dark">
						Make an element stick to viewport.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.
						Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						The simplest usage.
					</p>
					<div class="showcase">
						<a-affix :offset-top="top">
							<a-button type="primary" @click="top += 10">
								Affix top
							</a-button>
						</a-affix>
						<br />
						<a-affix :offset-bottom="bottom">
							<a-button type="primary" @click="bottom += 10">
								Affix bottom
							</a-button>
						</a-affix>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Affix? Please check the
					<a target="_blank" href="https://antdv.com/components/affix/">official docs</a>.
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
			title: 'Affix | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Make an element stick to viewport.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
			},
			top: 100,
			bottom: 100,
			codeSample: `
<template>
  <div>
    <a-affix :offset-top="top">
      <a-button type="primary" @click="top += 10">
        Affix top
      </a-button>
    </a-affix>
    <br />
    <a-affix :offset-bottom="bottom">
      <a-button type="primary" @click="bottom += 10">
        Affix bottom
      </a-button>
    </a-affix>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 10,
      bottom: 10,
    };
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