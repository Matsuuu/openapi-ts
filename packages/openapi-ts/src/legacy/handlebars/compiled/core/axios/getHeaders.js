export default {
  compiler: [8, '>= 4.3.0'],
  main: function (container, depth0, helpers, partials, data) {
    return "export const getHeaders = async <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>): Promise<Record<string, string>> => {\n	const [token, username, password, additionalHeaders] = await Promise.all([\n		// @ts-ignore\n		resolve(options, config.TOKEN),\n		// @ts-ignore\n		resolve(options, config.USERNAME),\n		// @ts-ignore\n		resolve(options, config.PASSWORD),\n		// @ts-ignore\n		resolve(options, config.HEADERS),\n	]);\n\n	const headers = Object.entries({\n		Accept: 'application/json',\n		...additionalHeaders,\n		...options.headers,\n	})\n	.filter(([, value]) => value !== undefined && value !== null)\n	.reduce((headers, [key, value]) => ({\n		...headers,\n		[key]: String(value),\n	}), {} as Record<string, string>);\n\n	if (isStringWithValue(token)) {\n		headers['Authorization'] = `Bearer ${token}`;\n	}\n\n	if (isStringWithValue(username) && isStringWithValue(password)) {\n		const credentials = base64(`${username}:${password}`);\n		headers['Authorization'] = `Basic ${credentials}`;\n	}\n\n	if (options.body !== undefined) {\n		if (options.mediaType) {\n			headers['Content-Type'] = options.mediaType;\n		} else if (isBlob(options.body)) {\n			headers['Content-Type'] = options.body.type || 'application/octet-stream';\n		} else if (isString(options.body)) {\n			headers['Content-Type'] = 'text/plain';\n		} else if (!isFormData(options.body)) {\n			headers['Content-Type'] = 'application/json';\n		}\n	} else if (options.formData !== undefined) {\n		if (options.mediaType) {\n			headers['Content-Type'] = options.mediaType;\n		}\n	}\n\n	return headers;\n};";
  },
  useData: true,
};
