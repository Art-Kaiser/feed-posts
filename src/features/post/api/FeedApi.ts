import { fetchClient, IHTTPClient, IOptions } from '../../../shared/api';

interface IFeedApi {
	getAllPosts: (path: string) => Promise<string>;
	getPostById: <T>(id?: string) => Promise<T>;
}

class FeedApi implements IFeedApi {
	private readonly api: IHTTPClient;
	private readonly postPath: string;

	constructor(api: IHTTPClient, options: Partial<IOptions> = {}) {
		const { path } = options;

		this.api = api;
		this.postPath = path ?? 'posts';
	}

	getAllPosts<T>(): Promise<T> {
		return this.api.get(this.postPath);
	}

	getPostById<T>(id?: string): Promise<T> {
		return this.api.get(`${this.postPath}/${id}`);
	}
}

export const feedApi = new FeedApi(fetchClient, { path: 'posts' });
