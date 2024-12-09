// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { GetFooData } from './types.gen';

export const client = createClient(createConfig());

export const getFoo = <ThrowOnError extends boolean = false>(options?: Options<GetFooData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        security: [
            {
                fn: 'apiKey',
                in: 'query',
                name: 'foo'
            }
        ],
        url: '/foo'
    });
};