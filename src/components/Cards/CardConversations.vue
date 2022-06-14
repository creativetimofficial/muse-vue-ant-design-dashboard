<template>

	<!-- Conversations Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }">
		<template #title>
			<h6 class="font-semibold m-0">Conversations</h6>
		</template>
		<a-list class="conversations-list" item-layout="horizontal" :split="false" :data-source="data">
			<template #renderItem="{ item }">
				<a-list-item>
					<template #actions>
						<a-button type="link">
							REPLY
						</a-button>
					</template>
					<a-list-item-meta :title="item.title" :description="item.code">
						<template #avatar>
							<a-avatar :size="48" shape="square" :src="item.avatar" />
						</template>
					</a-list-item-meta>
				</a-list-item>
			</template>
		</a-list>
	</a-card>
	<!-- / Conversations Card -->

</template>

<script>

export default ({
	props: {
		data: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
		}
	},
})

</script>