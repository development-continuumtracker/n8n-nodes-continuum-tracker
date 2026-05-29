import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';
import { CONTINUUM_TRACKER_API_BASE_URL } from '../nodes/ContinuumTracker/shared/constants';

export class ContinuumTrackerApi implements ICredentialType {
	name = 'continuumTrackerApi';

	displayName = 'Continuum Tracker API';

	icon: Icon = {
		light: 'file:../nodes/ContinuumTracker/continuumTracker.svg',
		dark: 'file:../nodes/ContinuumTracker/continuumTracker.dark.svg',
	};

	documentationUrl =
		'https://github.com/development-continuumtracker/n8n-nodes-continuum-tracker?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Generate or rotate a key in the web app at /settings/access',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: CONTINUUM_TRACKER_API_BASE_URL,
			url: '/v1/me',
		},
	};
}
