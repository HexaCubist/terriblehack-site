import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getProjects } from '$lib/server/directus';

export const load: PageServerLoad = async ({ params }) => {
	const projects = await getProjects();
	console.log('projects', projects.length);
	return { projects };
};
