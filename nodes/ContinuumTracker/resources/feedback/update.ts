import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFeedbackUpdate = {
	operation: ['update'],
	resource: ['feedback'],
};

export const feedbackUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Feedback ID',
		name: 'feedbackId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnlyForFeedbackUpdate },
		default: '',
		description: 'UUID of the feedback to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: { show: showOnlyForFeedbackUpdate },
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
				displayName: 'Feedback Text',
				name: 'feedback_original',
				type: 'string',
				typeOptions: { rows: 4 },
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
		],
	},
];
