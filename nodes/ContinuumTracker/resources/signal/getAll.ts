import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSignalGetMany = {
	operation: ['getAll'],
	resource: ['signal'],
};

export const signalGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForSignalGetMany,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
				type: 'query',
				property: 'limit',
				value: '100',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue:
							'={{ $response.body?.pagination?.page < $response.body?.pagination?.total_pages }}',
						request: {
							qs: {
								page: '={{ ($response.body?.pagination?.page ?? 0) + 1 }}',
							},
						},
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForSignalGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: showOnlyForSignalGetMany,
		},
		default: {},
		options: [
			{
				displayName: 'Categories',
				name: 'category',
				type: 'multiOptions',
				default: [],
				description: 'Filter by signal category',
				options: [
					{ name: 'Cluster Pain Point', value: 'ClusterPainPoint' },
					{ name: 'Manual Pain Point', value: 'ManualPainPoint' },
					{ name: 'Recommendation', value: 'Recommendation' },
				],
				routing: {
					request: {
						qs: {
							category: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Saved Only',
				name: 'is_saved',
				type: 'boolean',
				default: false,
				description: 'Whether to return only signals saved by the current user',
				routing: {
					request: {
						qs: {
							is_saved: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search query (filters by name or signal original)',
				routing: {
					request: {
						qs: {
							search: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'options',
				default: 'created_at',
				options: [
					{ name: 'Created At', value: 'created_at' },
					{ name: 'Name', value: 'name' },
				],
				routing: {
					request: {
						qs: {
							sort_by: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Sort Direction',
				name: 'sort_dir',
				type: 'options',
				default: 'desc',
				options: [
					{ name: 'Ascending', value: 'asc' },
					{ name: 'Descending', value: 'desc' },
				],
				routing: {
					request: {
						qs: {
							sort_dir: '={{$value}}',
						},
					},
				},
			},
		],
	},
];
