<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Alert</h1>
					<p class="text-dark">
						Alert component for feedback.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="when-to-use">
					<h2>When To Use</h2>
					<ul>
						<li>When you need to show alert messages to users.</li>
						<li>When you need a persistent static container which is closable by user actions.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						The simplest usage for short messages.
					</p>
					<div class="showcase">
						<a-alert class="mb-15" message="Success Tips" type="success" />
						<a-alert class="mb-15" message="Informational Notes" type="info" />
						<a-alert class="mb-15" message="Warning" type="warning" />
						<a-alert message="Error" type="error" />
					</div>
					<muse-snippet :code="basic"></muse-snippet>
				</section>
				<section class="mb-24" id="With-Icon">
					<a-divider orientation="left">With Icon</a-divider>
					<p>
						Decent icon make information more clear and more friendly.
					</p>
					<div class="showcase">
						<a-alert class="mb-15" message="Success Tips" type="success" show-icon />
						<a-alert class="mb-15" message="Informational Notes" type="info" show-icon />
						<a-alert class="mb-15" message="Warning" type="warning" show-icon />
						<a-alert message="Error" type="error" show-icon />
					</div>
					<muse-snippet :code="withIcon"></muse-snippet>
				</section>
				<section class="mb-24" id="Smooth-Unmount">
					<a-divider orientation="left">Smooth Unmount</a-divider>
					<p>
						Smoothly and unaffectedly unmount Alert.
					</p>
					<div class="showcase">
						<a-alert message="Success Tips" type="success" v-if="visible" closable :after-close="handleClose"/>
					</div>
					<muse-snippet :code="smoothUnmount"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Alert? Please check the
					<a target="_blank" href="https://antdv.com/components/alert/">official docs</a>.
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
			title: 'Alert | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Alert component for feedback.' }
			]
		}
	},
	data(){
		return {
      		visible: true,
			anchors: {
				"when-to-use": "When To Use",
				"Basic": "Basic",
				"With-Icon": "With Icon",
				"Smooth-Unmount": "Smooth Unmount",
			},
			basic: `
<template>
	<a-alert message="Success Tips" type="success" show-icon />
	<a-alert message="Informational Notes" type="info" show-icon />
	<a-alert message="Warning" type="warning" show-icon />
	<a-alert message="Error" type="error" show-icon />
</template>`,
			withIcon: `
<template>
	<a-alert message="Success Tips" type="success" />
	<a-alert message="Informational Notes" type="info" />
	<a-alert message="Warning" type="warning" />
	<a-alert message="Error" type="error" />
</template>`,
			smoothUnmount: `
<template>
  <div>
    <a-alert
      v-if="visible"
      message="Alert Message Text"
      type="success"
      closable
      :after-close="handleClose"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    handleClose() {
      this.visible = false;
    },
  },
};
<\/script>`,
		}
	},
	methods: {
		handleClose( index ){
			this.visible = false ;
		}
	}
}
</script>


<style lang="scss" scoped>
</style>