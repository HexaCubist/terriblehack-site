import type { Collections } from '$lib/server/.directus/generated/client';
import { getSiteData } from '$lib/server/directus';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// event.locals.globalData = await getSiteData();
	event.locals.globalData = (await getSiteData()) as Collections.Global;
	// Check to see if we need to redirect
	console.log('Global Data:', event.locals.globalData);
	const redirects = event.locals.globalData.redirects || [];
	console.log('Redirects:', redirects);
	console.log('Request URL:', event.url.pathname);
	for (const redirect of redirects) {
		if (event.url.pathname === redirect.from) {
			return Response.redirect(redirect.to, 307);
		}
	}

	const response = await resolve(event);
	return response;
};
