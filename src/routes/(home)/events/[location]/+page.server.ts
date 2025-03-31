import type { PageServerLoad } from './$types';
import { getEvent } from '$lib/server/directus';

export const load: PageServerLoad = async ({ params }) => {
	return { event: await getEvent(params.location) };
};
