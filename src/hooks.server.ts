import type { Collections } from '$lib/server/.directus/generated/client';
import { getSiteData } from '$lib/server/directus';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// event.locals.globalData = await getSiteData();
	event.locals.globalData = (await getSiteData()) as Collections.Global;
	// Check to see if we need to redirect
	const redirects = event.locals.globalData.redirects || [];
	for (const redirect of redirects) {
		if (event.url.pathname === redirect.from) {
			return Response.redirect(redirect.to, 307);
		}
	}

	const response = await resolve(event);
	return response;
};
