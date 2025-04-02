import { env } from '$env/dynamic/public';
import { readAssetRaw } from '@directus/sdk';
import type { Schema } from './server/.directus/generated/client';

export enum imagePreset {
	thumbnail = 'thumbnail',
	tiny = 'tiny',
	small = 'small',
	medium = 'medium',
	large = 'large'
}

export const filetoURL = (file: string, transformation?: imagePreset) => {
	const host = new URL(env.PUBLIC_HOST);
	host.pathname = `/assets/${file}`;
	host.searchParams.set('key', transformation);
	return host.href;
};

export const canShowDate = (event: Schema['events'][0]) => {
	return event.status === 'register' || event.status === 'dates-visible';
};
