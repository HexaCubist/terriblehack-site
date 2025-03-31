export interface EventLocation {
	name: string;
	location: string;
	description: string;
	slug: string;
	start: Date;
	end: Date;
	color?: string;
	details: {
		blurb: string;
		cost: string;
		faq: {
			header: string;
			body: string;
		}[];
		schedule: {
			before: string;
			accordion: {
				header: string;
				body: string;
			}[];
			after: string;
		};
	};
	timezone: string;
	registrations?: string;
}

export interface globalData {
	extra_links: {
		title: string;
		url: string;
	}[];
}

export interface Project {
	title: string;
	subtitle: string;
	description: string;
	image: string;
	slug: string;
}
