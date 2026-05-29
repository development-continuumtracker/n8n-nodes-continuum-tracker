import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSignalUpdate = {
	operation: ['update'],
	resource: ['signal'],
};

export const signalUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Signal ID',
		name: 'signalId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnlyForSignalUpdate },
		default: '',
		description: 'UUID of the signal to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: { show: showOnlyForSignalUpdate },
		default: {},
		options: [
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
				displayName: 'Signal Text',
				name: 'signal_original',
				type: 'string',
				typeOptions: { rows: 4 },
				default: '',
				description: 'Original signal text',
				routing: {
					send: {
						type: 'body',
						property: 'signal_original',
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
