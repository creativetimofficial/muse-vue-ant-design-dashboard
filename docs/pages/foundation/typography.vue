<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Typography</h1>
					<p class="text-dark">
						Documentation and examples for Muse Dashboard typography.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="Headings">
					<h2>Headings</h2>
					<p>
						All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are available.
					</p>
				</section>
				<section class="mb-24">
					<a-divider orientation="left">Regular</a-divider>
					<table>
						<thead>
							<tr>
								<th>Heading</th>
								<th>Example</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
								<p><code>&lt;h1&gt;&lt;/h1&gt;</code></p>
								</td>
								<td><span class="h1 font-regular">h1. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h2&gt;&lt;/h2&gt;</code></p>
								</td>
								<td><span class="h2 font-regular">h2. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h3&gt;&lt;/h3&gt;</code></p>
								</td>
								<td><span class="h3 font-regular">h3. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h4&gt;&lt;/h4&gt;</code></p>
								</td>
								<td><span class="h4 font-regular">h4. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h5&gt;&lt;/h5&gt;</code></p>
								</td>
								<td><span class="h5 font-regular">h5. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h6&gt;&lt;/h6&gt;</code></p>
								</td>
								<td><span class="h6 font-regular">h6. Muse heading</span></td>
							</tr>
						</tbody>
					</table>
					<muse-snippet :code="regularHeadings"></muse-snippet>
				</section>
				<section class="mb-24">
					<a-divider orientation="left">Semibold</a-divider>
					<table>
						<thead>
							<tr>
								<th>Heading</th>
								<th>Example</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
								<p><code>&lt;h1&gt;&lt;/h1&gt;</code></p>
								</td>
								<td><span class="h1 font-semibold">h1. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h2&gt;&lt;/h2&gt;</code></p>
								</td>
								<td><span class="h2 font-semibold">h2. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h3&gt;&lt;/h3&gt;</code></p>
								</td>
								<td><span class="h3 font-semibold">h3. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h4&gt;&lt;/h4&gt;</code></p>
								</td>
								<td><span class="h4 font-semibold">h4. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h5&gt;&lt;/h5&gt;</code></p>
								</td>
								<td><span class="h5 font-semibold">h5. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h6&gt;&lt;/h6&gt;</code></p>
								</td>
								<td><span class="h6 font-semibold">h6. Muse heading</span></td>
							</tr>
						</tbody>
					</table>
					<muse-snippet :code="semiBoldHeadings"></muse-snippet>
				</section>
				<section class="mb-24">
					<a-divider orientation="left">Bold</a-divider>
					<table>
						<thead>
							<tr>
								<th>Heading</th>
								<th>Example</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
								<p><code>&lt;h1&gt;&lt;/h1&gt;</code></p>
								</td>
								<td><span class="h1">h1. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h2&gt;&lt;/h2&gt;</code></p>
								</td>
								<td><span class="h2">h2. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h3&gt;&lt;/h3&gt;</code></p>
								</td>
								<td><span class="h3">h3. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h4&gt;&lt;/h4&gt;</code></p>
								</td>
								<td><span class="h4">h4. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h5&gt;&lt;/h5&gt;</code></p>
								</td>
								<td><span class="h5">h5. Muse heading</span></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;h6&gt;&lt;/h6&gt;</code></p>
								</td>
								<td><span class="h6">h6. Muse heading</span></td>
							</tr>
						</tbody>
					</table>
					<muse-snippet :code="boldHeadings"></muse-snippet>
				</section>
				<section class="mb-24" id="Heading-Classes">
					<h2>Heading Classes</h2>
					<p>
						All HTML headings are also available using heading classes from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.
					</p>
					<table>
						<thead>
							<tr>
								<th>Heading</th>
								<th>Example</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
								<p><code>&lt;p class=&quot;h1&quot;&gt;&lt;/p&gt;</code></p>
								</td>
								<td><p class="h1">h1. Muse heading</p></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;p class=&quot;h2&quot;&gt;&lt;/p&gt;</code></p>
								</td>
								<td><p class="h2">h2. Muse heading</p></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;p class=&quot;h3&quot;&gt;&lt;/p&gt;</code></p>
								</td>
								<td><p class="h3">h3. Muse heading</p></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;p class=&quot;h4&quot;&gt;&lt;/p&gt;</code></p>
								</td>
								<td><p class="h4">h4. Muse heading</p></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;p class=&quot;h5&quot;&gt;&lt;/p&gt;</code></p>
								</td>
								<td><p class="h5">h5. Muse heading</p></td>
							</tr>
							<tr>
								<td>
								<p><code>&lt;p class=&quot;h6&quot;&gt;&lt;/p&gt;</code></p>
								</td>
								<td><p class="h6">h6. Muse heading</p></td>
							</tr>
						</tbody>
					</table>
					<muse-snippet :code="headingsClasses"></muse-snippet>
				</section>
				<section class="mb-24" id="Paragraphs">
					<h2>Paragraphs</h2>
					<div class="showcase pb-10">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero porro voluptatum
							laboriosam eveniet asperiores, expedita provident commodi ullam perferendis id,
							rem enim quisquam earum architecto ut nobis repellendus magni dolorum.
						</p>
					</div>
					<muse-snippet :code="paragraph"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue? Please check the
					<a target="_blank" href="https://antdv.com/docs/vue/introduce/">official docs</a>.
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
			title: 'Typography | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Documentation and examples for Muse Dashboard typography.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Headings": "Headings",
				"Heading-Classes": "Heading Classes",
				"Paragraphs": "Paragraphs",
			},
			regularHeadings: `
<h1 class="font-regular">h1. Muse heading</h1>
<h2 class="font-regular">h2. Muse heading</h2>
<h3 class="font-regular">h3. Muse heading</h3>
<h4 class="font-regular">h4. Muse heading</h4>
<h5 class="font-regular">h5. Muse heading</h5>
<h6 class="font-regular">h6. Muse heading</h6>`,
			semiBoldHeadings: `
<h1 class="font-semibold">h1. Muse heading</h1>
<h2 class="font-semibold">h2. Muse heading</h2>
<h3 class="font-semibold">h3. Muse heading</h3>
<h4 class="font-semibold">h4. Muse heading</h4>
<h5 class="font-semibold">h5. Muse heading</h5>
<h6 class="font-semibold">h6. Muse heading</h6>`,
			boldHeadings: `
<h1>h1. Muse heading</h1>
<h2>h2. Muse heading</h2>
<h3>h3. Muse heading</h3>
<h4>h4. Muse heading</h4>
<h5>h5. Muse heading</h5>
<h6>h6. Muse heading</h6>`,
			headingsClasses: `
<p class="h1">h1. Muse heading</p>
<p class="h2">h2. Muse heading</p>
<p class="h3">h3. Muse heading</p>
<p class="h4">h4. Muse heading</p>
<p class="h5">h5. Muse heading</p>
<p class="h6">h6. Muse heading</p>`,
			paragraph: `
<p>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero porro voluptatum
	laboriosam eveniet asperiores, expedita provident commodi ullam perferendis id,
	rem enim quisquam earum architecto ut nobis repellendus magni dolorum.
</p>`,
			componentRegistration: `
import { Button } from 'ant-design-vue';
Vue.use(Button);`,
		}
	},
}
</script>


<style lang="scss" scoped>
	table {
	    width: 100%;
	}
	table th,
	table td {
		padding: 10px 20px;
		border: 1px solid #dddddd;
		vertical-align: middle;
	}
	table th {
		background-color: #eeeeee;
	}
	table th,
	table td {
		>* {
			margin-bottom: 0;
		}
	}

</style>