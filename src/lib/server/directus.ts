import {
	createDirectus,
	readAssetRaw,
	readItem,
	readItems,
	readSingleton,
	rest
} from '@directus/sdk';

import {
	createTypedClient,
	getGlobal,
	readEventsItems,
	readProjectsItems,
	type Collections
} from './.directus/generated/client';
import { env } from '$env/dynamic/public';

const client = createTypedClient(env.PUBLIC_HOST).with(rest());

export const getEvents = async () => {
	return (await client.request(readEventsItems())) as Collections.Events[];
};

export const eventList = getEvents();

export const getEvent = async (slug: string): Promise<Collections.Events> => {
	const events = await eventList;
	const event = events.find((loc) => loc.slug === slug);
	if (!event) {
		throw new Error('Event not found');
	}
	return event;
};

export const getSiteData = async () => {
	return await client.request(getGlobal());
};

getSiteData();

// https://stackoverflow.com/a/2450976
function shuffle(array: any[]) {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
}

export const getProjects = async (featured: boolean, shuffled: boolean) => {
	let res;
	if (featured) {
		res = await client.request(
			readProjectsItems({
				filter: {
					featured: true
				}
			})
		);
	} else {
		res = await client.request(readProjectsItems());
	}
	if (!res) {
		throw new Error('Projects not found');
	}
	if (shuffled) shuffle(res);
	return res;
};
