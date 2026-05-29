import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSignalDelete = {
	operation: ['delete'],
	resource: ['signal'],
};

export const signalDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Signal ID',
		name: 'signalId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnlyForSignalDelete },
		default: '',
		description: 'UUID of the signal to delete',
	},
];
