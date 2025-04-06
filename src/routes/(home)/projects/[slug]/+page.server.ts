import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getProject, getProjects } from '$lib/server/directus';

export const load: PageServerLoad = async ({ params }) => {
	const project = await getProject(params.slug);
	return { project };
};
