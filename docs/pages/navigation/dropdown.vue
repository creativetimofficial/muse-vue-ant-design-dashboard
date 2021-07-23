<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Dropdown</h1>
					<p class="text-dark">
						A dropdown list.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						When there are more than a few options to choose from, you can wrap them
						in a Dropdown. By hovering or clicking on the trigger, a dropdown menu
						will appear, which allows you to choose an option and execute the relevant
						action.
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						The most basic dropdown menu.
					</p>
					<div class="showcase">
						<a-dropdown>
							<a class="ant-dropdown-link" @click="e => e.preventDefault()">
							Hover me <a-icon type="down" />
							</a>
							<a-menu slot="overlay">
							<a-menu-item>
								<a href="javascript:;">1st menu item</a>
							</a-menu-item>
							<a-menu-item>
								<a href="javascript:;">2nd menu item</a>
							</a-menu-item>
							<a-menu-item>
								<a href="javascript:;">3rd menu item</a>
							</a-menu-item>
							</a-menu>
						</a-dropdown>
					</div>
					<muse-snippet :code="basicCode"></muse-snippet>
				</section>
				<section class="mb-24" id="Button-with-dropdown-menu">
					<a-divider orientation="left">Button with dropdown menu</a-divider>
					<p>
						A button is on the left, and a related functional menu is on the right.
						You can set the icon property to modify the icon of right.
					</p>
					<div class="showcase">
						<a-dropdown-button>
							Dropdown
							<a-menu slot="overlay">
								<a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
								<a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
								<a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
							</a-menu>
						</a-dropdown-button>
						<a-dropdown-button>
							Dropdown
							<a-menu slot="overlay">
								<a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
								<a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
								<a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
							</a-menu>
							<a-icon slot="icon" type="user" />
						</a-dropdown-button>
						<a-dropdown-button disabled style="margin-left: 8px">
							Dropdown
							<a-menu slot="overlay">
								<a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
								<a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
								<a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
							</a-menu>
						</a-dropdown-button>
						<a-dropdown>
							<a-menu slot="overlay">
								<a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
								<a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
								<a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
							</a-menu>
							<a-button style="margin-left: 8px"> Button <a-icon type="down" /> </a-button>
						</a-dropdown>
					</div>
					<muse-snippet :code="buttonCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Dropdown? Please check the
					<a target="_blank" href="https://antdv.com/components/dropdown/">official docs</a>.
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
			title: 'Dropdown | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'desDropdownription', name: 'description', content: 'A dropdown list.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
				"Button-with-dropdown-menu": "Button with dropdown menu",
			},
			basicCode: `
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      Hover me <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">1st menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>`,
			buttonCode: `
<template>
  <div>
    <a-dropdown-button @click="handleButtonClick">
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
    </a-dropdown-button>
    <a-dropdown-button>
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-icon slot="icon" type="user" />
    </a-dropdown-button>
    <a-dropdown-button disabled style="margin-left: 8px" @click="handleButtonClick">
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
    </a-dropdown-button>
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-button style="margin-left: 8px"> Button <a-icon type="down" /> </a-button>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
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