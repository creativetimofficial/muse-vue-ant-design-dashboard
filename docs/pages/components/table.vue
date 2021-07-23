<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Table</h1>
					<p class="text-dark">
						A table displays rows of data.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>To display a collection of structured data.</li>
						<li>To sort, search, paginate, filter data.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Authors-Table">
					<a-divider orientation="left">Authors Table</a-divider>
					<p>
						Simple table with actions.
					</p>
					<div class="showcase p-0">
						<a-table :columns="columns" :data-source="data" :pagination="false">

							<template slot="author" slot-scope="author">
								<div class="table-avatar-info">
									<a-avatar shape="square" :src="author.avatar" />
									<div class="avatar-info">
										<h6>{{ author.name }}</h6>
										<p>{{ author.email }}</p>
									</div>
								</div>
							</template>

							<template slot="func" slot-scope="func">
								<div class="author-info">
									<h6 class="m-0">{{ func.job }}</h6>
									<p class="m-0 font-regular text-muted">{{ func.department }}</p>
								</div>
							</template>

							<template slot="status" slot-scope="status">
								<a-tag class="tag-status" :class="status ? 'ant-tag-primary' : 'ant-tag-muted'">
									{{ status ? "ONLINE" : "OFFLINE" }}
								</a-tag>
							</template>

							<template slot="editBtn" slot-scope="row">
								<a-button type="link" :data-id="row.key" class="btn-edit">
									Edit
								</a-button>
							</template>

						</a-table>
					</div>
					<muse-snippet :code="authorsTableCode"></muse-snippet>
				</section>
				<section class="mb-24" id="Projects-Table">
					<a-divider orientation="left">Projects Table</a-divider>
					<div class="showcase p-0">
						<a-table :columns="table2Columns" :data-source="table2Data" :pagination="false">

							<template slot="name" slot-scope="text">
								<a>{{ text }}</a>
							</template>

							<a-space slot="members" slot-scope="members" :size="-12" class="avatar-chips">
								<template v-for="member in members">
									<a-avatar :key="member" size="small" :src="member" />
								</template>
							</a-space>

							<template slot="company" slot-scope="company">
								<h6 class="m-0">
									<img :src="company.logo" width="25" style="margin-right: 10px;">
									{{ company.name }}
								</h6>
							</template>

							<template slot="completion" slot-scope="completion">
								<div class="progress-right">
									<div class="text-right text-sm font-semibold text-muted pr-15">{{ completion.value || completion.value == 0 ? completion.value : completion }}%</div>
									<a-progress class="m-0" :percent="completion.value || completion.value == 0 ? completion.value : completion" :show-info="false" size="small" :status="completion.status ? completion.status : 'normal'" />
								</div>
							</template>

							<template slot="editBtn" slot-scope="row">
								<a-button type="link" :data-id="row.key">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path class="fill-gray-7" d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"/>
										<path class="fill-gray-7" d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"/>
									</svg>
								</a-button>
							</template>

						</a-table>
					</div>
					<muse-snippet :code="projectsTableCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Table? Please check the
					<a target="_blank" href="https://antdv.com/components/table/">official docs</a>.
				</p>
			</div>
			<muse-anchor :anchors="anchors"></muse-anchor>
		</div>
	</div>
  
</template>

<script>
	
	// "Authors" table list of columns and their properties.
	const columns = [
		{
			title: 'AUTHOR',
			dataIndex: 'author',
			scopedSlots: { customRender: 'author' },
		},
		{
			title: 'FUNCTION',
			dataIndex: 'func',
			scopedSlots: { customRender: 'func' },
		},
		{
			title: 'STATUS',
			dataIndex: 'status',
			scopedSlots: { customRender: 'status' },
		},
		{
			title: 'EMPLOYED',
			dataIndex: 'employed',
			class: 'text-muted',
		},
		{
			title: '',
			scopedSlots: { customRender: 'editBtn' },
			width: 50,
		},
	];

	// "Authors" table list of rows and their properties.
	const data = [
		{
			key: '1',
			author: {
				avatar: '/images/face-2.jpg',
				name: 'Michael John',
				email: 'michael@mail.com',
			},
			func: {
				job: 'Manager',
				department: 'Organization',
			},
			status: 1,
			employed: '23/04/18',
		},
		{
			key: '2',
			author: {
				avatar: '/images/face-3.jpg',
				name: 'Alexa Liras',
				email: 'alexa@mail.com',
			},
			func: {
				job: 'Programator',
				department: 'Developer',
			},
			status: 0,
			employed: '23/12/20',
		},
		{
			key: '3',
			author: {
				avatar: '/images/face-1.jpg',
				name: 'Laure Perrier',
				email: 'laure@mail.com',
			},
			func: {
				job: 'Executive',
				department: 'Projects',
			},
			status: 1,
			employed: '13/04/19',
		},
		{
			key: '4',
			author: {
				avatar: '/images/face-4.jpg',
				name: 'Miriam Eric',
				email: 'miriam@mail.com',
			},
			func: {
				job: 'Marketing',
				department: 'Organization',
			},
			status: 1,
			employed: '03/04/21',
		},
		{
			key: '5',
			author: {
				avatar: '/images/face-5.jpeg',
				name: 'Richard Gran',
				email: 'richard@mail.com',
			},
			func: {
				job: 'Manager',
				department: 'Organization',
			},
			status: 0,
			employed: '23/03/20',
		},
		{
			key: '6',
			author: {
				avatar: '/images/face-6.jpeg',
				name: 'John Levi',
				email: 'john@mail.com',
			},
			func: {
				job: 'Tester',
				department: 'Developer',
			},
			status: 0,
			employed: '14/04/17',
		},
	];
	
	// "Projects" table list of columns and their properties.
	const table2Columns = [
		{
			title: 'COMPANIES',
			dataIndex: 'company',
			scopedSlots: { customRender: 'company' },
			width: 300,
		},
		{
			title: 'BUDGET',
			dataIndex: 'budget',
			class: 'font-semibold text-muted',
		},
		{
			title: 'STATUS',
			dataIndex: 'status',
			class: 'font-semibold text-muted text-sm',
		},
		{
			title: 'COMPLETION',
			scopedSlots: { customRender: 'completion' },
			dataIndex: 'completion',
		},
		{
			title: '',
			scopedSlots: { customRender: 'editBtn' },
			width: 50,
		},
	];

	// "Projects" table list of rows and their properties.
	const table2Data = [
		{
			key: '1',
			company: {
				name: 'Spotify Version',
				logo: '/images/logos/logo-spotify.svg',
			},
			status: "working",
			budget: '$14,000',
			completion: 60,
		},
		{
			key: '2',
			company: {
				name: 'Progress Track',
				logo: '/images/logos/logo-atlassian.svg',
			},
			status: "working",
			budget: '$3,000',
			completion: 10,
		},
		{
			key: '3',
			company: {
				name: 'Jira Platform Errors',
				logo: '/images/logos/logo-slack.svg',
			},
			status: "done",
			budget: 'Not Set',
			completion: {
				status: 'success',
				value: 100,
			},
		},
		{
			key: '4',
			company: {
				name: 'Launch new Mobile App',
				logo: '/images/logos/logo-spotify.svg',
			},
			status: "canceled",
			budget: '$20,600',
			completion: {
				status: 'exception',
				value: 50,
			},
		},
		{
			key: '5',
			company: {
				name: 'Web Dev',
				logo: '/images/logos/logo-webdev.svg',
			},
			status: "working",
			budget: '$4,000',
			completion: 80,
		},
		{
			key: '6',
			company: {
				name: 'Redesign Online Store',
				logo: '/images/logos/logo-invision.svg',
			},
			status: "canceled",
			budget: '$2,000',
			completion: {
				status: 'exception',
				value: 0,
			},
		},
	];

export default {
	head () {
		return {
			title: 'Table | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'A table displays rows of data.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Authors-Table": "Authors Table",
				"Projects-Table": "Projects Table",
			},
			data,
			columns,
			table2Data,
			table2Columns,
			authorsTableCode: `
<template>
	<a-table :columns="columns" :data-source="data" :pagination="false">

		<template slot="author" slot-scope="author">
			<div class="table-avatar-info">
				<a-avatar shape="square" :src="author.avatar" />
				<div class="avatar-info">
					<h6>{{ author.name }}</h6>
					<p>{{ author.email }}</p>
				</div>
			</div>
		</template>

		<template slot="func" slot-scope="func">
			<div class="author-info">
				<h6 class="m-0">{{ func.job }}</h6>
				<p class="m-0 font-regular text-muted">{{ func.department }}</p>
			</div>
		</template>

		<template slot="status" slot-scope="status">
			<a-tag class="tag-status" :class="status ? 'ant-tag-primary' : 'ant-tag-muted'">
				{{ status ? "ONLINE" : "OFFLINE" }}
			</a-tag>
		</template>

		<template slot="editBtn" slot-scope="row">
			<a-button type="link" :data-id="row.key" class="btn-edit">
				Edit
			</a-button>
		</template>

	</a-table>
</template>
<script>
	const columns = [
		{
			title: 'AUTHOR',
			dataIndex: 'author',
			scopedSlots: { customRender: 'author' },
		},
		{
			title: 'FUNCTION',
			dataIndex: 'func',
			scopedSlots: { customRender: 'func' },
		},
		{
			title: 'STATUS',
			dataIndex: 'status',
			scopedSlots: { customRender: 'status' },
		},
		{
			title: 'EMPLOYED',
			dataIndex: 'employed',
			class: 'text-muted',
		},
		{
			title: '',
			scopedSlots: { customRender: 'editBtn' },
			width: 50,
		},
	];

	const data = [
		{
			key: '1',
			author: {
				avatar: '/images/face-2.jpg',
				name: 'Michael John',
				email: 'michael@mail.com',
			},
			func: {
				job: 'Manager',
				department: 'Organization',
			},
			status: 1,
			employed: '23/04/18',
		},
		{
			key: '2',
			author: {
				avatar: '/images/face-3.jpg',
				name: 'Alexa Liras',
				email: 'alexa@mail.com',
			},
			func: {
				job: 'Programator',
				department: 'Developer',
			},
			status: 0,
			employed: '23/12/20',
		},
		{
			key: '3',
			author: {
				avatar: '/images/face-1.jpg',
				name: 'Laure Perrier',
				email: 'laure@mail.com',
			},
			func: {
				job: 'Executive',
				department: 'Projects',
			},
			status: 1,
			employed: '13/04/19',
		},
		{
			key: '4',
			author: {
				avatar: '/images/face-4.jpg',
				name: 'Miriam Eric',
				email: 'miriam@mail.com',
			},
			func: {
				job: 'Marketing',
				department: 'Organization',
			},
			status: 1,
			employed: '03/04/21',
		},
		{
			key: '5',
			author: {
				avatar: '/images/face-5.jpeg',
				name: 'Richard Gran',
				email: 'richard@mail.com',
			},
			func: {
				job: 'Manager',
				department: 'Organization',
			},
			status: 0,
			employed: '23/03/20',
		},
		{
			key: '6',
			author: {
				avatar: '/images/face-6.jpeg',
				name: 'John Levi',
				email: 'john@mail.com',
			},
			func: {
				job: 'Tester',
				department: 'Developer',
			},
			status: 0,
			employed: '14/04/17',
		},
	];

	export default {
		data() {
			return {
				data,
				columns,
			};
		},
	};
<\/script>`,
			projectsTableCode: `
<template>
	<a-table :columns="columns" :data-source="data" :pagination="false">

		<template slot="name" slot-scope="text">
			<a>{{ text }}</a>
		</template>

		<a-space slot="members" slot-scope="members" :size="-12" class="avatar-chips">
			<template v-for="member in members">
				<a-avatar :key="member" size="small" :src="member" />
			</template>
		</a-space>

		<template slot="company" slot-scope="company">
			<h6 class="m-0">
				<img :src="company.logo" width="25" style="margin-right: 10px;">
				{{ company.name }}
			</h6>
		</template>

		<template slot="completion" slot-scope="completion">
			<div class="progress-right">
				<div class="text-right text-sm font-semibold text-muted pr-15">{{ completion.value || completion.value == 0 ? completion.value : completion }}%</div>
				<a-progress class="m-0" :percent="completion.value || completion.value == 0 ? completion.value : completion" :show-info="false" size="small" :status="completion.status ? completion.status : 'normal'" />
			</div>
		</template>

		<template slot="editBtn" slot-scope="row">
			<a-button type="link" :data-id="row.key">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path class="fill-gray-7" d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"/>
					<path class="fill-gray-7" d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"/>
				</svg>
			</a-button>
		</template>

	</a-table>
</template>
<script>
	const columns = [
		{
			title: 'COMPANIES',
			dataIndex: 'company',
			scopedSlots: { customRender: 'company' },
			width: 300,
		},
		{
			title: 'BUDGET',
			dataIndex: 'budget',
			class: 'font-semibold text-muted',
		},
		{
			title: 'STATUS',
			dataIndex: 'status',
			class: 'font-semibold text-muted text-sm',
		},
		{
			title: 'COMPLETION',
			scopedSlots: { customRender: 'completion' },
			dataIndex: 'completion',
		},
		{
			title: '',
			scopedSlots: { customRender: 'editBtn' },
			width: 50,
		},
	];

	const data = [
		{
			key: '1',
			company: {
				name: 'Spotify Version',
				logo: '/images/logos/logo-spotify.svg',
			},
			status: "working",
			budget: '$14,000',
			completion: 60,
		},
		{
			key: '2',
			company: {
				name: 'Progress Track',
				logo: '/images/logos/logo-atlassian.svg',
			},
			status: "working",
			budget: '$3,000',
			completion: 10,
		},
		{
			key: '3',
			company: {
				name: 'Jira Platform Errors',
				logo: '/images/logos/logo-slack.svg',
			},
			status: "done",
			budget: 'Not Set',
			completion: {
				status: 'success',
				value: 100,
			},
		},
		{
			key: '4',
			company: {
				name: 'Launch new Mobile App',
				logo: '/images/logos/logo-spotify.svg',
			},
			status: "canceled",
			budget: '$20,600',
			completion: {
				status: 'exception',
				value: 50,
			},
		},
		{
			key: '5',
			company: {
				name: 'Web Dev',
				logo: '/images/logos/logo-webdev.svg',
			},
			status: "working",
			budget: '$4,000',
			completion: 80,
		},
		{
			key: '6',
			company: {
				name: 'Redesign Online Store',
				logo: '/images/logos/logo-invision.svg',
			},
			status: "canceled",
			budget: '$2,000',
			completion: {
				status: 'exception',
				value: 0,
			},
		},
	];

	export default {
		data() {
			return {
				data,
				columns,
			};
		},
	};
<\/script>`,
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
</style>