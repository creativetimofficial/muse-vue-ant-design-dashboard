<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Select</h1>
					<p class="text-dark">
						Select component to select value from options.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>A dropdown menu for displaying choices - an elegant alternative to the native <code>&lt;select&gt;</code> element.</li>
						<li>Utilizing Radio is recommended when there are fewer total options (less than 5).</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Basic Usage
					</p>
					<div class="showcase">
						<a-select default-value="lucy" style="width: 120px">
							<a-select-option value="jack">
								Jack
							</a-select-option>
							<a-select-option value="lucy">
								Lucy
							</a-select-option>
							<a-select-option value="disabled" disabled>
								Disabled
							</a-select-option>
							<a-select-option value="Yiminghe">
								yiminghe
							</a-select-option>
						</a-select>
						<a-select default-value="lucy" style="width: 120px" disabled>
							<a-select-option value="lucy">
								Lucy
							</a-select-option>
						</a-select>
						<a-select default-value="lucy" style="width: 120px" loading>
							<a-select-option value="lucy">
								Lucy
							</a-select-option>
						</a-select>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Select? Please check the
					<a target="_blank" href="https://antdv.com/components/select/">official docs</a>.
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
			title: 'Select | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Select component to select value from options.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
			},
			codeSample: `
<template>
  <div>
    <a-select default-value="lucy" style="width: 120px" @change="handleChange">
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled
      </a-select-option>
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" disabled>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" loading>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(\`selected \${value}\`);
    },
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
</style>