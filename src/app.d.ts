// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { EventLocation, globalData } from '$lib/models';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			events: EventLocation[];
			globalData: globalData;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
