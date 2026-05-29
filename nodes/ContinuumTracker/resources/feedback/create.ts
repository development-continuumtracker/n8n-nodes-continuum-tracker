import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFeedbackCreate = {
	operation: ['create'],
	resource: ['feedback'],
};

export const feedbackCreateDescription: INodeProperties[] = [
	{
		displayName: 'Feedback Text',
		name: 'feedback_original',
		type: 'string',
		typeOptions: { rows: 4 },
		required: true,
		displayOptions: { show: showOnlyForFeedbackCreate },
		default: '',
		description: 'Original feedback text',
		routing: {
			send: {
				type: 'body',
				property: 'feedback_original',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: { show: showOnlyForFeedbackCreate },
		default: {},
		options: [
			{
				displayName: 'Author',
				name: 'author',
				type: 'string',
				default: '',
				description: 'Author of the feedback',
				routing: {
					send: {
						type: 'body',
						property: 'author',
					},
				},
			},
			{
				displayName: 'Author Type',
				name: 'author_type',
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
						property: 'author_type',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name/title of the feedback',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Source of the feedback (e.g. "Email", "Survey", "Interview")',
				routing: {
					send: {
						type: 'body',
						property: 'source',
					},
				},
			},
		],
	},
];
