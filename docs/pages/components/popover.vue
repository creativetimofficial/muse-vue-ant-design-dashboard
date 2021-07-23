<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Popover</h1>
					<p class="text-dark">
						The floating card popped by clicking or hovering.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						A simple popup menu to provide extra information or operations.
					</p>
					<p>
						Comparing with Tooltip, besides information Popover card can also provide action elements like links and buttons.
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Three-ways-to-trigger">
					<a-divider orientation="left">Three ways to trigger</a-divider>
					<p>
						Mouse to click, focus and move in.
					</p>
					<div class="showcase">
						<a-popover title="Title" trigger="hover">
							<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
							</template>
							<a-button type="primary">
								Hover me
							</a-button>
						</a-popover>
						<a-popover title="Title" trigger="focus">
							<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
							</template>
							<a-button type="primary">
								Focus me
							</a-button>
						</a-popover>
						<a-popover title="Title" trigger="click">
							<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
							</template>
							<a-button type="primary">
								Click me
							</a-button>
						</a-popover>
					</div>
					<muse-snippet :code="triggerSample"></muse-snippet>
				</section>
				<section class="mb-24" id="Placement">
					<a-divider orientation="left">Placement</a-divider>
					<p>
						There are 12 placement options available.
					</p>
					<div class="showcase">
						<div id="components-popover-demo-placement">
							<div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
							<a-popover placement="topLeft">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>TL</a-button>
							</a-popover>
							<a-popover placement="top">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>Top</a-button>
							</a-popover>
							<a-popover placement="topRight">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>TR</a-button>
							</a-popover>
							</div>
							<div :style="{ width: `${buttonWidth}px`, float: 'left' }">
							<a-popover placement="leftTop">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>LT</a-button>
							</a-popover>
							<a-popover placement="left">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>Left</a-button>
							</a-popover>
							<a-popover placement="leftBottom">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>LB</a-button>
							</a-popover>
							</div>
							<div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
							<a-popover placement="rightTop">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>RT</a-button>
							</a-popover>
							<a-popover placement="right">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>Right</a-button>
							</a-popover>
							<a-popover placement="rightBottom">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>RB</a-button>
							</a-popover>
							</div>
							<div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
							<a-popover placement="bottomLeft">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>BL</a-button>
							</a-popover>
							<a-popover placement="bottom">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>Bottom</a-button>
							</a-popover>
							<a-popover placement="bottomRight">
								<template slot="content">
								<p class="mb-0">Content</p>
								<p class="mb-0">Content</p>
								</template>
								<template slot="title">
								<span>Title</span>
								</template>
								<a-button>BR</a-button>
							</a-popover>
							</div>
						</div>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Popover? Please check the
					<a target="_blank" href="https://antdv.com/components/popover/">official docs</a>.
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
			title: 'Popover | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'The floating card popped by clicking or hovering.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Three-ways-to-trigger": "Three ways to trigger",
				"Placement": "Placement",
			},
      		buttonWidth: 70,
			triggerSample: `
<template>
  <div>
    <a-popover title="Title" trigger="hover">
      <template slot="content">
        <p class="mb-0">Content</p>
        <p class="mb-0">Content</p>
      </template>
      <a-button type="primary">
        Hover me
      </a-button>
    </a-popover>
    <a-popover title="Title" trigger="focus">
      <template slot="content">
        <p class="mb-0">Content</p>
        <p class="mb-0">Content</p>
      </template>
      <a-button type="primary">
        Focus me
      </a-button>
    </a-popover>
    <a-popover title="Title" trigger="click">
      <template slot="content">
        <p class="mb-0">Content</p>
        <p class="mb-0">Content</p>
      </template>
      <a-button type="primary">
        Click me
      </a-button>
    </a-popover>
  </div>
</template>
`,
			codeSample: `
<template>
  <div id="components-popover-demo-placement">
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, whiteSpace: 'nowrap' }">
      <a-popover placement="topLeft">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>TL</a-button>
      </a-popover>
      <a-popover placement="top">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>Top</a-button>
      </a-popover>
      <a-popover placement="topRight">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>TR</a-button>
      </a-popover>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, float: 'left' }">
      <a-popover placement="leftTop">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>LT</a-button>
      </a-popover>
      <a-popover placement="left">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>Left</a-button>
      </a-popover>
      <a-popover placement="leftBottom">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>LB</a-button>
      </a-popover>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, marginLeft: \`\${buttonWidth * 4 + 24}px\` }">
      <a-popover placement="rightTop">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>RT</a-button>
      </a-popover>
      <a-popover placement="right">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>Right</a-button>
      </a-popover>
      <a-popover placement="rightBottom">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>RB</a-button>
      </a-popover>
    </div>
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-popover placement="bottomLeft">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>BL</a-button>
      </a-popover>
      <a-popover placement="bottom">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>Bottom</a-button>
      </a-popover>
      <a-popover placement="bottomRight">
        <template slot="content">
          <p class="mb-0">Content</p>
          <p class="mb-0">Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-button>BR</a-button>
      </a-popover>
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
<\/script>`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
	#components-popover-demo-placement .ant-btn {
		width: 70px;
		text-align: center;
		padding: 0;
		margin-right: 8px;
		margin-bottom: 8px;
	}
</style>