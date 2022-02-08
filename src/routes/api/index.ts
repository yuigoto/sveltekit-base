import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({
  request,
  params,
  url,
  locals,
  platform,
}) => {
  // If you want to get a header:
  // request.headers.get("headerName");

  const { searchParams } = url;
  const keys = searchParams.keys();
  const query = {};
  [...keys].forEach((item) => {
    query[item] = searchParams.get(item);
  });

  return {
    status: 200,
    headers: {},
    body: {
      date: Date.now(),
      params: { ...params },
      query: { ...query },
    },
  };
};
