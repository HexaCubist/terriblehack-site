import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getProjects } from '$lib/server/directus';

export const load: PageServerLoad = async ({ params }) => {
	return {
		featured_projects: await getProjects(true)
	};
};
