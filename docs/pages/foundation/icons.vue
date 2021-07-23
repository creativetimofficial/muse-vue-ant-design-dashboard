<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Icons</h1>
					<p class="text-dark">
						Semantic vector graphics.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24">
					<h2>Search Icons</h2>
					<div style="display: flex; justify-content: space-between;">
						<a-radio-group v-model="theme" @change="onThemeChange" button-style="solid" style="min-width: 250px;">
							<a-radio-button value="outlined">Outlined</a-radio-button>
							<a-radio-button value="filled">Filled</a-radio-button>
							<a-radio-button value="twoTone">Two Tone</a-radio-button>
						</a-radio-group>

						<a-input-search placeholder="Search icon here, click icon to copy code" v-model="searchQuery" @change="onSearch" allow-clear />
					</div>
				</section>
   				<a-divider />
				<section class="mb-24" id="directionalIcons">
					<h2>Directional Icons <small>( {{ directionalIcons.length }} )</small></h2>
					<ul class="icons-list" v-if="directionalIcons.length">
						<li v-for="(icon, key) in directionalIcons" :key="key" v-clipboard:copy="icon.html" v-clipboard:success="onCopy">
							<a-icon :type="icon.type" :theme="theme"/>
							<code>{{ icon.type }}</code>
						</li>
					</ul>
  					<a-empty v-else :description="'No matches for ' + searchQuery + ' in Directional Icons'" />
				</section>
   				<a-divider />
				<section class="mb-24" id="suggestedIcons">
					<h2>Suggested Icons <small>( {{ suggestedIcons.length }} )</small></h2>
					<ul class="icons-list" v-if="suggestedIcons.length">
						<li v-for="(icon, key) in suggestedIcons" :key="key" v-clipboard:copy="icon.html" v-clipboard:success="onCopy">
							<a-icon :type="icon.type" :theme="theme"/>
							<code>{{ icon.type }}</code>
						</li>
					</ul>
  					<a-empty v-else :description="'No matches for ' + searchQuery + ' in Suggested Icons'" />
				</section>
   				<a-divider />
				<section class="mb-24" id="editorIcons">
					<h2>Editor Icons <small>( {{ editorIcons.length }} )</small></h2>
					<ul class="icons-list" v-if="editorIcons.length">
						<li v-for="(icon, key) in editorIcons" :key="key" v-clipboard:copy="icon.html" v-clipboard:success="onCopy">
							<a-icon :type="icon.type" :theme="theme"/>
							<code>{{ icon.type }}</code>
						</li>
					</ul>
  					<a-empty v-else :description="'No matches for ' + searchQuery + ' in Editor Icons'" />
				</section>
   				<a-divider />
				<section class="mb-24" id="dataIcons">
					<h2>Data Icons <small>( {{ dataIcons.length }} )</small></h2>
					<ul class="icons-list" v-if="dataIcons.length">
						<li v-for="(icon, key) in dataIcons" :key="key" v-clipboard:copy="icon.html" v-clipboard:success="onCopy">
							<a-icon :type="icon.type" :theme="theme"/>
							<code>{{ icon.type }}</code>
						</li>
					</ul>
  					<a-empty v-else :description="'No matches for ' + searchQuery + ' in Data Icons'" />
				</section>
   				<a-divider />
				<section class="mb-24" id="brandAndLogos">
					<h2>Brand and Logos <small>( {{ brandAndLogos.length }} )</small></h2>
					<ul class="icons-list" v-if="brandAndLogos.length">
						<li v-for="(icon, key) in brandAndLogos" :key="key" v-clipboard:copy="icon.type" v-clipboard:success="onCopy">
							<a-icon :type="icon.type" :theme="theme"/>
							<code>{{ icon.type }}</code>
						</li>
					</ul>
  					<a-empty v-else :description="'No matches for ' + searchQuery + ' in Brand and Logos Icons'" />
				</section>
   				<a-divider />
				<section class="mb-24" id="applicationIcons">
					<h2>Application Icons <small>( {{ applicationIcons.length }} )</small></h2>
					<ul class="icons-list" v-if="applicationIcons.length">
						<li v-for="(icon, key) in applicationIcons" :key="key" v-clipboard:copy="icon.html" v-clipboard:success="onCopy">
							<a-icon :type="icon.type" :theme="theme"/>
							<code>{{ icon.type }}</code>
						</li>
					</ul>
  					<a-empty v-else :description="'No matches for ' + searchQuery + ' in Application Icons'" />
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Icons? Please check the
					<a target="_blank" href="https://antdv.com/components/icon/">official docs</a>.
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
			title: 'Icons | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Semantic vector graphics.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"directionalIcons": "Directional Icons",
				"suggestedIcons": "Suggested Icons",
				"editorIcons": "Editor Icons",
				"dataIcons": "Data Icons",
				"brandAndLogos": "Brand And Logos",
				"applicationIcons": "Application Icons",
			},
			searchQuery: "",
			theme: "outlined",
			icons: {
				directionalIcons: [
					{ type: 'step-backward', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'step-forward', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'fast-backward', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'fast-forward', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'shrink', theme: 'outlined', themes: ['outlined'] },
					{ type: 'arrows-alt', theme: 'outlined', themes: ['outlined'] },
					{ type: 'down', theme: 'outlined', themes: ['outlined'] },
					{ type: 'up', theme: 'outlined', themes: ['outlined'] },
					{ type: 'left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'caret-up', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'caret-down', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'caret-left', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'caret-right', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'up-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'down-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'left-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'right-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'double-right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'double-left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'vertical-left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'vertical-right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'vertical-align-top', theme: 'outlined', themes: ['outlined'] },
					{ type: 'vertical-align-middle', theme: 'outlined', themes: ['outlined'] },
					{ type: 'vertical-align-bottom', theme: 'outlined', themes: ['outlined'] },
					{ type: 'forward', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'backward', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'rollback', theme: 'outlined', themes: ['outlined'] },
					{ type: 'enter', theme: 'outlined', themes: ['outlined'] },
					{ type: 'retweet', theme: 'outlined', themes: ['outlined'] },
					{ type: 'swap', theme: 'outlined', themes: ['outlined'] },
					{ type: 'swap-left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'swap-right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'arrow-up', theme: 'outlined', themes: ['outlined'] },
					{ type: 'arrow-down', theme: 'outlined', themes: ['outlined'] },
					{ type: 'arrow-left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'arrow-right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'play-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'up-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'down-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'left-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'right-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'login', theme: 'outlined', themes: ['outlined'] },
					{ type: 'logout', theme: 'outlined', themes: ['outlined'] },
					{ type: 'menu-fold', theme: 'outlined', themes: ['outlined'] },
					{ type: 'menu-unfold', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-bottom', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-horizontal', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-inner', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-outer', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-top', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border-verticle', theme: 'outlined', themes: ['outlined'] },
					{ type: 'pic-center', theme: 'outlined', themes: ['outlined'] },
					{ type: 'pic-left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'pic-right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'radius-bottomleft', theme: 'outlined', themes: ['outlined'] },
					{ type: 'radius-bottomright', theme: 'outlined', themes: ['outlined'] },
					{ type: 'radius-upleft', theme: 'outlined', themes: ['outlined'] },
					{ type: 'radius-upright', theme: 'outlined', themes: ['outlined'] },
					{ type: 'fullscreen', theme: 'outlined', themes: ['outlined'] },
					{ type: 'fullscreen-exit', theme: 'outlined', themes: ['outlined'] },
				],
				suggestedIcons: [
					{ type: 'question', theme: 'outlined', themes: ['outlined'] },
					{ type: 'question-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'plus', theme: 'outlined', themes: ['outlined'] },
					{ type: 'plus-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'pause', theme: 'outlined', themes: ['outlined'] },
					{ type: 'pause-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'minus', theme: 'outlined', themes: ['outlined'] },
					{ type: 'minus-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'plus-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'minus-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'info', theme: 'outlined', themes: ['outlined'] },
					{ type: 'info-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'exclamation', theme: 'outlined', themes: ['outlined'] },
					{ type: 'exclamation-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'close', theme: 'outlined', themes: ['outlined'] },
					{ type: 'close-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'close-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'check', theme: 'outlined', themes: ['outlined'] },
					{ type: 'check-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'check-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'clock-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'warning', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'issues-close', theme: 'outlined', themes: ['outlined'] },
					{ type: 'stop', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
				],
				editorIcons: [
					{ type: 'edit', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'form', theme: 'outlined', themes: ['outlined'] },
					{ type: 'copy', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'scissor', theme: 'outlined', themes: ['outlined'] },
					{ type: 'delete', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'snippets', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'diff', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'highlight', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'align-center', theme: 'outlined', themes: ['outlined'] },
					{ type: 'align-left', theme: 'outlined', themes: ['outlined'] },
					{ type: 'align-right', theme: 'outlined', themes: ['outlined'] },
					{ type: 'bg-colors', theme: 'outlined', themes: ['outlined'] },
					{ type: 'bold', theme: 'outlined', themes: ['outlined'] },
					{ type: 'italic', theme: 'outlined', themes: ['outlined'] },
					{ type: 'underline', theme: 'outlined', themes: ['outlined'] },
					{ type: 'strikethrough', theme: 'outlined', themes: ['outlined'] },
					{ type: 'redo', theme: 'outlined', themes: ['outlined'] },
					{ type: 'undo', theme: 'outlined', themes: ['outlined'] },
					{ type: 'zoom-in', theme: 'outlined', themes: ['outlined'] },
					{ type: 'zoom-out', theme: 'outlined', themes: ['outlined'] },
					{ type: 'font-colors', theme: 'outlined', themes: ['outlined'] },
					{ type: 'font-size', theme: 'outlined', themes: ['outlined'] },
					{ type: 'line-height', theme: 'outlined', themes: ['outlined'] },
					{ type: 'dash', theme: 'outlined', themes: ['outlined'] },
					{ type: 'small-dash', theme: 'outlined', themes: ['outlined'] },
					{ type: 'sort-ascending', theme: 'outlined', themes: ['outlined'] },
					{ type: 'sort-descending', theme: 'outlined', themes: ['outlined'] },
					{ type: 'drag', theme: 'outlined', themes: ['outlined'] },
					{ type: 'ordered-list', theme: 'outlined', themes: ['outlined'] },
					{ type: 'unordered-list', theme: 'outlined', themes: ['outlined'] },
					{ type: 'radius-setting', theme: 'outlined', themes: ['outlined'] },
					{ type: 'column-width', theme: 'outlined', themes: ['outlined'] },
					{ type: 'column-height', theme: 'outlined', themes: ['outlined'] },
				],
				dataIcons: [
					{ type: 'area-chart', theme: 'outlined', themes: ['outlined'] },
					{ type: 'pie-chart', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'bar-chart', theme: 'outlined', themes: ['outlined'] },
					{ type: 'dot-chart', theme: 'outlined', themes: ['outlined'] },
					{ type: 'line-chart', theme: 'outlined', themes: ['outlined'] },
					{ type: 'radar-chart', theme: 'outlined', themes: ['outlined'] },
					{ type: 'heat-map', theme: 'outlined', themes: ['outlined'] },
					{ type: 'fall', theme: 'outlined', themes: ['outlined'] },
					{ type: 'rise', theme: 'outlined', themes: ['outlined'] },
					{ type: 'stock', theme: 'outlined', themes: ['outlined'] },
					{ type: 'box-plot', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'fund', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'sliders', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
				],
				brandAndLogos: [
					{ type: 'android', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'apple', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'windows', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'ie', theme: 'outlined', themes: ['outlined'] },
					{ type: 'chrome', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'github', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'aliwangwang', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'dingding', theme: 'outlined', themes: ['outlined'] },
					{ type: 'weibo-square', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'weibo-circle', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'taobao-circle', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'html5', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'weibo', theme: 'outlined', themes: ['outlined'] },
					{ type: 'twitter', theme: 'outlined', themes: ['outlined'] },
					{ type: 'wechat', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'youtube', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'alipay-circle', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'taobao', theme: 'outlined', themes: ['outlined'] },
					{ type: 'skype', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'qq', theme: 'outlined', themes: ['outlined'] },
					{ type: 'medium-workmark', theme: 'outlined', themes: ['outlined'] },
					{ type: 'gitlab', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'medium', theme: 'outlined', themes: ['outlined'] },
					{ type: 'linkedin', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'google-plus', theme: 'outlined', themes: ['outlined'] },
					{ type: 'dropbox', theme: 'outlined', themes: ['outlined'] },
					{ type: 'facebook', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'codepen', theme: 'outlined', themes: ['outlined'] },
					{ type: 'code-sandbox', theme: 'outlined', themes: ['outlined'] },
					{ type: 'amazon', theme: 'outlined', themes: ['outlined'] },
					{ type: 'google', theme: 'outlined', themes: ['outlined'] },
					{ type: 'codepen-circle', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'alipay', theme: 'outlined', themes: ['outlined'] },
					{ type: 'ant-design', theme: 'outlined', themes: ['outlined'] },
					{ type: 'ant-cloud', theme: 'outlined', themes: ['outlined'] },
					{ type: 'aliyun', theme: 'outlined', themes: ['outlined'] },
					{ type: 'zhihu', theme: 'outlined', themes: ['outlined'] },
					{ type: 'slack', theme: 'outlined', themes: ['outlined'] },
					{ type: 'slack-square', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'behance', theme: 'outlined', themes: ['outlined'] },
					{ type: 'behance-square', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'dribbble', theme: 'outlined', themes: ['outlined'] },
					{ type: 'dribbble-square', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'instagram', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'yuque', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'alibaba', theme: 'outlined', themes: ['outlined'] },
					{ type: 'yahoo', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'reddit', theme: 'outlined', themes: ['outlined'] },
					{ type: 'sketch', theme: 'outlined', themes: ['outlined'] },
				],
				applicationIcons: [
					{ type: 'account-book', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'alert', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'api', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'appstore', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'audio', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'bank', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'bell', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'book', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'bug', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'bulb', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'calculator', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'build', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'calendar', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'camera', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'car', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'carry-out', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'cloud', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'code', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'compass', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'contacts', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'container', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'control', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'credit-card', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'crown', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'customer-service', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'dashboard', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'database', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'dislike', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'environment', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'experiment', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'eye-invisible', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'eye', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-add', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-excel', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-exclamation', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-image', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-markdown', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-pdf', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-ppt', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-text', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-unknown', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-word', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file-zip', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'file', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'filter', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'fire', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'flag', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'folder-add', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'folder', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'folder-open', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'frown', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'funnel-plot', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'gift', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'hdd', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'heart', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'home', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'hourglass', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'idcard', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'insurance', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'interaction', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'layout', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'like', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'lock', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'mail', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'medicine-box', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'meh', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'message', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'mobile', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'money-collect', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'pay-circle', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'notification', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'phone', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'picture', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'play-square', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'printer', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'profile', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'project', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'pushpin', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'property-safety', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'read', theme: 'outlined', themes: ['outlined', 'filled'] },
					{ type: 'reconciliation', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'red-envelope', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'rest', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'rocket', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'safety-certificate', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'save', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'schedule', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'security-scan', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'setting', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'shop', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'shopping', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'skin', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'smile', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'sound', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'star', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'switcher', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'tablet', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'tag', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'tags', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'tool', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'thunderbolt', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'trophy', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'unlock', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'usb', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'video-camera', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'wallet', theme: 'outlined', themes: ['outlined', 'filled', 'twoTone'] },
					{ type: 'apartment', theme: 'outlined', themes: ['outlined'] },
					{ type: 'audit', theme: 'outlined', themes: ['outlined'] },
					{ type: 'barcode', theme: 'outlined', themes: ['outlined'] },
					{ type: 'bars', theme: 'outlined', themes: ['outlined'] },
					{ type: 'block', theme: 'outlined', themes: ['outlined'] },
					{ type: 'border', theme: 'outlined', themes: ['outlined'] },
					{ type: 'branches', theme: 'outlined', themes: ['outlined'] },
					{ type: 'ci', theme: 'outlined', themes: ['outlined', 'twoTone'] },
					{ type: 'cloud-download', theme: 'outlined', themes: ['outlined'] },
					{ type: 'cloud-server', theme: 'outlined', themes: ['outlined'] },
					{ type: 'cloud-sync', theme: 'outlined', themes: ['outlined'] },
					{ type: 'cloud-upload', theme: 'outlined', themes: ['outlined'] },
					{ type: 'cluster', theme: 'outlined', themes: ['outlined'] },
					{ type: 'coffee', theme: 'outlined', themes: ['outlined'] },
					{ type: 'copyright', theme: 'outlined', themes: ['outlined', 'twoTone'] },
					{ type: 'deployment-unit', theme: 'outlined', themes: ['outlined'] },
					{ type: 'desktop', theme: 'outlined', themes: ['outlined'] },
					{ type: 'disconnect', theme: 'outlined', themes: ['outlined'] },
					{ type: 'dollar', theme: 'outlined', themes: ['outlined', 'twoTone'] },
					{ type: 'download', theme: 'outlined', themes: ['outlined'] },
					{ type: 'ellipsis', theme: 'outlined', themes: ['outlined'] },
					{ type: 'euro', theme: 'outlined', themes: ['outlined', 'twoTone'] },
					{ type: 'exception', theme: 'outlined', themes: ['outlined'] },
					{ type: 'export', theme: 'outlined', themes: ['outlined'] },
					{ type: 'file-done', theme: 'outlined', themes: ['outlined'] },
					{ type: 'file-jpg', theme: 'outlined', themes: ['outlined'] },
					{ type: 'file-protect', theme: 'outlined', themes: ['outlined'] },
					{ type: 'file-sync', theme: 'outlined', themes: ['outlined'] },
					{ type: 'file-search', theme: 'outlined', themes: ['outlined'] },
					{ type: 'fork', theme: 'outlined', themes: ['outlined'] },
					{ type: 'gateway', theme: 'outlined', themes: ['outlined'] },
					{ type: 'global', theme: 'outlined', themes: ['outlined'] },
					{ type: 'gold', theme: 'outlined', themes: ['outlined', 'twoTone'] },
					{ type: 'history', theme: 'outlined', themes: ['outlined'] },
					{ type: 'import', theme: 'outlined', themes: ['outlined'] },
					{ type: 'inbox', theme: 'outlined', themes: ['outlined'] },
					{ type: 'key', theme: 'outlined', themes: ['outlined'] },
					{ type: 'laptop', theme: 'outlined', themes: ['outlined'] },
					{ type: 'link', theme: 'outlined', themes: ['outlined'] },
					{ type: 'line', theme: 'outlined', themes: ['outlined'] },
					{ type: 'loading-3-quarters', theme: 'outlined', themes: ['outlined'] },
					{ type: 'loading', theme: 'outlined', themes: ['outlined'] },
					{ type: 'man', theme: 'outlined', themes: ['outlined'] },
					{ type: 'menu', theme: 'outlined', themes: ['outlined'] },
					{ type: 'monitor', theme: 'outlined', themes: ['outlined'] },
					{ type: 'more', theme: 'outlined', themes: ['outlined'] },
					{ type: 'number', theme: 'outlined', themes: ['outlined'] },
					{ type: 'percentage', theme: 'outlined', themes: ['outlined'] },
					{ type: 'paper-clip', theme: 'outlined', themes: ['outlined'] },
					{ type: 'pound', theme: 'outlined', themes: ['outlined'] },
					{ type: 'poweroff', theme: 'outlined', themes: ['outlined'] },
					{ type: 'pull-request', theme: 'outlined', themes: ['outlined'] },
					{ type: 'qrcode', theme: 'outlined', themes: ['outlined'] },
					{ type: 'reload', theme: 'outlined', themes: ['outlined'] },
					{ type: 'safety', theme: 'outlined', themes: ['outlined'] },
					{ type: 'robot', theme: 'outlined', themes: ['outlined'] },
					{ type: 'scan', theme: 'outlined', themes: ['outlined'] },
					{ type: 'search', theme: 'outlined', themes: ['outlined'] },
					{ type: 'select', theme: 'outlined', themes: ['outlined'] },
					{ type: 'shake', theme: 'outlined', themes: ['outlined'] },
					{ type: 'share-alt', theme: 'outlined', themes: ['outlined'] },
					{ type: 'shopping-cart', theme: 'outlined', themes: ['outlined'] },
					{ type: 'solution', theme: 'outlined', themes: ['outlined'] },
					{ type: 'sync', theme: 'outlined', themes: ['outlined'] },
					{ type: 'table', theme: 'outlined', themes: ['outlined'] },
					{ type: 'team', theme: 'outlined', themes: ['outlined'] },
					{ type: 'to-top', theme: 'outlined', themes: ['outlined'] },
					{ type: 'trademark', theme: 'outlined', themes: ['outlined'] },
					{ type: 'transaction', theme: 'outlined', themes: ['outlined'] },
					{ type: 'upload', theme: 'outlined', themes: ['outlined'] },
					{ type: 'user-add', theme: 'outlined', themes: ['outlined'] },
					{ type: 'user-delete', theme: 'outlined', themes: ['outlined'] },
					{ type: 'usergroup-add', theme: 'outlined', themes: ['outlined'] },
					{ type: 'user', theme: 'outlined', themes: ['outlined'] },
					{ type: 'usergroup-delete', theme: 'outlined', themes: ['outlined'] },
					{ type: 'wifi', theme: 'outlined', themes: ['outlined'] },
					{ type: 'woman', theme: 'outlined', themes: ['outlined'] },
				],
			},
		}
	},
	computed: {
		directionalIcons(){ return this.filterIcons( 'directionalIcons' ) },
		suggestedIcons(){ return this.filterIcons( 'suggestedIcons' ) },
		editorIcons(){ return this.filterIcons( 'editorIcons' ) },
		dataIcons(){ return this.filterIcons( 'dataIcons' ) },
		brandAndLogos(){ return this.filterIcons( 'brandAndLogos' ) },
		applicationIcons(){ return this.filterIcons( 'applicationIcons' ) },
	},
	methods: {
		onCopy(e) {
			this.$message.success(e.text + ' copied!');
		},
		onSearch(){
			// for( let iconCategory in this.icons ) {
			// 	let icons = this.icons[ iconCategory ] ;

			// 	for( let i = 0 ; i < icons.length ; i++ ) {
			// 		let icon = icons[ i ] ;
			// 		this.icons[ iconCategory ][ i ].html = `<a-icon type="${icon.type}" theme="${icon.theme}" />` ;
			// 	}
			// }
		},
		onThemeChange(){
			for( let iconCategory in this.icons ) {
				let icons = this.icons[ iconCategory ] ;

				for( let i = 0 ; i < icons.length ; i++ ) {
					let icon = icons[ i ] ;
					this.icons[ iconCategory ][ i ].html = `<a-icon type="${icon.type}" theme="${this.theme}" />` ;
				}
			}
		},
		filterIcons( iconCategory ){
			return this.icons[ iconCategory ].filter( ( icon ) => {
				return ( this.searchQuery == "" ? true : icon.type.includes( this.searchQuery ) )
						&& icon.themes.includes( this.theme ) ;
				
			} ) ;
		},
	},
	beforeMount(){
		for( let iconCategory in this.icons ) {
			let icons = this.icons[ iconCategory ] ;

			for( let i = 0 ; i < icons.length ; i++ ) {
				let icon = icons[ i ] ;
				this.icons[ iconCategory ][ i ].html = `<a-icon type="${icon.type}" theme="${this.theme}" />` ;
			}
		}
	}
}
</script>


<style scoped lang="scss">
	h2 small {
		font-size: 13px;
		color: #000000;
	}
</style>