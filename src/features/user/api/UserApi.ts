import { fetchClient, IHTTPClient, IOptions } from '../../../shared/api';

interface IUserApi {
	getUserById: <T>(id?: number) => Promise<T>;
}

export class UserApi implements IUserApi {
	private readonly api: IHTTPClient;
	private readonly userPath: string;

	constructor(api: IHTTPClient, options: Partial<IOptions> = {}) {
		const { path } = options;

		this.api = api;
		this.userPath = path ?? 'users';
	}

	getUserById<T>(id?: number): Promise<T> {
		return this.api.get(`${this.userPath}/${id}`);
	}
}

export const userApi = new UserApi(fetchClient);
