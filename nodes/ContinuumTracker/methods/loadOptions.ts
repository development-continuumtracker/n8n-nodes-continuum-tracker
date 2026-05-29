import type { IDataObject, ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { CONTINUUM_TRACKER_API_BASE_URL } from '../shared/constants';

interface ProjectListItem {
	id: string;
	name: string | null;
}

interface ProjectListResponse {
	items: ProjectListItem[];
	pagination: {
		total: number;
		page: number;
		limit: number;
		total_pages: number;
	};
}

export async function getProjects(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const options: INodePropertyOptions[] = [];
	let page = 1;
	const limit = 100;
	let totalPages = 1;

	do {
		const response = (await this.helpers.httpRequestWithAuthentication.call(
			this,
			'continuumTrackerApi',
			{
				method: 'GET',
				baseURL: CONTINUUM_TRACKER_API_BASE_URL,
				url: '/v1/projects',
				qs: { page, limit } as IDataObject,
				json: true,
			},
		)) as ProjectListResponse;

		for (const project of response.items ?? []) {
			options.push({
				name: project.name ?? project.id,
				value: project.id,
			});
		}

		totalPages = response.pagination?.total_pages ?? 1;
		page += 1;
	} while (page <= totalPages);

	options.sort((a, b) => a.name.localeCompare(b.name));
	return options;
}
