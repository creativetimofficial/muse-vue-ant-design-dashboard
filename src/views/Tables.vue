<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<!-- Authors Table -->
		<a-row :gutter="24" type="flex">

			<!-- Authors Table Column -->
			<a-col :span="24" class="mb-24">

				<!-- Authors Table Card -->
				<CardAuthorTable
					:data="table1Data"
					:columns="table1Columns"
				></CardAuthorTable>
				<!-- / Authors Table Card -->

			</a-col>
			<!-- / Authors Table Column -->

		</a-row>
		<!-- / Authors Table -->

		<!-- Projects Table -->
		<a-row :gutter="24" type="flex">

			<!-- Projects Table Column -->
			<a-col :span="24" class="mb-24">

				<!-- Projects Table Column -->
				<CardProjectTable2
					:data="table2Data"
					:columns="table2Columns"
				></CardProjectTable2>
				<!-- / Projects Table Column -->

			</a-col>
			<!-- / Projects Table Column -->

		</a-row>
		<!-- / Projects Table -->

	</div>
</template>

<script>

	// "Authors" table component.
	import CardAuthorTable from '../components/Cards/CardAuthorTable' ;

	// "Projects" table component.
	import CardProjectTable2 from '../components/Cards/CardProjectTable2' ;
	
	// "Authors" table list of columns and their properties.
	const table1Columns = [
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
	const table1Data = [
		{
			key: '1',
			author: {
				avatar: 'images/face-2.jpg',
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
				avatar: 'images/face-3.jpg',
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
				avatar: 'images/face-1.jpg',
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
				avatar: 'images/face-4.jpg',
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
				avatar: 'images/face-5.jpeg',
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
				avatar: 'images/face-6.jpeg',
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
				logo: 'images/logos/logo-spotify.svg',
			},
			status: "working",
			budget: '$14,000',
			completion: 60,
		},
		{
			key: '2',
			company: {
				name: 'Progress Track',
				logo: 'images/logos/logo-atlassian.svg',
			},
			status: "working",
			budget: '$3,000',
			completion: 10,
		},
		{
			key: '3',
			company: {
				name: 'Jira Platform Errors',
				logo: 'images/logos/logo-slack.svg',
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
				logo: 'images/logos/logo-spotify.svg',
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
				logo: 'images/logos/logo-webdev.svg',
			},
			status: "working",
			budget: '$4,000',
			completion: 80,
		},
		{
			key: '6',
			company: {
				name: 'Redesign Online Store',
				logo: 'images/logos/logo-invision.svg',
			},
			status: "canceled",
			budget: '$2,000',
			completion: {
				status: 'exception',
				value: 0,
			},
		},
	];

	export default ({
		components: {
			CardAuthorTable,
			CardProjectTable2,
		},
		data() {
			return {
				// Associating "Authors" table data with its corresponding property.
				table1Data: table1Data,

				// Associating "Authors" table columns with its corresponding property.
				table1Columns: table1Columns,

				// Associating "Projects" table data with its corresponding property.
				table2Data: table2Data,

				// Associating "Projects" table columns with its corresponding property.
				table2Columns: table2Columns,
			}
		},
	})

</script>

<style lang="scss">
</style>