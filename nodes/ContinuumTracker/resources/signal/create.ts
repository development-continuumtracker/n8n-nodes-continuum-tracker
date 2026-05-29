import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSignalCreate = {
	operation: ['create'],
	resource: ['signal'],
};

export const signalCreateDescription: INodeProperties[] = [
	{
		displayName: 'Pain Point',
		name: 'pain_point',
		type: 'string',
		typeOptions: { rows: 3 },
		required: true,
		displayOptions: { show: showOnlyForSignalCreate },
		default: '',
		description: 'Pain point / problem statement',
		routing: {
			send: {
				type: 'body',
				property: 'pain_point',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: { show: showOnlyForSignalCreate },
		default: {},
		options: [
			{
				displayName: 'Feedback Author',
				name: 'feedback_author',
				type: 'string',
				default: '',
				description: 'Author of the linked feedback',
				routing: {
					send: {
						type: 'body',
						property: 'feedback_author',
					},
				},
			},
			{
				displayName: 'Feedback Author Type',
				name: 'feedback_author_type',
				type: 'options',
				default: 'External',
				options: [
					{ name: 'External', value: 'External' },
					{ name: 'Internal', value: 'Internal' },
				],
				description: 'Type of feedback author',
				routing: {
					send: {
						type: 'body',
						property: 'feedback_author_type',
					},
				},
			},
			{
				displayName: 'Feedback Name',
				name: 'feedback_name',
				type: 'string',
				default: '',
				description: 'Name/title of the linked feedback',
				routing: {
					send: {
						type: 'body',
						property: 'feedback_name',
					},
				},
			},
			{
				displayName: 'Feedback Text',
				name: 'feedback_original',
				type: 'string',
				typeOptions: { rows: 4 },
				default: '',
				description: 'Feedback text to link with the signal',
				routing: {
					send: {
						type: 'body',
						property: 'feedback_original',
					},
				},
			},
			{
				displayName: 'Market Opportunity',
				name: 'market_opportunity',
				type: 'string',
				typeOptions: { rows: 2 },
				default: '',
				description: 'Market opportunity description',
				routing: {
					send: {
						type: 'body',
						property: 'market_opportunity',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name/title of the signal',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'User Story',
				name: 'user_story',
				type: 'string',
				typeOptions: { rows: 2 },
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'user_story',
					},
				},
			},
		],
	},
];
