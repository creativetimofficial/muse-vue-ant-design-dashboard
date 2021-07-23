<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Avatar</h1>
					<p class="text-dark">
						Avatars can be used to represent people or objects. It supports images, ‘Icon’s, or letters.
					</p>
				</section>
   				<a-divider />
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Three sizes and two shapes are available.
					</p>
					<div class="showcase">
						<div>
							<a-avatar :size="64" icon="user" />
							<a-avatar size="large" icon="user" />
							<a-avatar icon="user" />
							<a-avatar size="small" icon="user" />
						</div>
						<br />
						<div>
							<a-avatar shape="square" :size="64" icon="user" />
							<a-avatar shape="square" size="large" icon="user" />
							<a-avatar shape="square" icon="user" />
							<a-avatar shape="square" size="small" icon="user" />
						</div>
					</div>
					<muse-snippet :code="basic"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Avatar? Please check the
					<a target="_blank" href="https://antdv.com/components/avatar/">official docs</a>.
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
			title: 'Avatar | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Avatars can be used to represent people or objects. It supports images, ‘Icon’s, or letters.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"Basic": "Basic",
			},
			basic: `
<template>
  <div>
    <div>
      <a-avatar :size="64" icon="user" />
      <a-avatar size="large" icon="user" />
      <a-avatar icon="user" />
      <a-avatar size="small" icon="user" />
    </div>
    <br />
    <div>
      <a-avatar shape="square" :size="64" icon="user" />
      <a-avatar shape="square" size="large" icon="user" />
      <a-avatar shape="square" icon="user" />
      <a-avatar shape="square" size="small" icon="user" />
    </div>
  </div>
</template>`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
</style>