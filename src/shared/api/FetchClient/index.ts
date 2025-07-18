import type { IHTTPClient } from '../http-client.interface.ts';
import { IOptions } from './fetch-client-options.interface.ts';
import { ApiVersion } from '../api-version.enum.ts';

export class FetchClient implements IHTTPClient {
	private baseUrl: string;
	private version?: ApiVersion;
	private readonly headers: HeadersInit;

	constructor({ path, version, headers }: IOptions) {
		console.log('path: ', path)
		this.baseUrl = path;
		this.version = version;
		this.headers = headers ?? {
			'Content-Type': 'application-json',
		};
	}

	set setBaseUrl(url: string) {
		this.baseUrl = url;
	}

	set setVersion(version: ApiVersion) {
		this.version = version;
	}

	private preparePath(path: string): string {
		return this.version ? `${this.version}/${path}` : path;
	}

	private async request(
		method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
		path: string,
		data: object
	): Promise<Response> {
		try {
			return await fetch(`${this.baseUrl}/${this.preparePath(path)}`, {
				method,
				headers: this.headers,
				body: JSON.stringify(data),
			}).then((response) => response.json());
		} catch (err) {
			throw new Error(String(err));
		}
	}

	async get<T>(path: string): Promise<T> {
		return await fetch(`${this.baseUrl}/${this.preparePath(path)}`, {
			headers: this.headers,
		})
			.then((response) => response.json())
			.catch((err) => {
				throw new Error(err);
			});
	}

	async post(path: string, data: object): Promise<Response> {
		return await this.request('POST', path, data);
	}

	async put(path: string, data: object): Promise<Response> {
		return await this.request('PUT', path, data);
	}

	async patch(path: string, data: object): Promise<Response> {
		return await this.request('PATCH', path, data);
	}

	async delete(path: string, data: object): Promise<Response> {
		return await this.request('DELETE', path, data);
	}
}
