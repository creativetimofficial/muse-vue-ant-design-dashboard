<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Badge</h1>
					<p class="text-dark">
						Small numerical value or status descriptor for UI elements.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Simplest Usage. Badge will be hidden when <code>count</code> is 0, but we can use <code>showZero</code> to show it.
					</p>
					<div class="showcase">
						<a-badge count="5" class="mr-10">
							<a href="#" class="head-example" />
						</a-badge>
						<a-badge count="0" class="mr-10" show-zero>
							<a href="#" class="head-example" />
						</a-badge>
						<a-badge class="mr-10">
							<a-icon slot="count" type="clock-circle" style="color: #f5222d" />
							<a href="#" class="head-example" />
						</a-badge>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>
				<section class="mb-24" id="Status">
					<a-divider orientation="left">Status</a-divider>
					<p>
						Standalone badge with status.
					</p>
					<div class="showcase">
						<a-badge status="success" />
						<a-badge status="error" />
						<a-badge status="default" />
						<a-badge status="processing" />
						<a-badge status="warning" />
						<br />
						<a-badge status="success" text="Success" />
						<br />
						<a-badge status="error" text="Error" />
						<br />
						<a-badge status="default" text="Default" />
						<br />
						<a-badge status="processing" text="Processing" />
						<br />
						<a-badge status="warning" text="warning" />
					</div>
					<muse-snippet :code="status"></muse-snippet>
				</section>
				<section class="mb-24" id="Colorful-Badge">
					<a-divider orientation="left">Colorful Badge</a-divider>
					<p>
						New feature after 3.16.0. We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.
					</p>
					<div class="showcase">
						<h4 style="margin-bottom: 16px">
							Presets:
						</h4>
						<div>
							<div v-for="color in colors" :key="color">
								<a-badge :color="color" :text="color" />
							</div>
						</div>
						<h4 style="margin: 16px 0">
							Custom:
						</h4>
						<div>
							<a-badge color="#f50" text="#f50" />
							<br />
							<a-badge color="#2db7f5" text="#2db7f5" />
							<br />
							<a-badge color="#87d068" text="#87d068" />
							<br />
							<a-badge color="#108ee9" text="#108ee9" />
						</div>
					</div>
					<muse-snippet :code="colorfulBadge"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Badge? Please check the
					<a target="_blank" href="https://antdv.com/components/badge/">official docs</a>.
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
			title: 'Badge | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Small numerical value or status descriptor for UI elements.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
				"Status": "Status",
				"Colorful-Badge": "Colorful Badge",
			},
			colors: [
				'pink',
				'red',
				'yellow',
				'orange',
				'cyan',
				'green',
				'blue',
				'purple',
				'geekblue',
				'magenta',
				'volcano',
				'gold',
				'lime',
			],
			codeSample: `
<template>
  <div>
    <a-badge count="5">
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge count="0" show-zero>
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge>
      <a-icon slot="count" type="clock-circle" style="color: #f5222d" />
      <a href="#" class="head-example" />
    </a-badge>
  </div>
</template>`,
			status: `
<template>
  <div>
    <a-badge status="success" />
    <a-badge status="error" />
    <a-badge status="default" />
    <a-badge status="processing" />
    <a-badge status="warning" />
    <br />
    <a-badge status="success" text="Success" />
    <br />
    <a-badge status="error" text="Error" />
    <br />
    <a-badge status="default" text="Default" />
    <br />
    <a-badge status="processing" text="Processing" />
    <br />
    <a-badge status="warning" text="warning" />
  </div>
</template>`,
			colorfulBadge: `
<template>
  <div>
    <h4 style="margin-bottom: 16px">
      Presets:
    </h4>
    <div>
      <div v-for="color in colors" :key="color">
        <a-badge :color="color" :text="color" />
      </div>
    </div>
    <h4 style="margin: 16px 0">
      Custom:
    </h4>
    <div>
      <a-badge color="#f50" text="#f50" />
      <br />
      <a-badge color="#2db7f5" text="#2db7f5" />
      <br />
      <a-badge color="#87d068" text="#87d068" />
      <br />
      <a-badge color="#108ee9" text="#108ee9" />
    </div>
  </div>
</template>
<script>
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
export default {
  data() {
    return {
      colors,
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


<style lang="scss">
	.head-example {
		width: 42px;
		height: 42px;
		border-radius: 4px;
		background: #eee;
		display: inline-block;
		vertical-align: middle;
	}
	.ant-badge-count p {
		color: #fff;
    	font-size: 12px;
	}
</style>