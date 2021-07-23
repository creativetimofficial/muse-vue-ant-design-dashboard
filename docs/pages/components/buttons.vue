<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Button</h1>
					<p class="text-dark">
						To trigger an operation.
					</p>
				</section>
				<section class="mb-24" id="when-to-use">
					<h2>When To Use</h2>
					<p>
						A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
					</p>
				</section>
				<section class="mb-24" id="Component-Registration">
					<h2>Component Registration</h2>
					<muse-snippet :code="componentRegistration" lang="javascript"></muse-snippet>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Type">
					<a-divider orientation="left">Type</a-divider>
					<p>
						There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button , <code>danger</code> button and <code>link</code> button in antd.
					</p>
					<div class="showcase pb-10">
						<a-button type="primary" class="mb-10 mr-10">
						Primary
						</a-button>
						<a-button class="mb-10 mr-10">Default</a-button>
						<a-button type="dashed" class="mb-10 mr-10">
						Dashed
						</a-button>
						<a-button type="danger" class="mb-10 mr-10">
						Danger
						</a-button>
						<a-config-provider :auto-insert-space-in-button="false">
							<a-button type="primary" class="mb-10 mr-10">
								按钮
							</a-button>
						</a-config-provider>
						<a-button type="primary" class="mb-10 mr-10">
						按钮
						</a-button>
						<a-button type="link" class="mb-10 mr-10">
						Link
						</a-button>
					</div>
					<muse-snippet :code="types"></muse-snippet>
				</section>
				<section class="mb-24" id="Icon">
					<a-divider orientation="left">Icon</a-divider>
					<p>
						Button components can contain an Icon. This is done by setting the <code>icon</code> property or placing an Icon component within the Button
						If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.
					</p>
					<div class="showcase">
						<a-button type="primary" shape="circle" icon="search" class="mb-10 mr-10" />
						<a-button type="primary" shape="circle" class="mb-10 mr-10">
						A
						</a-button>
						<a-button type="primary" icon="search" class="mb-10 mr-10">
						Search
						</a-button>
						<a-button shape="circle" icon="search" class="mb-10 mr-10" />
						<a-button icon="search">
						Search
						</a-button>
						<a-button shape="circle" icon="search" class="mb-10 mr-10" />
						<a-button icon="search" class="mb-10 mr-10">
						Search
						</a-button>
						<a-button type="dashed" shape="circle" icon="search" class="mb-10 mr-10" />
						<a-button type="dashed" icon="search" class="mb-10 mr-10">
						Search
						</a-button>
					</div>
					<muse-snippet :code="icon"></muse-snippet>
				</section>
				<section class="mb-24" id="Ghost-Button">
					<a-divider orientation="left">Ghost Button</a-divider>
					<p>
						<code>ghost</code> property will make button's background transparent, it is common used in colored background.
					</p>
					<div class="showcase bg-gray-6">
						<a-button type="primary" ghost class="mr-10">
						Primary
						</a-button>
						<a-button ghost class="mr-10">
						Default
						</a-button>
						<a-button type="dashed" ghost class="mr-10">
						Dashed
						</a-button>
						<a-button type="danger" ghost class="mr-10">
						Danger
						</a-button>
						<a-button type="link" ghost class="mr-10">
						Link
						</a-button>
					</div>
					<muse-snippet :code="ghost"></muse-snippet>
				</section>
				<section class="mb-24" id="Size">
					<a-divider orientation="left">Size</a-divider>
					<p>
						Ant Design supports a default button size as well as a large and small size.
						If a large or small button is desired, set the <code>size</code> property to either <code>large</code> or <code>small</code> respectively. Omit the size property for a button with the default size.
					</p>
					<div class="showcase pb-10">
						<a-radio-group :value="size" @change="handleSizeChange" class="mr-10 mb-10">
							<a-radio-button value="large">
								Large
							</a-radio-button>
							<a-radio-button value="default">
								Default
							</a-radio-button>
							<a-radio-button value="small">
								Small
							</a-radio-button>
						</a-radio-group>
						<br><br>
						<a-button type="primary" :size="size" class="mr-10 mb-10">
						Primary
						</a-button>
						<a-button :size="size" class="mr-10 mb-10">
						Normal
						</a-button>
						<a-button type="dashed" :size="size" class="mr-10 mb-10">
						Dashed
						</a-button>
						<a-button type="danger" :size="size" class="mr-10 mb-10">
						Danger
						</a-button>
						<a-button type="link" :size="size" class="mr-10 mb-10">
						Link
						</a-button>
						<br>
						<a-button type="primary" icon="download" :size="size" class="mr-10 mb-10" />
						<a-button type="primary" shape="circle" icon="download" :size="size" class="mr-10 mb-10" />
						<a-button type="primary" shape="round" icon="download" :size="size" class="mr-10 mb-10">Download</a-button>
						<a-button type="primary" shape="round" icon="download" :size="size" class="mr-10 mb-10" />
						<a-button type="primary" icon="download" :size="size" class="mr-10 mb-10">
							Download
						</a-button>
						<br>
						<a-button-group :size="size" class="mr-10 mb-10">
							<a-button type="primary">
								<a-icon type="left" />Backward
							</a-button>
							<a-button type="primary">
								Forward<a-icon type="right" />
							</a-button>
						</a-button-group>
					</div>
					<muse-snippet :code="sizeCode"></muse-snippet>
				</section>
				<section class="mb-24" id="Block">
					<a-divider orientation="left">Block</a-divider>
					<p>
						Button components can contain an Icon. This is done by setting the <code>icon</code> property or placing an Icon component within the Button
						If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.
					</p>
					<div class="showcase">
						<a-button type="primary" block class="mb-10">
						Primary
						</a-button>
						<a-button block class="mb-10">
						Default
						</a-button>
						<a-button type="dashed" block class="mb-10">
						Dashed
						</a-button>
						<a-button type="danger" block class="mb-10">
						Danger
						</a-button>
						<a-button type="link" block>
						Link
						</a-button>
					</div>
					<muse-snippet :code="block"></muse-snippet>
				</section>
				<section class="mb-24" id="Disabled">
					<a-divider orientation="left">Disabled</a-divider>
					<p>
						To mark a button as disabled, add the <code>disabled</code> property to the Button.
					</p>
					<div class="showcase">
						<a-button type="primary" class="mr-10 mb-10">
						Primary
						</a-button>
						<a-button type="primary" disabled class="mr-10 mb-10">
						Primary(disabled)
						</a-button>
						<br />
						<a-button class="mr-10 mb-10">Default</a-button>
						<a-button disabled class="mr-10 mb-10">
						Default(disabled)
						</a-button>
						<br />
						<a-button type="dashed" class="mr-10 mb-10">
						Dashed
						</a-button>
						<a-button type="dashed" disabled class="mr-10 mb-10">
						Dashed(disabled)
						</a-button>
						<br />
						<a-button type="link" class="mr-10 mb-10">
						Link
						</a-button>
						<a-button type="link" disabled class="mr-10 mb-10">
						Link(disabled)
						</a-button>
						<div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
							<a-button ghost class="mr-10 mb-10">
								Ghost
							</a-button>
							<a-button ghost disabled class="mr-10 mb-10">
								Ghost(disabled)
							</a-button>
						</div>
					</div>
					<muse-snippet :code="disabled"></muse-snippet>
				</section>
				<section class="mb-24" id="Loading">
					<a-divider orientation="left">Loading</a-divider>
					<p>
						A loading indicator can be added to a button by setting the <code>loading</code> property on the Button.
					</p>
					<div class="showcase">
						<a-button type="primary" loading class="mr-10 mb-10">
						Loading
						</a-button>
						<a-button type="primary" size="small" loading class="mr-10 mb-10">
						Loading
						</a-button>
						<br />
						<a-button type="primary" :loading="loading" @mouseenter="enterLoading" class="mr-10 mb-10">
						mouseenter me!
						</a-button>
						<a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading" class="mr-10 mb-10">
						延迟1s
						</a-button>
						<br />
						<a-button type="primary" loading class="mr-10 mb-10" />
						<a-button type="primary" shape="circle" loading class="mr-10 mb-10" />
						<a-button type="danger" shape="round" loading class="mr-10 mb-10" />
					</div>
					<muse-snippet :code="loadingCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Button? Please check the
					<a target="_blank" href="https://antdv.com/components/button/">official docs</a>.
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
			title: 'Button | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'To trigger an operation.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"when-to-use": "When To Use",
				"Component-Registration": "Component Registration",
				"Type": "Type",
				"Icon": "Icon",
				"Ghost-Button": "Ghost Button",
				"Size": "Size",
				"Block": "Block",
				"Disabled": "Disabled",
				"Loading": "Loading",
			},
        	size: 'default',
			loading: false,
			iconLoading: false,
			componentRegistration: `
import { Button } from 'ant-design-vue';
Vue.use(Button);`,
			types: `
<template>
  <div>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link">
      Link
    </a-button>
  </div>
</template>
`,
			icon: `
<template>
  <div>
    <a-button type="primary" shape="circle" icon="search" />
    <a-button type="primary" shape="circle">
      A
    </a-button>
    <a-button type="primary" icon="search">
      Search
    </a-button>
    <a-button shape="circle" icon="search" />
    <a-button icon="search">
      Search
    </a-button>
    <a-button shape="circle" icon="search" />
    <a-button icon="search">
      Search
    </a-button>
    <a-button type="dashed" shape="circle" icon="search" />
    <a-button type="dashed" icon="search">
      Search
    </a-button>
  </div>
</template>`,
			ghost: `
<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <a-button type="primary" ghost>
      Primary
    </a-button>
    <a-button ghost>
      Default
    </a-button>
    <a-button type="dashed" ghost>
      Dashed
    </a-button>
    <a-button type="danger" ghost>
      Danger
    </a-button>
    <a-button type="link" ghost>
      Link
    </a-button>
  </div>
</template>`,
			sizeCode: `
<template>
  <div>
    <a-radio-group :value="size" @change="handleSizeChange">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="default">
        Default
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <br><br>
    <a-button type="primary" :size="size">
      Primary
    </a-button>
    <a-button :size="size">
      Normal
    </a-button>
    <a-button type="dashed" :size="size">
      Dashed
    </a-button>
    <a-button type="danger" :size="size">
      Danger
    </a-button>
    <a-button type="link" :size="size">
      Link
    </a-button>
    <br>
    <a-button type="primary" icon="download" :size="size" />
    <a-button type="primary" shape="circle" icon="download" :size="size" />
    <a-button type="primary" shape="round" icon="download" :size="size" />Download</a-button>
    <a-button type="primary" shape="round" icon="download" :size="size" />
    <a-button type="primary" icon="download" :size="size">
      Download
    </a-button>
    <br>
    <a-button-group :size="size">
      <a-button type="primary">
        <a-icon type="left" />Backward
      </a-button>
      <a-button type="primary">
        Forward<a-icon type="right" />
      </a-button>
    </a-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        size: 'large',
      };
    },
    methods: {
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
  };
<\/script>
`,
			block: `
<template>
  <div>
    <a-button type="primary" block>
      Primary
    </a-button>
    <a-button block>
      Default
    </a-button>
    <a-button type="dashed" block>
      Dashed
    </a-button>
    <a-button type="danger" block>
      Danger
    </a-button>
    <a-button type="link" block>
      Link
    </a-button>
  </div>
</template>
`,
			disabled: `
<template>
  <div>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button type="primary" disabled>
      Primary(disabled)
    </a-button>
    <br />
    <a-button>Default</a-button>
    <a-button disabled>
      Default(disabled)
    </a-button>
    <br />
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="dashed" disabled>
      Dashed(disabled)
    </a-button>
    <br />
    <a-button type="link">
      Link
    </a-button>
    <a-button type="link" disabled>
      Link(disabled)
    </a-button>
    <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
      <a-button ghost>
        Ghost
      </a-button>
      <a-button ghost disabled>
        Ghost(disabled)
      </a-button>
    </div>
  </div>
</template>`,
			loadingCode: `
<template>
  <div>
    <a-button type="primary" loading>
      Loading
    </a-button>
    <a-button type="primary" size="small" loading>
      Loading
    </a-button>
    <br />
    <a-button type="primary" :loading="loading" @mouseenter="enterLoading">
      mouseenter me!
    </a-button>
    <a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
      延迟1s
    </a-button>
    <br />
    <a-button type="primary" loading />
    <a-button type="primary" shape="circle" loading />
    <a-button type="danger" shape="round" loading />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
  },
};
<\/script>
`,
		}
	},
    methods: {
		handleSizeChange(e) {
			this.size = e.target.value;
		},
		enterLoading() {
		this.loading = true;
		},
		enterIconLoading() {
		this.iconLoading = { delay: 1000 };
		},
    },
}
</script>


<style>
</style>