import type { INodeProperties } from 'n8n-workflow';

export const projectIdProperty: INodeProperties = {
	displayName: 'Project Name or ID',
	name: 'projectId',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getProjects',
	},
	required: true,
	default: '',
	displayOptions: {
		show: {
			resource: ['feedback', 'signal'],
		},
	},
	description:
		'Project that owns this resource. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
};
