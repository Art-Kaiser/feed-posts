import { ApiVersion } from './api-version.enum.ts';

export interface IHTTPClient {
	setBaseUrl: string;
	setVersion: ApiVersion;
	get: <T>(path: string) => Promise<T>;
	post: (path: string, data: object) => Promise<Response>;
	put: (path: string, data: object) => Promise<Response>;
	patch: (path: string, data: object) => Promise<Response>;
	delete: (path: string, data: object) => Promise<Response>;
}
