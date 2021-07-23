<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24" id="Colors">
					<h1>Colors</h1>
					<p class="text-dark">
						Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="Primary-colors">
					<h2>Primary colors</h2>
					<p>
						Our primary palette is comprised of neutrals, white, and blue. These colors are present across most touch points from marketing to product.
					</p>
			
					<a-row :gutter="[24,24]">
						<a-col :span="24" :md="12" :lg="6">
							<div class="card-color-palette">
								<div class="color-demo bg-primary"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Primary</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#1890FF</h6>
									</div>
								</div>
								<div class="overlay bg-primary">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-primary'" v-clipboard:success="onCopy"><code>bg-primary &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-primary'" v-clipboard:success="onCopy"><code>text-primary</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-primary'" v-clipboard:success="onCopy"><code>fill-primary</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6">
							<div class="card-color-palette">
								<div class="color-demo bg-secondary"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Secondary</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#B37FEB</h6>
									</div>
								</div>
								<div class="overlay bg-secondary">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-secondary'" v-clipboard:success="onCopy"><code>.bg-secondary &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-secondary'" v-clipboard:success="onCopy"><code>.text-secondary</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-secondary'" v-clipboard:success="onCopy"><code>.fill-secondary</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6">
							<div class="card-color-palette">
								<div class="color-demo bg-success"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Success</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#52C41A</h6>
									</div>
								</div>
								<div class="overlay bg-success">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-success'" v-clipboard:success="onCopy"><code>.bg-success &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-success'" v-clipboard:success="onCopy"><code>.text-success</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-success'" v-clipboard:success="onCopy"><code>.fill-success</code></a-button>
								</div>
							</div>
						</a-col> 
						<a-col :span="24" :md="12" :lg="6">
							<div class="card-color-palette">
								<div class="color-demo bg-warning"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Warning</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#FADB14</h6>
									</div>
								</div>
								<div class="overlay bg-warning">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-warning'" v-clipboard:success="onCopy"><code>.bg-warning &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-warning'" v-clipboard:success="onCopy"><code>.text-warning</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-warning'" v-clipboard:success="onCopy"><code>.fill-warning</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6">
							<div class="card-color-palette">
								<div class="color-demo bg-dark"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Dark</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#141414</h6>
									</div>
								</div>
								<div class="overlay bg-dark">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-dark'" v-clipboard:success="onCopy"><code>.bg-dark &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-dark'" v-clipboard:success="onCopy"><code>.text-dark</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-dark'" v-clipboard:success="onCopy"><code>.fill-dark</code></a-button>
								</div>
							</div>
						</a-col> 
						<a-col :span="24" :md="12" :lg="6">
							<div class="card-color-palette">
								<div class="color-demo bg-white"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>White</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#FFFFFF</h6>
									</div>
								</div>
								<div class="overlay bg-white">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-white'" v-clipboard:success="onCopy"><code>.bg-white &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-white'" v-clipboard:success="onCopy"><code>.text-white</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-white'" v-clipboard:success="onCopy"><code>.fill-white</code></a-button>
								</div>
							</div>
						</a-col>
					</a-row>
				</section>
				<section class="mb-24" id="Neutral-colors">
					<h2>Neutral colors</h2>
					<p>
						Light neutrals are helpful for offsetting content in a primarily white layout without losing warmth and cleanliness, and are therefore often used as a background color for web components.
					</p>

					<a-row :gutter="[24,24]">
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-1"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 1</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#FFFFFF</h6>
									</div>
								</div>
								<div class="overlay bg-gray-1">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-1'" v-clipboard:success="onCopy"><code>bg-gray-1 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-1'" v-clipboard:success="onCopy"><code>text-gray-1</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-1'" v-clipboard:success="onCopy"><code>fill-gray-1</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-2"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 2</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#FAFAFA</h6>
									</div>
								</div>
								<div class="overlay bg-gray-2">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-2'" v-clipboard:success="onCopy"><code>bg-gray-2 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-2'" v-clipboard:success="onCopy"><code>text-gray-2</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-2'" v-clipboard:success="onCopy"><code>fill-gray-2</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-3"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 3</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#F5F5F5</h6>
									</div>
								</div>
								<div class="overlay bg-gray-3">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-3'" v-clipboard:success="onCopy"><code>bg-gray-3 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-3'" v-clipboard:success="onCopy"><code>text-gray-3</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-3'" v-clipboard:success="onCopy"><code>fill-gray-3</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-4"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 4</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#F0F0F0</h6>
									</div>
								</div>
								<div class="overlay bg-gray-4">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-4'" v-clipboard:success="onCopy"><code>bg-gray-4 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-4'" v-clipboard:success="onCopy"><code>text-gray-4</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-4'" v-clipboard:success="onCopy"><code>fill-gray-4</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-5"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 5</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#D9D9D9</h6>
									</div>
								</div>
								<div class="overlay bg-gray-5">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-5'" v-clipboard:success="onCopy"><code>bg-gray-5 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-5'" v-clipboard:success="onCopy"><code>text-gray-5</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-5'" v-clipboard:success="onCopy"><code>fill-gray-5</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-6"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 6</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#BFBFBF</h6>
									</div>
								</div>
								<div class="overlay bg-gray-6">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-6'" v-clipboard:success="onCopy"><code>bg-gray-6 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-6'" v-clipboard:success="onCopy"><code>text-gray-6</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-6'" v-clipboard:success="onCopy"><code>fill-gray-6</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-7"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 7</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#8C8C8C</h6>
									</div>
								</div>
								<div class="overlay bg-gray-7">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-7'" v-clipboard:success="onCopy"><code>bg-gray-7 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-7'" v-clipboard:success="onCopy"><code>text-gray-7</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-7'" v-clipboard:success="onCopy"><code>fill-gray-7</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-8"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 8</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#595959</h6>
									</div>
								</div>
								<div class="overlay bg-gray-8">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-8'" v-clipboard:success="onCopy"><code>bg-gray-8 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-8'" v-clipboard:success="onCopy"><code>text-gray-8</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-8'" v-clipboard:success="onCopy"><code>fill-gray-8</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-9"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 9</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#434343</h6>
									</div>
								</div>
								<div class="overlay bg-gray-9">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-9'" v-clipboard:success="onCopy"><code>bg-gray-9 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-9'" v-clipboard:success="onCopy"><code>text-gray-9</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-9'" v-clipboard:success="onCopy"><code>fill-gray-9</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-10"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 10</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#262626</h6>
									</div>
								</div>
								<div class="overlay bg-gray-10">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-10'" v-clipboard:success="onCopy"><code>bg-gray-10 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-10'" v-clipboard:success="onCopy"><code>text-gray-10</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-10'" v-clipboard:success="onCopy"><code>fill-gray-10</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-11"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 11</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#1F1F1F</h6>
									</div>
								</div>
								<div class="overlay bg-gray-11">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-11'" v-clipboard:success="onCopy"><code>bg-gray-11 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-11'" v-clipboard:success="onCopy"><code>text-gray-11</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-11'" v-clipboard:success="onCopy"><code>fill-gray-11</code></a-button>
								</div>
							</div>
						</a-col>
						<a-col :span="24" :md="12" :lg="6" :xl="6">
							<div class="card-color-palette">
								<div class="color-demo bg-gray-12"></div>
								<div class="color-code">
									<div class="color-name">
										<small>NAME</small>
										<h6>Gray 12</h6>
									</div>
									<div class="color-hex">
										<small>HEX</small>
										<h6>#141414</h6>
									</div>
								</div>
								<div class="overlay bg-gray-12">
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'bg-gray-12'" v-clipboard:success="onCopy"><code>bg-gray-12 &nbsp;</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'text-gray-12'" v-clipboard:success="onCopy"><code>text-gray-12</code></a-button>
									<a-button icon="copy" size="small" class="btn-copy" v-clipboard:copy="'fill-gray-12'" v-clipboard:success="onCopy"><code>fill-gray-12</code></a-button>
								</div>
							</div>
						</a-col>
					</a-row>
			
				</section>
				
			</div>
			<muse-anchor :anchors="anchors"></muse-anchor>
		</div>
	</div>
  
</template>

<script>

export default {
	head () {
		return {
			title: 'Colors | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Colors": "Colors",
				"Primary-colors": "Primary colors",
				"Neutral-colors": "Neutral colors",
			},
		}
	},
	methods: {
		onCopy: function (e) {
			this.$message.success({
				content: `"${e.text}" copied!`,
			});
		},
	}
}
</script>


<style scoped lang="scss">
</style>