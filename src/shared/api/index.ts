import { baseUrl } from '../config';
import { FetchClient } from './FetchClient';
import { IOptions } from './FetchClient/fetch-client-options.interface.ts';
export type { IHTTPClient } from './http-client.interface.ts';
export { ApiVersion } from './api-version.enum.ts';

const fetchClient = new FetchClient({ path: baseUrl });

export { fetchClient, type IOptions };
