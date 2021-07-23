<template>
	<section class="highlight-section">
		<a-button type="primary" icon="copy" size="small" class="btn-copy" v-clipboard:copy="code.trim()" v-clipboard:success="onCopy">Copy</a-button>
		<highlight-code :lang="lang ? lang : 'html'" style="max-height: 500px;">
			{{ code }}
		</highlight-code>
	</section>
</template>

<script>

export default {
  	inheritAttrs: true,
	props: ['code', 'lang'],
	data(){
		return {
		}
	},
	methods: {
		onCopy: function (e) {
	  		this.$message.success({
				  content: 'Copied!',
			  });
		},
	}
}
</script>

<style>
</style>
