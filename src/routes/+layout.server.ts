import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { EventLocation, globalData } from '$lib/models';
import { eventList } from '$lib/server/directus';

export const load: LayoutServerLoad = async ({ params }) => {
	return {
		events: await eventList,
		globalData: {
			extra_links: [
				{
					title: 'Kiwijam',
					url: 'https://kiwijam.org/'
				},
				{
					title: 'UoA Maker Club',
					url: 'https://makeuoa.nz/'
				},
				{
					title: 'ICRS',
					url: 'https://www.imperialcollegeunion.org/activities/a-to-z/robotics'
				},
				{
					title: 'Questionable Research Labs',
					url: 'https://questionable.org.nz/'
				},
				{ title: '48Hours NZ', url: 'https://www.48hours.co.nz/' },
				{ title: 'Rat World', url: 'https://www.ratworldmag.com/' }
			]
		} as globalData
	};
};
