import type { IExecuteSingleFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

const showOnlyForMe = {
	resource: ['me'],
};

const STRIPPED_ME_FIELDS = ['role', 'api_key', 'company_analyses', 'hd'] as const;

async function stripMeFields(
	this: IExecuteSingleFunctions,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	return items.map((item) => {
		const json = { ...item.json };
		for (const key of STRIPPED_ME_FIELDS) {
			delete json[key];
		}
		return { ...item, json };
	});
}

export const meDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMe,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get current user',
				description: 'Get the currently authenticated user',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/me',
					},
					output: {
						postReceive: [stripMeFields],
					},
				},
			},
		],
		default: 'get',
	},
];
