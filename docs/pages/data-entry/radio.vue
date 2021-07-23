<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Radio</h1>
					<p class="text-dark">
						Radio.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>Used to select a single state from multiple options.</li>
						<li>
							The difference from Select is that Radio is visible to the user 
							and can facilitate the comparison of choice, which means there 
							shouldn’t be too many of them.
						</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						The simplest use.
					</p>
					<div class="showcase">
  						<a-radio>Radio</a-radio>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>
				<section class="mb-24" id="Solid-radio-button">
					<a-divider orientation="left">Solid radio button</a-divider>
					<p>
						Solid radio button style.
					</p>
					<div class="showcase">
						<div>
							<a-radio-group default-value="a" button-style="solid">
								<a-radio-button value="a">
								Hangzhou
								</a-radio-button>
								<a-radio-button value="b">
								Shanghai
								</a-radio-button>
								<a-radio-button value="c">
								Beijing
								</a-radio-button>
								<a-radio-button value="d">
								Chengdu
								</a-radio-button>
							</a-radio-group>
							</div>
							<div :style="{ marginTop: '16px' }">
							<a-radio-group default-value="c" button-style="solid">
								<a-radio-button value="a">
								Hangzhou
								</a-radio-button>
								<a-radio-button value="b" disabled>
								Shanghai
								</a-radio-button>
								<a-radio-button value="c">
								Beijing
								</a-radio-button>
								<a-radio-button value="d">
								Chengdu
								</a-radio-button>
							</a-radio-group>
						</div>
					</div>
					<muse-snippet :code="solidRadioBtn"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Radio? Please check the
					<a target="_blank" href="https://antdv.com/components/radio/">official docs</a>.
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
			title: 'Radio | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Radio' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
				"Solid-radio-button": "Solid radio button",
			},
			codeSample: `
<template>
  <a-radio>Radio</a-radio>
</template>
`,
			solidRadioBtn: `
<template>
  <div>
    <div>
      <a-radio-group default-value="a" button-style="solid">
        <a-radio-button value="a">
          Hangzhou
        </a-radio-button>
        <a-radio-button value="b">
          Shanghai
        </a-radio-button>
        <a-radio-button value="c">
          Beijing
        </a-radio-button>
        <a-radio-button value="d">
          Chengdu
        </a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group default-value="c" button-style="solid">
        <a-radio-button value="a">
          Hangzhou
        </a-radio-button>
        <a-radio-button value="b" disabled>
          Shanghai
        </a-radio-button>
        <a-radio-button value="c">
          Beijing
        </a-radio-button>
        <a-radio-button value="d">
          Chengdu
        </a-radio-button>
      </a-radio-group>
    </div>
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