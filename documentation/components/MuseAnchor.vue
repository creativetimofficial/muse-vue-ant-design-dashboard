<template>
	<div class="page-anchor">
		<a-anchor :targetOffset="80" :offsetTop="85">
			<a-anchor-link v-for="(title, id) in anchors" :key="id" :href="url + '#' + id" :title="title" />
		</a-anchor>
	</div>
</template>

<script>

export default {
	props: ['anchors'],
	data(){
		return {
			url: '',
		}
	},
	beforeMount(){
		this.url = window.location.href.split('#')[0] ;
	}
}
</script>

<style>
</style>
