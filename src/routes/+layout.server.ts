import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { eventList, getSiteData } from '$lib/server/directus';
import { getGlobal } from '$lib/server/.directus/generated/client';

export const load: LayoutServerLoad = async ({ params }) => {
	return {
		events: await eventList,
		globalData: await getSiteData()
	};
};
