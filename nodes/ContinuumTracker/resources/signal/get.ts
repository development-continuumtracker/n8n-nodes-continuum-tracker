import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSignalGet = {
	operation: ['get'],
	resource: ['signal'],
};

export const signalGetDescription: INodeProperties[] = [
	{
		displayName: 'Signal ID',
		name: 'signalId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnlyForSignalGet },
		default: '',
		description: 'UUID of the signal to retrieve',
	},
];
