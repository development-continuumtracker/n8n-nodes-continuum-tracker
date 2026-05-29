import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFeedbackGetMany = {
	operation: ['getAll'],
	resource: ['feedback'],
};

export const feedbackGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForFeedbackGetMany,
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
				...showOnlyForFeedbackGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
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
			show: showOnlyForFeedbackGetMany,
		},
		default: {},
		options: [
			{
				displayName: 'Include Archived',
				name: 'include_archived',
				type: 'boolean',
				default: false,
				description: 'Whether to include archived (soft-deleted) feedbacks',
				routing: {
					request: {
						qs: {
							include_archived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search query (filters by name or feedback original)',
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
					{ name: 'Status', value: 'status' },
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
