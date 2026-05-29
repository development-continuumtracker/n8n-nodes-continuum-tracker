import type { INodeProperties } from 'n8n-workflow';
import { signalGetManyDescription } from './getAll';
import { signalGetDescription } from './get';
import { signalCreateDescription } from './create';
// import { signalUpdateDescription } from './update';
// import { signalDeleteDescription } from './delete';

const showOnlyForSignal = {
	resource: ['signal'],
};

export const signalDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSignal,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a signal',
				description: 'Create a manual signal',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/projects/{{$parameter.projectId}}/signals',
					},
				},
			},
			// {
			// 	name: 'Delete',
			// 	value: 'delete',
			// 	action: 'Delete a signal',
			// 	description: 'Soft-delete a signal',
			// 	routing: {
			// 		request: {
			// 			method: 'DELETE',
			// 			url: '=/v1/projects/{{$parameter.projectId}}/signals/{{$parameter.signalId}}',
			// 		},
			// 	},
			// },
			{
				name: 'Get',
				value: 'get',
				action: 'Get a signal',
				description: 'Get a single signal by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/projects/{{$parameter.projectId}}/signals/{{$parameter.signalId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many signals',
				description: 'Get many signals for a project',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/projects/{{$parameter.projectId}}/signals',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'items',
								},
							},
						],
					},
				},
			},
			// {
			// 	name: 'Update',
			// 	value: 'update',
			// 	action: 'Update a signal',
			// 	description: 'Update an existing signal',
			// 	routing: {
			// 		request: {
			// 			method: 'PUT',
			// 			url: '=/v1/projects/{{$parameter.projectId}}/signals/{{$parameter.signalId}}',
			// 		},
			// 	},
			// },
		],
		default: 'getAll',
	},
	...signalGetManyDescription,
	...signalGetDescription,
	...signalCreateDescription,
	// ...signalUpdateDescription,
	// ...signalDeleteDescription,
];
