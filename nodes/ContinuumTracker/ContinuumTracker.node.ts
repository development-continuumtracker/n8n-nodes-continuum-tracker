import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { feedbackDescription } from './resources/feedback';
import { signalDescription } from './resources/signal';
import { meDescription } from './resources/me';
import { projectIdProperty } from './shared/projectId';
import { CONTINUUM_TRACKER_API_BASE_URL } from './shared/constants';
import { getProjects } from './methods/loadOptions';

export class ContinuumTracker implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Continuum Tracker',
		name: 'continuumTracker',
		icon: { light: 'file:continuumTracker.svg', dark: 'file:continuumTracker.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Continuum Tracker API',
		defaults: {
			name: 'Continuum Tracker',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'continuumTrackerApi', required: true }],
		requestDefaults: {
			baseURL: CONTINUUM_TRACKER_API_BASE_URL,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Feedback', value: 'feedback' },
					{ name: 'Me', value: 'me' },
					{ name: 'Signal', value: 'signal' },
				],
				default: 'feedback',
			},
			projectIdProperty,
			...feedbackDescription,
			...signalDescription,
			...meDescription,
		],
	};

	methods = {
		loadOptions: {
			getProjects,
		},
	};
}
