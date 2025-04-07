import { env } from '$env/dynamic/public';
import { readAssetRaw } from '@directus/sdk';
import type { Collections, Schema, Types } from './server/.directus/generated/client';
import { DateTime } from 'luxon';
import { onMount } from 'svelte';
import { browser } from '$app/environment';

export enum imagePreset {
	thumbnail = 'thumbnail',
	tiny = 'tiny',
	small = 'small',
	medium = 'medium',
	large = 'large'
}

export const filetoURL = (
	file: Types.UUID | Collections.DirectusFile,
	transformation?: imagePreset
) => {
	const host = new URL(env.PUBLIC_HOST);
	host.pathname = `/assets/${typeof file === 'string' ? file : file.id}`;
	host.searchParams.set('key', transformation || imagePreset.medium);
	return host.href;
};

export const canShowDate = (event: Collections.Events) => {
	return event.status === 'register' || event.status === 'dates-visible';
};

let timezone: undefined | string = $state(undefined);
if (browser) timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
export const getLocalEvent = (events: Collections.Events[]) =>
	events.findIndex((loc) => timezone && timezone.includes(loc.timezone));

export const getLocalEventFromTimezone = (events: Collections.Events[], tz: string) =>
	events.findIndex((loc) => tz && tz.includes(loc.timezone));
