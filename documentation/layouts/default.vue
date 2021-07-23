<template>
	<a-layout>
		<a-layout-header class="header">

			<div class="header-info">

				<div class="brand"><img src="~@/assets/logo-ct-black.png" alt=""> <span>Muse Vue Docs</span></div>
			
				<a-button type="link" class="sidebar-toggler" @click="sidebarCollapsed = ! sidebarCollapsed">
					<svg fill="#ffffff" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
				</a-button>

			</div>

			<div class="header-nav">

				<a-menu
					theme="light"
					mode="horizontal"
				>
					<a-menu-item><a href="#">Live Preview</a></a-menu-item>
					<a-menu-item><a href="#">Support</a></a-menu-item>
				</a-menu>

				<a-menu
					theme="light"
					mode="horizontal"
				>
					<a-menu-item><a href="#">Download Free</a></a-menu-item>
				</a-menu>
				<a-button type="primary" href="https://creative-tim.com/" target="_blank" icon="download" class="mx-20">Upgrade To PRO</a-button>
			</div>

		</a-layout-header>
		<a-layout>
			<a-layout-sider width="250" style="background: #fff" :class="sidebarCollapsed ? '' : 'sider-open'">

				<!-- Sidebar Navigation Menu -->
				<a-menu theme="light" mode="inline">
					<a-menu-item-group>
						<template slot="title">
							<span class="icon">
								<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z" fill="#ffffff"/>
								</svg>
							</span>
							<span class="label">Getting started</span>
						</template>
						<a-menu-item>
							<NuxtLink to="/overview/vue-ant-design-dashboard/">Overview
							</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/license/vue-ant-design-dashboard/">License</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/quick-start/vue-ant-design-dashboard/">Quick Start <!-- <a-tag>PRO</a-tag> --> </NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/what-is-ant/vue-ant-design-dashboard/">What is Ant</NuxtLink>
						</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group>
						<template slot="title">
							<span class="icon">
								<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#ffffff"></path>
									<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#ffffff"></path>
									<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#ffffff"></path>
								</svg>
							</span>
							<span class="label">Foundation</span>
						</template>
						<a-menu-item>
							<NuxtLink to="/foundation/colors/vue-ant-design-dashboard/">Colors</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/foundation/icons/vue-ant-design-dashboard/">Icons</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/foundation/typography/vue-ant-design-dashboard/">Typography</NuxtLink>
						</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group>
						<template slot="title">
							<span class="icon">
								<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z" fill="#ffffff"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z" fill="#ffffff"/>
								</svg>
							</span>
							<span class="label">Components</span>
						</template>
						<a-menu-item>
							<NuxtLink to="/components/alert/vue-ant-design-dashboard/">Alert</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/avatar/vue-ant-design-dashboard/">Avatar</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/badge/vue-ant-design-dashboard/">Badge</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/buttons/vue-ant-design-dashboard/">Buttons</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/card/vue-ant-design-dashboard/">Card</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/collapse/vue-ant-design-dashboard/">Collapse</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/modal/vue-ant-design-dashboard/">Modal</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/popover/vue-ant-design-dashboard/">Popover</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/progress/vue-ant-design-dashboard/">Progress</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/table/vue-ant-design-dashboard/">Table</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/tabs/vue-ant-design-dashboard/">Tabs</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/timeline/vue-ant-design-dashboard/">Timeline</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/components/tooltip/vue-ant-design-dashboard/">Tooltip</NuxtLink>
						</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group>
						<template slot="title">
							<span class="icon">
								<svg width="12" height="12" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<title>duplicate</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Tables" transform="translate(-58.000000, -507.000000)" fill="#ffffff" fill-rule="nonzero"><g id="sidebar" transform="translate(33.000000, 43.000000)"><g id="sign-up" transform="translate(16.000000, 455.000000)"><g id="duplicate" transform="translate(9.000000, 9.000000)"><path d="M4,6 C4,4.89543 4.89543,4 6,4 L12,4 C13.1046,4 14,4.89543 14,6 L14,12 C14,13.1046 13.1046,14 12,14 L6,14 C4.89543,14 4,13.1046 4,12 L4,6 Z" id="Path"></path><path d="M2,0 C0.89543,0 0,0.89543 0,2 L0,8 C0,9.1046 0.89543,10 2,10 L2,4 C2,2.8954305 2.8954305,2 4,2 L10,2 L10,2 C10,0.89543 9.1046,0 8,0 L2,0 Z" id="Path"></path></g></g></g></g></g>
								</svg>
							</span>
							<span class="label">Layout</span>
						</template>
						<a-menu-item>
							<NuxtLink to="/layout/grid/vue-ant-design-dashboard/">Grid</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/layout/layout/vue-ant-design-dashboard/">Layout</NuxtLink>
						</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group>
						<template slot="title">
							<span class="icon">
								<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#ffffff"/>
								</svg>
							</span>
							<span class="label">Navigation</span>
						</template>
						<a-menu-item>
							<NuxtLink to="/navigation/affix/vue-ant-design-dashboard/">Affix</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/navigation/dropdown/vue-ant-design-dashboard/">Dropdown</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/navigation/menu/vue-ant-design-dashboard/">Menu</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/navigation/pagination/vue-ant-design-dashboard/">Pagination</NuxtLink>
						</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group>
						<template slot="title">
							<span class="icon">
								<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C3.34315 4 2 5.34315 2 7V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V7C18 5.34315 16.6569 4 15 4H5ZM4 13V12H9V14H5C4.44772 14 4 13.5523 4 13ZM11 14H15C15.5523 14 16 13.5523 16 13V12H11V14ZM11 10H16V8H11V10ZM9 8H4V10H9V8Z" fill="#ffffff"/>
								</svg>
							</span>
							<span class="label">Data Entry</span>
						</template>
						<a-menu-item>
							<NuxtLink to="/data-entry/checkbox/vue-ant-design-dashboard/">Checkbox <!-- <a-tag>PRO</a-tag> --> </NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/data-entry/form/vue-ant-design-dashboard/">Form</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/data-entry/input/vue-ant-design-dashboard/">Input</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/data-entry/radio/vue-ant-design-dashboard/">Radio</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/data-entry/select/vue-ant-design-dashboard/">Select</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/data-entry/switch/vue-ant-design-dashboard/">Switch</NuxtLink>
						</a-menu-item>
						<a-menu-item>
							<NuxtLink to="/data-entry/upload/vue-ant-design-dashboard/">Upload</NuxtLink>
						</a-menu-item>
					</a-menu-item-group>
				</a-menu>
				<!-- / Sidebar Navigation Menu -->

			</a-layout-sider>
			<a-layout>
				<a-layout-content
				:style="{ background: '#fff' }"
				>
					<div class="main-content">
						<Nuxt />
					</div>

					<!-- Layout Footer -->
					<a-layout-footer>
						<a-row type="flex">
							<a-col :span="24" :md="12">

								<!-- Footer Copyright Notice -->
								<p class="copyright">
									© 2021, made with
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z" fill="#111827"/>
									</svg>
									by <a href="https://creative-tim.com">Creative Tim</a> for a better web.
								</p>
								<!-- / Footer Copyright Notice -->

							</a-col>
							<a-col :span="24" :md="12" class="footer-control">

								<!-- Footer Navigation Menu -->
								<a-menu mode="horizontal">
									<a-menu-item>Creative Tim</a-menu-item>
									<a-menu-item>About Us</a-menu-item>
									<a-menu-item>Blog</a-menu-item>
									<a-menu-item>License</a-menu-item>
								</a-menu>
								<!-- / Footer Navigation Menu -->

							</a-col>
						</a-row>
					</a-layout-footer>
					<!-- / Layout Footer -->

				</a-layout-content>

			</a-layout>

			<!-- Sidebar Overlay -->
			<div class="sidebar-overlay" @click="sidebarCollapsed = true" v-show="! sidebarCollapsed"></div>
			<!-- / Sidebar Overlay -->
		</a-layout>
	</a-layout>
</template>

<script>
	export default {
		data() {
			return {
				sidebarCollapsed: true,
			};
		},
	};
</script>

<style>
</style>
