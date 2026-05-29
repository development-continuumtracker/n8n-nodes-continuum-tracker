import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFeedbackArchive = {
	operation: ['archive'],
	resource: ['feedback'],
};

export const feedbackArchiveDescription: INodeProperties[] = [
	{
		displayName: 'Feedback ID',
		name: 'feedbackId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnlyForFeedbackArchive },
		default: '',
		description: 'UUID of the feedback to archive',
	},
];
