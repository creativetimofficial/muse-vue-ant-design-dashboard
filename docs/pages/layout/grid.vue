<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Grid</h1>
					<p class="text-dark">
						24 Grids System
					</p>
				</section>
   				<a-divider />
				<h2>Examples</h2>
				<section class="mb-24" id="Basic-Grid">
					<a-divider orientation="left">Basic Grid</a-divider>
					<p>
						From the stack to the horizontal arrangement.
						You can create a basic grid system by using a single set of Row and Col grid assembly, all of the columns (Col) must be placed in Row.
					</p>
					<div class="showcase">
						<div class="grid-demo">
							<a-row>
								<a-col :span="12">
									col-12
								</a-col>
								<a-col :span="12">
									col-12
								</a-col>
							</a-row>
							<a-row>
								<a-col :span="8">
									col-8
								</a-col>
								<a-col :span="8">
									col-8
								</a-col>
								<a-col :span="8">
									col-8
								</a-col>
							</a-row>
							<a-row>
								<a-col :span="6">
									col-6
								</a-col>
								<a-col :span="6">
									col-6
								</a-col>
								<a-col :span="6">
									col-6
								</a-col>
								<a-col :span="6">
									col-6
								</a-col>
							</a-row>
						</div>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Grid? Please check the
					<a target="_blank" href="https://antdv.com/components/grid/">official docs</a>.
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
			title: 'Grid | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: '24 Grids System' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Basic-Grid": "Basic Grid",
			},
			codeSample: `
<template>
  <div>
    <a-row>
      <a-col :span="12">
        col-12
      </a-col>
      <a-col :span="12">
        col-12
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="8">
        col-8
      </a-col>
      <a-col :span="8">
        col-8
      </a-col>
      <a-col :span="8">
        col-8
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6">
        col-6
      </a-col>
      <a-col :span="6">
        col-6
      </a-col>
      <a-col :span="6">
        col-6
      </a-col>
      <a-col :span="6">
        col-6
      </a-col>
    </a-row>
  </div>
</template>
`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
	.grid-demo .ant-row>div {
		padding: 15px 0;
		text-align: center;
		border-radius: 0;
		min-height: 30px;
		margin-top: 8px;
		margin-bottom: 8px;
		color: #fff;
	}
	.grid-demo .ant-row>div:nth-child(odd) {
		background: rgba(0,160,233,.7);
	}
	.grid-demo .ant-row>div:nth-child(even) {
		background: #00a0e9
	}
</style>