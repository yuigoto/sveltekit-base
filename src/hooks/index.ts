import type {
  ExternalFetch,
  GetSession,
  Handle,
  HandleError,
} from "@sveltejs/kit";

/**
 * Gets executed every time SvelteKit receives a request.
 *
 * Use it to modify headers/bodies or even bypass SvelteKit and implement
 * endpoints through code.
 *
 * @param input
 * @returns
 */
export const handle: Handle = async ({ event, resolve }) => {
  // Fill `event.locals` to send data to endpoints
  event.locals.cookie = event.request.headers.get("cookie");
  event.locals.user = "Hello";

  const response = await resolve(event, {
    // Use `ssr` to define which pages should render on server-side.
    // Usually, it's best to not set it.
    // ssr: !event.url.pathname.startsWith("/hello");
  });
  response.headers.set("X-Custom-Header", "I'm A Potato");
  response.headers.set("Set-Cookie", "iam_a=Potato");

  return response;
};

/**
 * Whenever an error occurs during render, this function is executed with the
 * error and event that caused it, useful to format the logged error or send it
 * to a tracker.
 *
 * You can just delete it, if not required.
 *
 * @param input
 */
export const handleError: HandleError = ({ error, event }) => {
  // Example from SvelteKit docs:
  // Sentry.captureException(error, { event });
};

/**
 * Receives an `event`, returns a session object accessible from the client.
 *
 * Executed whenever a page is rendered.
 *
 * @param event
 * @returns
 */
export const getSession: GetSession = (event) => {
  return event.locals.cookie
    ? {
        hasCookie: "YES",
      }
    : {};
};

/**
 * Allows you to modify/replace a fetch request for an external resource, which
 * happens inside a load function on the server (or during pre-rendering).
 *
 * @param request
 * @returns
 */
export const externalFetch: ExternalFetch = (request) => {
  return fetch(request);
};
