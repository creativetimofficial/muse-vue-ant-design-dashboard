<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Input</h1>
					<p class="text-dark">
						A basic widget for getting the user input is a text field.
					</p>
					<p class="text-dark">
						Keyboard and mouse can be used for providing or changing data.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>A user input in a form field is needed.</li>
						<li>A search input is required.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Basic usage example.
					</p>
					<div class="showcase">
						<a-row>
							<a-col :span="24" :lg="12">
								<a-input placeholder="Basic usage" />
							</a-col>
						</a-row>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>
				<section class="mb-24" id="prefix-and-suffix">
					<a-divider orientation="left">Prefix And Suffix</a-divider>
					<p>
						Add prefix or suffix icons inside input.
					</p>
					<div class="showcase">
						<a-row>
							<a-col :span="24" :lg="12">
								<a-input ref="userNameInput" v-model="userName" placeholder="Basic usage">
									<a-icon slot="prefix" type="user" />
									<a-tooltip slot="suffix" title="Extra information">
										<a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
									</a-tooltip>
								</a-input>
								<br />
								<br />
								<a-input prefix="￥" suffix="RMB" />
							</a-col>
						</a-row>
					</div>
					<muse-snippet :code="prefixesCode"></muse-snippet>
				</section>
				<section class="mb-24" id="Search-box">
					<a-divider orientation="left">Search box</a-divider>
					<p>
						Example of creating a search box by grouping a standard input with a search button.
					</p>
					<div class="showcase">
						<a-row>
							<a-col :span="24" :lg="12">
    							<a-input-search class="header-search" :class="searchLoading ? 'loading' : ''" placeholder="Header search input" @search="onSearch" :loading='searchLoading'>
									<svg slot="prefix" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="#111827"/>
									</svg>
								</a-input-search>
								<br /><br />
								<a-input-search placeholder="input search text" />
								<br /><br />
								<a-input-search placeholder="input search text" enter-button />
								<br /><br />
								<a-input-search
									placeholder="input search text"
									enter-button="Search"
									size="large"
									@search="onSearch"
								/>
								<br /><br />
								<a-input-search placeholder="input search text" size="large">
									<a-button slot="enterButton">
										Custom
									</a-button>
								</a-input-search>
							</a-col>
						</a-row>
					</div>
					<muse-snippet :code="searchBoxCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Input? Please check the
					<a target="_blank" href="https://antdv.com/components/input/">official docs</a>.
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
			title: 'Input | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'A basic widget for getting the user input is a text field.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
				"prefix-and-suffix": "Prefix And Suffix",
				"Search-box": "Search box",
			},
      		userName: '',
			codeSample: `
<template>
  <a-input placeholder="Basic usage" />
</template>
`,
			prefixesCode: `
<template>
  <div class="components-input-demo-presuffix">
    <a-input ref="userNameInput" v-model="userName" placeholder="Basic usage">
      <a-icon slot="prefix" type="user" />
      <a-tooltip slot="suffix" title="Extra information">
        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
      </a-tooltip>
    </a-input>
    <br />
    <br />
    <a-input prefix="￥" suffix="RMB" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = '';
    },
  },
};
<\/script>
`,
			searchBoxCode: `
<template>
  <div>
	<a-input-search class="header-search" :class="searchLoading ? 'loading' : ''" placeholder="Header search input" @search="onSearch" :loading='searchLoading'>
		<svg slot="prefix" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="#111827"/>
		</svg>
	</a-input-search>
    <br /><br />
	<a-input-search placeholder="input search text" />
	<br /><br />
    <a-input-search placeholder="input search text" enter-button @search="onSearch" />
    <br /><br />
    <a-input-search
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <br /><br />
    <a-input-search placeholder="input search text" size="large" @search="onSearch">
      <a-button slot="enterButton">
        Custom
      </a-button>
    </a-input-search>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
<\/script>
`,
		}
	},
	methods: {
		emitEmpty() {
			this.$refs.userNameInput.focus();
			this.userName = '';
		},
	}
}
</script>


<style lang="scss">
	$md: 768px ;
	$color-gray-7: #8C8C8C;
	$fw-semibold: 600;
	.header-search {
		svg {
			path {
				fill: $color-gray-7;
			}
		}
		.ant-input {
			font-weight: $fw-semibold;
			color: $color-gray-7;
			&:not(:first-child) {
				padding-left: 32px;
			}
			&:not(:last-child) {
				padding-right: 11px;
			}
		}
		&.loading .ant-input:not(:last-child) {
			padding-right: 30px;
		}
		.ant-input-suffix .ant-input-search-icon {
			display: none;

			&.anticon-loading {
				display: block;
			}
		}
	}
</style>