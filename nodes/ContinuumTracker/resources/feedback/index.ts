import type { INodeProperties } from 'n8n-workflow';
import { feedbackGetManyDescription } from './getAll';
import { feedbackGetDescription } from './get';
import { feedbackCreateDescription } from './create';
import { feedbackUpdateDescription } from './update';
import { feedbackArchiveDescription } from './archive';

const showOnlyForFeedback = {
	resource: ['feedback'],
};

export const feedbackDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFeedback,
		},
		options: [
			{
				name: 'Archive',
				value: 'archive',
				action: 'Archive a feedback',
				description: 'Archive (soft-delete) a feedback',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/projects/{{$parameter.projectId}}/feedbacks/{{$parameter.feedbackId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a feedback',
				description: 'Create a new feedback',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/projects/{{$parameter.projectId}}/feedbacks',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a feedback',
				description: 'Get a single feedback by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/projects/{{$parameter.projectId}}/feedbacks/{{$parameter.feedbackId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many feedbacks',
				description: 'Get many feedbacks for a project',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/projects/{{$parameter.projectId}}/feedbacks',
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
			{
				name: 'Update',
				value: 'update',
				action: 'Update a feedback',
				description: 'Update an existing feedback',
				routing: {
					request: {
						method: 'PUT',
						url: '=/v1/projects/{{$parameter.projectId}}/feedbacks/{{$parameter.feedbackId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...feedbackGetManyDescription,
	...feedbackGetDescription,
	...feedbackCreateDescription,
	...feedbackUpdateDescription,
	...feedbackArchiveDescription,
];
