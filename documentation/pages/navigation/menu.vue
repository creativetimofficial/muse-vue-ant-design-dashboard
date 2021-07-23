<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Menu</h1>
					<p class="text-dark">
						A versatile menu for navigation.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						Navigation is an important part of any website, as a good navigation setup allows
						users to move around the site quickly and efficiently. Ant Design offers top and
						side navigation options. Top navigation provides all the categories and functions
						of the website. Side navigation provides the multi-level structure of the website.
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Horizontal top navigation menu.
					</p>
					<div class="showcase">
						<a-menu v-model="current" mode="horizontal">
							<a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
							<a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
							<a-sub-menu>
								<span slot="title" class="submenu-title-wrapper"
								><a-icon type="setting" />Navigation Three - Submenu</span
								>
								<a-menu-item-group title="Item 1">
								<a-menu-item key="setting:1">
									Option 1
								</a-menu-item>
								<a-menu-item key="setting:2">
									Option 2
								</a-menu-item>
								</a-menu-item-group>
								<a-menu-item-group title="Item 2">
								<a-menu-item key="setting:3">
									Option 3
								</a-menu-item>
								<a-menu-item key="setting:4">
									Option 4
								</a-menu-item>
								</a-menu-item-group>
							</a-sub-menu>
							<a-menu-item key="alipay">
								<a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
								>Navigation Four - Link</a
								>
							</a-menu-item>
						</a-menu>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Menu? Please check the
					<a target="_blank" href="https://antdv.com/components/menu/">official docs</a>.
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
			title: 'Menu | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'A versatile menu for navigation.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
			},
      		current: ['mail'],
			codeSample: `
<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
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