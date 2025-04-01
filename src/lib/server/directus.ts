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
	readProjectsItems
} from './.directus/generated/client';
import { env } from '$env/dynamic/public';

const client = createTypedClient(env.PUBLIC_HOST).with(rest());

export const getEvents = async () => {
	return await client.request(readEventsItems());
};

export const eventList = getEvents();

export const getEvent = async (slug: string) => {
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

export const getProjects = async (featured: boolean) => {
	if (featured) {
		return await client.request(
			readProjectsItems({
				filter: {
					featured: true
				}
			})
		);
	}
	return await client.request(readProjectsItems());
};
