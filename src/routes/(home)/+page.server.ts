import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Project } from '$lib/models';

export const load: PageServerLoad = async ({ params }) => {
	return {
		featured_projects: Array(10)
			.fill(undefined)
			.map((_, i) => ({
				title: `Indispensable (${i + 1})`,
				subtitle: 'It’s a gacha machine for your medication.',
				description:
					'Created using paper mache, cardboard, and a lot of love. This project was a hit at the 2024 event, showing just how far we can take the intersection between gambling and healthcare.',
				image: '/art/hero.png',
				slug: 'indispensable'
			})) as Project[]
	};
};
