<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24" id="Introduction">
					<h1>Ant Design of Vue</h1>
					<p class="text-dark">
						Following the Ant Design specification, we developed a Vue UI library <code>antd</code> that contains a set of high quality components and demos for building rich, interactive user interfaces.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="Features">
					<h2>Features</h2>
					<ul class="font-semibold credits">
						<li>An enterprise-class UI design language for web applications.</li>
						<li>A set of high-quality Vue components out of the box.</li>
						<li>Shared Ant Design of React design resources.</li>
					</ul>
				</section>
				<section class="mb-24" id="Environment-Support">
					<h2>Environment Support</h2>
					<ul class="font-semibold credits">
						<li>Modern browsers and Internet Explorer 9+ (with <a href="https://www.antdv.com/docs/vue/getting-started/#Compatibility">polyfills</a>)</li>
						<li>Server-side Rendering</li>
						<li><a href="https://electronjs.org/">Electron</a></li>
					</ul>
				</section>
				<section class="mb-24">
					<table><thead><tr><th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px"></a>IE / Edge</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a>Firefox</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a>Chrome</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a>Safari</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px"></a>Opera</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px"></a>Electron</th></tr></thead> <tbody><tr><td>IE9, IE10, IE11, Edge</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td></tr></tbody></table>
				</section>
				<section class="mb-24" id="Version">
					<h2>Version</h2>
					<ul class="font-semibold credits">
						<li>Stable: <a href="https://www.npmjs.org/package/ant-design-vue"><img src="https://img.shields.io/npm/v/ant-design-vue.svg?style=flat-square" alt="npm package"></a></li>
					</ul>
					<p>You can subscribe to this feed for new version notifications: https://github.com/vueComponent/ant-design-vue/releases.atom</p>
				</section>
				<section class="mb-24" id="Installation">
					<h2>Installation</h2>
					<h3>Using npm or yarn</h3>
					<p>We recommend using npm or yarn to install，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.</p>
					<muse-snippet :code="npmInstall" lang="bash"></muse-snippet>
					<muse-snippet :code="yarnInstall" lang="bash" class="mb-24"></muse-snippet>
					<p>If you are in a bad network environment，you can try other registries and tools like <a href="https://github.com/cnpm/cnpm">cnpm</a>.</p>
				</section>
   				<a-divider />

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Documentation on Ant Design of Vue? Please check the
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
			title: 'Ant Design of Vue | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Following the Ant Design specification, we developed a Vue UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Introduction": "Introduction",
				"Features": "Features",
				"Environment-Support": "Environment Support",
				"Version": "Version",
				"Installation": "Installation",
			},
			npmInstall: `
npm install ant-design-vue --save`,
			yarnInstall: `
yarn add ant-design-vue`,
		}
	},
}
</script>


<style scoped lang="scss">
	table {
	    width: 100%;
	}
	table th,
	table td {
		padding: 10px 20px;
	}
	table th {
		background-color: #eeeeee;
		border-bottom: 2px solid #dddddd;
	}
	table th img {
		margin-right: 5px;
		vertical-align: -5px;
		width: 20px;
		height: 20px;
	}
	table td {
		border-bottom: 2px solid #dddddd;
	}

</style>