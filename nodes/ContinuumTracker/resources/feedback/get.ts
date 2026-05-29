import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFeedbackGet = {
	operation: ['get'],
	resource: ['feedback'],
};

export const feedbackGetDescription: INodeProperties[] = [
	{
		displayName: 'Feedback ID',
		name: 'feedbackId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnlyForFeedbackGet },
		default: '',
		description: 'UUID of the feedback to retrieve',
	},
	{
		displayName: 'Include Painpoints',
		name: 'includePainpoints',
		type: 'boolean',
		displayOptions: { show: showOnlyForFeedbackGet },
		default: false,
		description: 'Whether to embed related painpoints in the response',
		routing: {
			request: {
				qs: {
					include: '={{ $value ? "painpoint" : undefined }}',
				},
			},
		},
	},
];
