import apiSlice from "./api";
const buildQueryString = (
	type: string,
	category: string,
	limit: number
): string => {
	let queryString = "";
	const params: string[] = [];

	if (type) params.push(`type=${encodeURIComponent(type)}`);
	if (category) params.push(`category=${encodeURIComponent(category)}`);
	if (limit) params.push(`limit=${encodeURIComponent(limit.toString())}`);

	if (params.length > 0) {
		queryString = `?${params.join("&")}`;
	}

	return queryString;
};

export const instructorApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		instructors: builder.query({
			query: (body) => {
				return {
					url: `/instructors${buildQueryString(body.type, body.category, body.limit)}`,
					method: "GET",
				};
			},
		}),
		instructor: builder.query({
			query: (body) => {
				return {
					url: `/instructors/${body.id}`,
					method: "GET",
				};
			},
		}),
	}),
});

export const { useInstructorsQuery, useInstructorQuery } = instructorApiSlice;
