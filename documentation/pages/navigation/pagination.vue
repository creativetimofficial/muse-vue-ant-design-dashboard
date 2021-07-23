<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Pagination</h1>
					<p class="text-dark">
						A long list can be divided into several pages by ‘Pagination’, and only one page will be loaded at a time.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>When it will take a long time to load/render all items.</li>
						<li>If you want to browse the data by navigating through pages.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Basic pagination.
					</p>
					<div class="showcase">
  						<a-pagination v-model="current" :total="50" show-less-items />
					</div>
					<muse-snippet :code="basicPaginationCode"></muse-snippet>
				</section>
				<section class="mb-24" id="More">
					<a-divider orientation="left">More</a-divider>
					<p>
						More pages.
					</p>
					<div class="showcase">
						<a-pagination :default-current="6" :total="500" />
					</div>
					<muse-snippet :code="basicPaginationCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Pagination? Please check the
					<a target="_blank" href="https://antdv.com/components/pagination/">official docs</a>.
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
			title: 'Pagination | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'A long list can be divided into several pages by ‘Pagination’, and only one page will be loaded at a time.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
				"More": "More",
			},
      		current: 2,
			basicPaginationCode: `
<template>
  <a-pagination v-model="current" :total="50" show-less-items />
</template>
<script>
export default {
  data() {
    return {
      current: 2,
    };
  },
};
<\/script>
`,
			morePaginationCode: `
<template>
	<a-pagination :default-current="6" :total="500" />
</template>
`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
</style>