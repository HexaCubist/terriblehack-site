// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { Collections, EventsItems } from '$lib/server/.directus/generated/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			globalData: Collections.Global;
		}
		interface PageData {
			events: Collections.Events[];
			globalData: Collections.Global;
		}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		dataLayer: any;
	}
}

export {};
