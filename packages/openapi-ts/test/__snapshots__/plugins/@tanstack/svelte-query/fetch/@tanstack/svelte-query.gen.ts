// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from '@hey-api/client-fetch';
import { queryOptions, type MutationOptions, type DefaultError, infiniteQueryOptions, type InfiniteData } from '@tanstack/svelte-query';
import { client, export_, import_, apiVVersionOdataControllerCount, getApiVbyApiVersionSimpleOperation, deleteCallWithoutParametersAndResponse, getCallWithoutParametersAndResponse, patchCallWithoutParametersAndResponse, postCallWithoutParametersAndResponse, putCallWithoutParametersAndResponse, deleteFoo, callWithDescriptions, deprecatedCall, callWithParameters, callWithWeirdParameterNames, getCallWithOptionalParam, postCallWithOptionalParam, postApiVbyApiVersionRequestBody, postApiVbyApiVersionFormData, callWithDefaultParameters, callWithDefaultOptionalParameters, callToTestOrderOfParams, duplicateName, duplicateName2, duplicateName3, duplicateName4, callWithNoContentResponse, callWithResponseAndNoContentResponse, dummyA, dummyB, callWithResponse, callWithDuplicateResponses, callWithResponses, collectionFormat, types, uploadFile, fileResponse, complexTypes, multipartResponse, multipartRequest, complexParams, callWithResultFromHeader, testErrorCode, nonAsciiæøåÆøÅöôêÊ字符串, putWithFormUrlEncoded } from '../services.gen';
import type { ImportData, ImportResponse, GetApiVbyApiVersionSimpleOperationData, DeleteFooData3, CallWithDescriptionsData, DeprecatedCallData, CallWithParametersData, CallWithWeirdParameterNamesData, GetCallWithOptionalParamData, PostCallWithOptionalParamData, PostCallWithOptionalParamResponse, PostApiVbyApiVersionRequestBodyData, PostApiVbyApiVersionFormDataData, CallWithDefaultParametersData, CallWithDefaultOptionalParametersData, CallToTestOrderOfParamsData, CallWithDuplicateResponsesError, CallWithDuplicateResponsesResponse, CallWithResponsesError, CallWithResponsesResponse, CollectionFormatData, TypesData, UploadFileData, UploadFileResponse, FileResponseData, ComplexTypesData, MultipartRequestData, ComplexParamsData, ComplexParamsResponse, TestErrorCodeData, NonAsciiæøåÆøÅöôêÊ字符串Data, NonAsciiæøåÆøÅöôêÊ字符串Response, PutWithFormUrlEncodedData } from '../types.gen';

type QueryKey<TOptions extends Options> = [
    Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
        _id: string;
        _infinite?: boolean;
    }
];

const createQueryKey = <TOptions extends Options>(id: string, options?: TOptions, infinite?: boolean): QueryKey<TOptions>[0] => {
    const params: QueryKey<TOptions>[0] = { _id: id, baseUrl: (options?.client ?? client).getConfig().baseUrl } as QueryKey<TOptions>[0];
    if (infinite) {
        params._infinite = infinite;
    }
    if (options?.body) {
        params.body = options.body;
    }
    if (options?.headers) {
        params.headers = options.headers;
    }
    if (options?.path) {
        params.path = options.path;
    }
    if (options?.query) {
        params.query = options.query;
    }
    return params;
};

export const exportQueryKey = (options?: Options) => [
    createQueryKey('export', options)
];

export const exportOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await export_({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: exportQueryKey(options)
    });
};

export const importQueryKey = (options: Options<ImportData>) => [
    createQueryKey('import', options)
];

export const importOptions = (options: Options<ImportData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await import_({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: importQueryKey(options)
    });
};

export const importMutation = (options?: Partial<Options<ImportData>>) => {
    const mutationOptions: MutationOptions<ImportResponse, DefaultError, Options<ImportData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await import_({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const apiVVersionOdataControllerCountQueryKey = (options?: Options) => [
    createQueryKey('apiVVersionOdataControllerCount', options)
];

export const apiVVersionOdataControllerCountOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await apiVVersionOdataControllerCount({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: apiVVersionOdataControllerCountQueryKey(options)
    });
};

export const getApiVbyApiVersionSimpleOperationQueryKey = (options: Options<GetApiVbyApiVersionSimpleOperationData>) => [
    createQueryKey('getApiVbyApiVersionSimpleOperation', options)
];

export const getApiVbyApiVersionSimpleOperationOptions = (options: Options<GetApiVbyApiVersionSimpleOperationData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await getApiVbyApiVersionSimpleOperation({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiVbyApiVersionSimpleOperationQueryKey(options)
    });
};

export const deleteCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await deleteCallWithoutParametersAndResponse({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getCallWithoutParametersAndResponseQueryKey = (options?: Options) => [
    createQueryKey('getCallWithoutParametersAndResponse', options)
];

export const getCallWithoutParametersAndResponseOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await getCallWithoutParametersAndResponse({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: getCallWithoutParametersAndResponseQueryKey(options)
    });
};

export const patchCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await patchCallWithoutParametersAndResponse({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const postCallWithoutParametersAndResponseQueryKey = (options?: Options) => [
    createQueryKey('postCallWithoutParametersAndResponse', options)
];

export const postCallWithoutParametersAndResponseOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await postCallWithoutParametersAndResponse({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: postCallWithoutParametersAndResponseQueryKey(options)
    });
};

export const postCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await postCallWithoutParametersAndResponse({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const putCallWithoutParametersAndResponseMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await putCallWithoutParametersAndResponse({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const deleteFooMutation = (options?: Partial<Options<DeleteFooData3>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<DeleteFooData3>> = {
        mutationFn: async (localOptions) => {
            const { data } = await deleteFoo({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callWithDescriptionsQueryKey = (options?: Options<CallWithDescriptionsData>) => [
    createQueryKey('callWithDescriptions', options)
];

export const callWithDescriptionsOptions = (options?: Options<CallWithDescriptionsData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithDescriptions({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithDescriptionsQueryKey(options)
    });
};

export const callWithDescriptionsMutation = (options?: Partial<Options<CallWithDescriptionsData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<CallWithDescriptionsData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await callWithDescriptions({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const deprecatedCallQueryKey = (options: Options<DeprecatedCallData>) => [
    createQueryKey('deprecatedCall', options)
];

export const deprecatedCallOptions = (options: Options<DeprecatedCallData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await deprecatedCall({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: deprecatedCallQueryKey(options)
    });
};

export const deprecatedCallMutation = (options?: Partial<Options<DeprecatedCallData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<DeprecatedCallData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await deprecatedCall({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callWithParametersQueryKey = (options: Options<CallWithParametersData>) => [
    createQueryKey('callWithParameters', options)
];

export const callWithParametersOptions = (options: Options<CallWithParametersData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithParameters({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithParametersQueryKey(options)
    });
};

const createInfiniteParams = <K extends Pick<QueryKey<Options>[0], 'body' | 'headers' | 'path' | 'query'>>(queryKey: QueryKey<Options>, page: K) => {
    const params = queryKey[0];
    if (page.body) {
        params.body = {
            ...queryKey[0].body as any,
            ...page.body as any
        };
    }
    if (page.headers) {
        params.headers = {
            ...queryKey[0].headers,
            ...page.headers
        };
    }
    if (page.path) {
        params.path = {
            ...queryKey[0].path,
            ...page.path
        };
    }
    if (page.query) {
        params.query = {
            ...queryKey[0].query,
            ...page.query
        };
    }
    return params as unknown as typeof page;
};

export const callWithParametersInfiniteQueryKey = (options: Options<CallWithParametersData>): QueryKey<Options<CallWithParametersData>> => [
    createQueryKey('callWithParameters', options, true)
];

export const callWithParametersInfiniteOptions = (options: Options<CallWithParametersData>) => {
    return infiniteQueryOptions<unknown, DefaultError, InfiniteData<unknown>, QueryKey<Options<CallWithParametersData>>, string | null | Pick<QueryKey<Options<CallWithParametersData>>[0], 'body' | 'headers' | 'path' | 'query'>>(
    // @ts-ignore
    {
        queryFn: async ({ pageParam, queryKey }) => {
            // @ts-ignore
            const page: Pick<QueryKey<Options<CallWithParametersData>>[0], 'body' | 'headers' | 'path' | 'query'> = typeof pageParam === 'object' ? pageParam : {
                query: {
                    cursor: pageParam
                }
            };
            const params = createInfiniteParams(queryKey, page);
            const { data } = await callWithParameters({
                ...options,
                ...params,
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithParametersInfiniteQueryKey(options)
    });
};

export const callWithParametersMutation = (options?: Partial<Options<CallWithParametersData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<CallWithParametersData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await callWithParameters({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callWithWeirdParameterNamesQueryKey = (options: Options<CallWithWeirdParameterNamesData>) => [
    createQueryKey('callWithWeirdParameterNames', options)
];

export const callWithWeirdParameterNamesOptions = (options: Options<CallWithWeirdParameterNamesData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithWeirdParameterNames({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithWeirdParameterNamesQueryKey(options)
    });
};

export const callWithWeirdParameterNamesMutation = (options?: Partial<Options<CallWithWeirdParameterNamesData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<CallWithWeirdParameterNamesData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await callWithWeirdParameterNames({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getCallWithOptionalParamQueryKey = (options: Options<GetCallWithOptionalParamData>) => [
    createQueryKey('getCallWithOptionalParam', options)
];

export const getCallWithOptionalParamOptions = (options: Options<GetCallWithOptionalParamData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await getCallWithOptionalParam({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: getCallWithOptionalParamQueryKey(options)
    });
};

export const getCallWithOptionalParamInfiniteQueryKey = (options: Options<GetCallWithOptionalParamData>): QueryKey<Options<GetCallWithOptionalParamData>> => [
    createQueryKey('getCallWithOptionalParam', options, true)
];

export const getCallWithOptionalParamInfiniteOptions = (options: Options<GetCallWithOptionalParamData>) => {
    return infiniteQueryOptions<unknown, DefaultError, InfiniteData<unknown>, QueryKey<Options<GetCallWithOptionalParamData>>, number | Pick<QueryKey<Options<GetCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'>>(
    // @ts-ignore
    {
        queryFn: async ({ pageParam, queryKey }) => {
            // @ts-ignore
            const page: Pick<QueryKey<Options<GetCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'> = typeof pageParam === 'object' ? pageParam : {
                query: {
                    page: pageParam
                }
            };
            const params = createInfiniteParams(queryKey, page);
            const { data } = await getCallWithOptionalParam({
                ...options,
                ...params,
                throwOnError: true
            });
            return data;
        },
        queryKey: getCallWithOptionalParamInfiniteQueryKey(options)
    });
};

export const postCallWithOptionalParamQueryKey = (options: Options<PostCallWithOptionalParamData>) => [
    createQueryKey('postCallWithOptionalParam', options)
];

export const postCallWithOptionalParamOptions = (options: Options<PostCallWithOptionalParamData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await postCallWithOptionalParam({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: postCallWithOptionalParamQueryKey(options)
    });
};

export const postCallWithOptionalParamInfiniteQueryKey = (options: Options<PostCallWithOptionalParamData>): QueryKey<Options<PostCallWithOptionalParamData>> => [
    createQueryKey('postCallWithOptionalParam', options, true)
];

export const postCallWithOptionalParamInfiniteOptions = (options: Options<PostCallWithOptionalParamData>) => {
    return infiniteQueryOptions<PostCallWithOptionalParamResponse, DefaultError, InfiniteData<PostCallWithOptionalParamResponse>, QueryKey<Options<PostCallWithOptionalParamData>>, number | null | Pick<QueryKey<Options<PostCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'>>(
    // @ts-ignore
    {
        queryFn: async ({ pageParam, queryKey }) => {
            // @ts-ignore
            const page: Pick<QueryKey<Options<PostCallWithOptionalParamData>>[0], 'body' | 'headers' | 'path' | 'query'> = typeof pageParam === 'object' ? pageParam : {
                body: {
                    offset: pageParam
                }
            };
            const params = createInfiniteParams(queryKey, page);
            const { data } = await postCallWithOptionalParam({
                ...options,
                ...params,
                throwOnError: true
            });
            return data;
        },
        queryKey: postCallWithOptionalParamInfiniteQueryKey(options)
    });
};

export const postCallWithOptionalParamMutation = (options?: Partial<Options<PostCallWithOptionalParamData>>) => {
    const mutationOptions: MutationOptions<PostCallWithOptionalParamResponse, DefaultError, Options<PostCallWithOptionalParamData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postCallWithOptionalParam({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const postApiVbyApiVersionRequestBodyQueryKey = (options?: Options<PostApiVbyApiVersionRequestBodyData>) => [
    createQueryKey('postApiVbyApiVersionRequestBody', options)
];

export const postApiVbyApiVersionRequestBodyOptions = (options?: Options<PostApiVbyApiVersionRequestBodyData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await postApiVbyApiVersionRequestBody({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: postApiVbyApiVersionRequestBodyQueryKey(options)
    });
};

export const postApiVbyApiVersionRequestBodyMutation = (options?: Partial<Options<PostApiVbyApiVersionRequestBodyData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<PostApiVbyApiVersionRequestBodyData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postApiVbyApiVersionRequestBody({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const postApiVbyApiVersionFormDataQueryKey = (options?: Options<PostApiVbyApiVersionFormDataData>) => [
    createQueryKey('postApiVbyApiVersionFormData', options)
];

export const postApiVbyApiVersionFormDataOptions = (options?: Options<PostApiVbyApiVersionFormDataData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await postApiVbyApiVersionFormData({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: postApiVbyApiVersionFormDataQueryKey(options)
    });
};

export const postApiVbyApiVersionFormDataMutation = (options?: Partial<Options<PostApiVbyApiVersionFormDataData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<PostApiVbyApiVersionFormDataData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postApiVbyApiVersionFormData({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callWithDefaultParametersQueryKey = (options?: Options<CallWithDefaultParametersData>) => [
    createQueryKey('callWithDefaultParameters', options)
];

export const callWithDefaultParametersOptions = (options?: Options<CallWithDefaultParametersData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithDefaultParameters({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithDefaultParametersQueryKey(options)
    });
};

export const callWithDefaultOptionalParametersQueryKey = (options?: Options<CallWithDefaultOptionalParametersData>) => [
    createQueryKey('callWithDefaultOptionalParameters', options)
];

export const callWithDefaultOptionalParametersOptions = (options?: Options<CallWithDefaultOptionalParametersData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithDefaultOptionalParameters({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithDefaultOptionalParametersQueryKey(options)
    });
};

export const callWithDefaultOptionalParametersMutation = (options?: Partial<Options<CallWithDefaultOptionalParametersData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<CallWithDefaultOptionalParametersData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await callWithDefaultOptionalParameters({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callToTestOrderOfParamsMutation = (options?: Partial<Options<CallToTestOrderOfParamsData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<CallToTestOrderOfParamsData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await callToTestOrderOfParams({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const duplicateNameMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await duplicateName({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const duplicateName2QueryKey = (options?: Options) => [
    createQueryKey('duplicateName2', options)
];

export const duplicateName2Options = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await duplicateName2({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: duplicateName2QueryKey(options)
    });
};

export const duplicateName3QueryKey = (options?: Options) => [
    createQueryKey('duplicateName3', options)
];

export const duplicateName3Options = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await duplicateName3({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: duplicateName3QueryKey(options)
    });
};

export const duplicateName3Mutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await duplicateName3({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const duplicateName4Mutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await duplicateName4({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callWithNoContentResponseQueryKey = (options?: Options) => [
    createQueryKey('callWithNoContentResponse', options)
];

export const callWithNoContentResponseOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithNoContentResponse({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithNoContentResponseQueryKey(options)
    });
};

export const callWithResponseAndNoContentResponseQueryKey = (options?: Options) => [
    createQueryKey('callWithResponseAndNoContentResponse', options)
];

export const callWithResponseAndNoContentResponseOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithResponseAndNoContentResponse({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithResponseAndNoContentResponseQueryKey(options)
    });
};

export const dummyAQueryKey = (options?: Options) => [
    createQueryKey('dummyA', options)
];

export const dummyAOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await dummyA({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: dummyAQueryKey(options)
    });
};

export const dummyBQueryKey = (options?: Options) => [
    createQueryKey('dummyB', options)
];

export const dummyBOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await dummyB({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: dummyBQueryKey(options)
    });
};

export const callWithResponseQueryKey = (options?: Options) => [
    createQueryKey('callWithResponse', options)
];

export const callWithResponseOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithResponse({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithResponseQueryKey(options)
    });
};

export const callWithDuplicateResponsesQueryKey = (options?: Options) => [
    createQueryKey('callWithDuplicateResponses', options)
];

export const callWithDuplicateResponsesOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithDuplicateResponses({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithDuplicateResponsesQueryKey(options)
    });
};

export const callWithDuplicateResponsesMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await callWithDuplicateResponses({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callWithResponsesMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<CallWithResponsesResponse, CallWithResponsesError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await callWithResponses({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const collectionFormatQueryKey = (options: Options<CollectionFormatData>) => [
    createQueryKey('collectionFormat', options)
];

export const collectionFormatOptions = (options: Options<CollectionFormatData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await collectionFormat({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: collectionFormatQueryKey(options)
    });
};

export const typesQueryKey = (options: Options<TypesData>) => [
    createQueryKey('types', options)
];

export const typesOptions = (options: Options<TypesData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await types({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: typesQueryKey(options)
    });
};

export const uploadFileQueryKey = (options: Options<UploadFileData>) => [
    createQueryKey('uploadFile', options)
];

export const uploadFileOptions = (options: Options<UploadFileData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await uploadFile({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: uploadFileQueryKey(options)
    });
};

export const uploadFileMutation = (options?: Partial<Options<UploadFileData>>) => {
    const mutationOptions: MutationOptions<UploadFileResponse, DefaultError, Options<UploadFileData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await uploadFile({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const fileResponseQueryKey = (options: Options<FileResponseData>) => [
    createQueryKey('fileResponse', options)
];

export const fileResponseOptions = (options: Options<FileResponseData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await fileResponse({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: fileResponseQueryKey(options)
    });
};

export const complexTypesQueryKey = (options: Options<ComplexTypesData>) => [
    createQueryKey('complexTypes', options)
];

export const complexTypesOptions = (options: Options<ComplexTypesData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await complexTypes({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: complexTypesQueryKey(options)
    });
};

export const multipartResponseQueryKey = (options?: Options) => [
    createQueryKey('multipartResponse', options)
];

export const multipartResponseOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await multipartResponse({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: multipartResponseQueryKey(options)
    });
};

export const multipartRequestQueryKey = (options?: Options<MultipartRequestData>) => [
    createQueryKey('multipartRequest', options)
];

export const multipartRequestOptions = (options?: Options<MultipartRequestData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await multipartRequest({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: multipartRequestQueryKey(options)
    });
};

export const multipartRequestMutation = (options?: Partial<Options<MultipartRequestData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<MultipartRequestData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await multipartRequest({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const complexParamsMutation = (options?: Partial<Options<ComplexParamsData>>) => {
    const mutationOptions: MutationOptions<ComplexParamsResponse, DefaultError, Options<ComplexParamsData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await complexParams({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const callWithResultFromHeaderQueryKey = (options?: Options) => [
    createQueryKey('callWithResultFromHeader', options)
];

export const callWithResultFromHeaderOptions = (options?: Options) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await callWithResultFromHeader({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: callWithResultFromHeaderQueryKey(options)
    });
};

export const callWithResultFromHeaderMutation = (options?: Partial<Options>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options> = {
        mutationFn: async (localOptions) => {
            const { data } = await callWithResultFromHeader({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const testErrorCodeQueryKey = (options: Options<TestErrorCodeData>) => [
    createQueryKey('testErrorCode', options)
];

export const testErrorCodeOptions = (options: Options<TestErrorCodeData>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await testErrorCode({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: testErrorCodeQueryKey(options)
    });
};

export const testErrorCodeMutation = (options?: Partial<Options<TestErrorCodeData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<TestErrorCodeData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await testErrorCode({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const nonAsciiæøåÆøÅöôêÊ字符串QueryKey = (options: Options<NonAsciiæøåÆøÅöôêÊ字符串Data>) => [
    createQueryKey('nonAsciiæøåÆøÅöôêÊ字符串', options)
];

export const nonAsciiæøåÆøÅöôêÊ字符串Options = (options: Options<NonAsciiæøåÆøÅöôêÊ字符串Data>) => {
    return queryOptions({
        queryFn: async ({ queryKey }) => {
            const { data } = await nonAsciiæøåÆøÅöôêÊ字符串({
                ...options,
                ...queryKey[0],
                throwOnError: true
            });
            return data;
        },
        queryKey: nonAsciiæøåÆøÅöôêÊ字符串QueryKey(options)
    });
};

export const nonAsciiæøåÆøÅöôêÊ字符串Mutation = (options?: Partial<Options<NonAsciiæøåÆøÅöôêÊ字符串Data>>) => {
    const mutationOptions: MutationOptions<NonAsciiæøåÆøÅöôêÊ字符串Response, DefaultError, Options<NonAsciiæøåÆøÅöôêÊ字符串Data>> = {
        mutationFn: async (localOptions) => {
            const { data } = await nonAsciiæøåÆøÅöôêÊ字符串({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const putWithFormUrlEncodedMutation = (options?: Partial<Options<PutWithFormUrlEncodedData>>) => {
    const mutationOptions: MutationOptions<unknown, DefaultError, Options<PutWithFormUrlEncodedData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await putWithFormUrlEncoded({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};