<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Tooltip</h1>
					<p class="text-dark">
						A simple text popup tip.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn’t support complex text or operations.</li>
						<li>To provide an explanation of a ‘button/text/operation’. It’s often used instead of the html ‘title’ attribute.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						The simplest usage.
					</p>
					<div class="showcase">
						<a-tooltip>
							<template slot="title">
							prompt text
							</template>
							Tooltip will show when mouse enter.
						</a-tooltip>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>
				<section class="mb-24" id="Placement">
					<a-divider orientation="left">Placement</a-divider>
					<p>
						There are 12 placement options available.
					</p>
					<div class="showcase">
						<div id="components-a-tooltip-demo-placement">
							<div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
							<a-tooltip placement="topLeft">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>TL</a-button>
							</a-tooltip>
							<a-tooltip placement="top">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>Top</a-button>
							</a-tooltip>
							<a-tooltip placement="topRight">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>TR</a-button>
							</a-tooltip>
							</div>
							<div :style="{ width: `${buttonWidth}px`, float: 'left' }">
							<a-tooltip placement="leftTop">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>LT</a-button>
							</a-tooltip>
							<a-tooltip placement="left">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>Left</a-button>
							</a-tooltip>
							<a-tooltip placement="leftBottom">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>LB</a-button>
							</a-tooltip>
							</div>
							<div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
							<a-tooltip placement="rightTop">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>RT</a-button>
							</a-tooltip>
							<a-tooltip placement="right">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>Right</a-button>
							</a-tooltip>
							<a-tooltip placement="rightBottom">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>RB</a-button>
							</a-tooltip>
							</div>
							<div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
							<a-tooltip placement="bottomLeft">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>BL</a-button>
							</a-tooltip>
							<a-tooltip placement="bottom">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>Bottom</a-button>
							</a-tooltip>
							<a-tooltip placement="bottomRight">
								<template slot="title">
								<span>prompt text</span>
								</template>
								<a-button>BR</a-button>
							</a-tooltip>
							</div>
						</div>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Tooltip? Please check the
					<a target="_blank" href="https://antdv.com/components/tooltip/">official docs</a>.
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
			title: 'Tooltip | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'A simple text popup tip.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
				"Placement": "Placement",
			},
			buttonWidth: 70,
			codeSample: `
<template>
  <a-tooltip>
    <template slot="title">
      prompt text
    </template>
    Tooltip will show when mouse enter.
  </a-tooltip>
</template>
`,
			placement: `
<template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, whiteSpace: 'nowrap' }">
      <a-tooltip placement="topLeft">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>TL</a-button>
      </a-tooltip>
      <a-tooltip placement="top">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>Top</a-button>
      </a-tooltip>
      <a-tooltip placement="topRight">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>TR</a-button>
      </a-tooltip>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, float: 'left' }">
      <a-tooltip placement="leftTop">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>LT</a-button>
      </a-tooltip>
      <a-tooltip placement="left">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>Left</a-button>
      </a-tooltip>
      <a-tooltip placement="leftBottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>LB</a-button>
      </a-tooltip>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, marginLeft: \`\${buttonWidth * 4 + 24}px\` }">
      <a-tooltip placement="rightTop">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>RT</a-button>
      </a-tooltip>
      <a-tooltip placement="right">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>Right</a-button>
      </a-tooltip>
      <a-tooltip placement="rightBottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>RB</a-button>
      </a-tooltip>
    </div>
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-tooltip placement="bottomLeft">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>BL</a-button>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>Bottom</a-button>
      </a-tooltip>
      <a-tooltip placement="bottomRight">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <a-button>BR</a-button>
      </a-tooltip>
    </div>
  </div>
</template>
<script>
	export default {
		data() {
			return {
				buttonWidth: 70,
			};
		},
	};
<\/script>
<style scoped>
	#components-a-tooltip-demo-placement .ant-btn {
	width: 70px;
	text-align: center;
	padding: 0;
	margin-right: 8px;
	margin-bottom: 8px;
	}
</style>`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
	#components-a-tooltip-demo-placement .ant-btn {
	width: 70px;
	text-align: center;
	padding: 0;
	margin-right: 8px;
	margin-bottom: 8px;
	}
</style>