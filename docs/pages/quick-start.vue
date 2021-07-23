<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24" id="Quick-Start">
					<h1>Quick Start</h1>
					<p class="text-dark">
						Ant Design Vue is dedicated to providing a good development experience for programmers. Make sure that you had installed <a href="https://nodejs.org/">Node.js</a> (> v8.9) correctly.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="Quick-Project-Installation">
					<h2>Quick Project Installation</h2>
					<p>
						To install the Muse Dashboard Template, you only have run this command in your npm project :
					</p>
					<muse-snippet :code="quickInstallation" lang="bash"></muse-snippet>
				</section>
				<section class="mb-24" id="Direct-Download">
					<h2>Direct Download</h2>
					<p>
						You can also download and unzip or clone the project, and then run one of the installation commands below :
					</p>
					<muse-snippet :code="directDownload" lang="bash"></muse-snippet>
				</section>
				<section class="mb-24" id="Import-ant-design-vue">
					<h2>Import ant-design-vue</h2>
				</section>
				<section class="mb-24">
					<a-divider orientation="left">1. Installation</a-divider>
					<p><a href="https://github.com/vuejs/vue-cli">vue-cli</a></p>
					<muse-snippet :code="installation" lang="bash"></muse-snippet>
				</section>
				<section class="mb-24">
					<a-divider orientation="left">2. Create a New Project</a-divider>
					<p>A new project can be created using CLI tools.</p>
					<muse-snippet :code="vueCreate" lang="bash"></muse-snippet>
					<p>And, setup your vue project configuration.</p>
				</section>
				<section class="mb-24">
					<a-divider orientation="left">3. Use antd's Components</a-divider>
					<p>A new project can be created using CLI tools.</p>
					<muse-snippet :code="installAntD" lang="bash"></muse-snippet>
					<p>Fully import</p>
					<muse-snippet :code="importAntD" lang="javascript"></muse-snippet>
					<p>The above imports Antd entirely. Note that CSS file needs to be imported separately.</p>
					<h6>Only import the components you need</h6>
					<muse-snippet :code="importSome" lang="javascript"></muse-snippet>
				</section>
				<section class="mb-24" id="Compatibility">
					<h2>Compatibility</h2>
					<p>Ant Design Vue supports all the modern browsers and IE9+.</p>
					<p>You need to provide <a href="https://github.com/es-shims/es5-shim">es5-shim</a> and <a href="https://github.com/paulmillr/es6-shim">es6-shim</a> and other polyfills for IE browsers.</p>
					<p>If you are using babel, we strongly recommend using <a href="https://babeljs.io/docs/usage/polyfill/">babel-polyfill</a> and <a href="https://babeljs.io/docs/plugins/transform-runtime/">babel-plugin-transform-runtime</a> instead of those two shims.</p>
				</section>
   				<a-divider />

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Documentation on getting started? Please check the
					<a target="_blank" href="https://antdv.com/docs/vue/getting-started/">official docs</a>.
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
			title: 'Quick Start | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Ant Design Vue is dedicated to providing a good development experience for programmers.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Quick-Project-Installation": "Quick Project Installation",
				"Direct-Download": "Direct Download",
				"Import-ant-design-vue": "Import ant-design-vue",
				"Compatibility": "Compatibility",
				"Compatibility": "Compatibility",
			},
			quickInstallation: `
npm install muse-ant-vue`,
			directDownload: `
npm install
# OR
yarn`,
			installation: `
npm install -g @vue/cli
# OR
yarn global add @vue/cli`,
			vueCreate: `
vue create antd-demo`,
			installAntD: `
npm i --save ant-design-vue`,
			importAntD: `
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});`,
			importSome: `
import Vue from 'vue';
import { Button, message } from 'ant-design-vue';
import App from './App';

Vue.config.productionTip = false;

/* v1.1.2 */
Vue.component(Button.name, Button);
Vue.component(Button.Group.name, Button.Group);

/* v1.1.3+ Automatically register components under Button, such as Button.Group */
Vue.use(Button);

Vue.prototype.$message = message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});`,
		}
	},
}
</script>


<style scoped lang="scss">
</style>