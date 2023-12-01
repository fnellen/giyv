interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
}: Props): Promise<T> {
    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }
    let bearer = "Bearer 711c8d9896d155f75a865b11785a70685d0daf8581543397cc58f3e9157bd7c1021771f807f6bea0f13c22776eef03fedb21f5c08cdf33192e36d0a34240df544407c755de12c3e5454131d49d9a4bfeaa3ac7c670fd5629f586a1e4e94979311d75c9f856345046a48addb5aee94472dc0de2d30495d7507341d4da0431e5d9";
    const url = new URL(`https://cms.giyv.eu/api/${endpoint}`);

    const res = await fetch(url.toString() + (query ? `?${query}` : ""), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: bearer,
        },
    });
    let data = await res.json();

    if (wrappedByKey) {
        data = data[wrappedByKey];
    }

    if (wrappedByList) {
        data = data[0];
    }

    return data as T;
}