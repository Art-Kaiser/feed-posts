import { ApiVersion } from '../api-version.enum.ts';

export interface IOptions {
	path: string;
	version?: ApiVersion;
	headers?: HeadersInit;
}
