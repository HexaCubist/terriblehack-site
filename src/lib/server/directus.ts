import type { EventLocation } from '$lib/models';

export const getEvents = async (): Promise<EventLocation[]> => {
	const events = [
		{
			name: 'Tāmaki Makaurau',
			location: 'Tāmaki Makaurau',
			description: 'A weekend adventure in creating strange things✨',
			slug: 'akl',
			start: new Date(1741928400000),
			end: new Date(1742014800000 + 46 * 60 * 60 * 1000),
			color: '#9b51e0',
			timezone: 'Pacific/',
			details: {
				blurb: 'A weekend adventure in creating strange things✨',
				cost: 'Free',
				faq: [
					{
						header: 'What is this event?',
						body: 'A weekend adventure in creating strange things✨'
					},
					{
						header: 'Who can come?',
						body: 'Anyone who is interested in making things!'
					}
				],
				schedule: {
					before: 'Before the event',
					accordion: [
						{
							header: 'Friday',
							body: '7:00pm - Doors open'
						},
						{
							header: 'Saturday',
							body: '9:00am - Breakfast\n10:00am - Opening ceremony\n10:30am - Hacking begins\n12:00pm - Lunch\n1:00pm - Workshops\n6:00pm - Dinner\n7:00pm - Workshops\n12:00am - Midnight snack'
						},
						{
							header: 'Sunday',
							body: '9:00am - Breakfast\n10:00am - Workshops\n12:00pm - Lunch\n3:00pm - Hacking ends\n3:30pm - Demos begin\n5:00pm - Closing ceremony\n6:00pm - Event ends'
						}
					],
					after: 'After the event'
				}
			}
		},
		{
			name: 'Sydney',
			location: 'Sydney',
			description: 'A weekend adventure in creating strange things✨',
			slug: 'syd',
			start: new Date(1743750000000),
			end: new Date(1743750000000 + 46 * 60 * 60 * 1000),
			color: '#ff6900',
			timezone: 'Australia/',
			details: {
				blurb: 'A weekend adventure in creating strange things✨',
				cost: 'Free',
				faq: [
					{
						header: 'What is this event?',
						body: 'A weekend adventure in creating strange things✨'
					},
					{
						header: 'Who can come?',
						body: 'Anyone who is interested in making things!'
					}
				],
				schedule: {
					before: 'Before the event',
					accordion: [
						{
							header: 'Friday',
							body: '7:00pm - Doors open'
						},
						{
							header: 'Saturday',
							body: '9:00am - Breakfast\n10:00am - Opening ceremony\n10:30am - Hacking begins\n12:00pm - Lunch\n1:00pm - Workshops\n6:00pm - Dinner\n7:00pm - Workshops\n12:00am - Midnight snack'
						},
						{
							header: 'Sunday',
							body: '9:00am - Breakfast\n10:00am - Workshops\n12:00pm - Lunch\n3:00pm - Hacking ends\n3:30pm - Demos begin\n5:00pm - Closing ceremony\n6:00pm - Event ends'
						}
					],
					after: 'After the event'
				}
			}
		},
		{
			name: 'London',
			location: 'London',
			description: 'A weekend adventure in creating strange things✨',
			slug: 'lon',
			start: new Date(1760115600000),
			end: new Date(1760115600000 + 46 * 60 * 60 * 1000),
			color: '#0772e3',
			timezone: 'Europe/',
			details: {
				blurb: `<p style="font-size:1.5rem; text-wrap: balance;">Terrible Ideas happen everywhere: from pottery to programming.</p><p>This event is a challenge to create the most terrible, awful, brilliant ideas you can think of! From robot-driven tattoo guns and soleless Jandals to vegemite flavoured fudge and the world’s most professionally bad D&D module, join us in a celebration of failure, creativity, and stupid, terrible decisions.</p><p>We’ll be running this event in Sydney, Auckland, and maybe London! This page is for the UNSW Sydney venue.</p>`,
				cost: 'Free',
				faq: [
					{
						header: 'What is this event?',
						body: 'A weekend adventure in creating strange things✨'
					},
					{
						header: 'Who can come?',
						body: 'Anyone who is interested in making things!'
					}
				],
				schedule: {
					before: 'Before the event',
					accordion: [
						{
							header: 'Friday',
							body: '7:00pm - Doors open'
						},
						{
							header: 'Saturday',
							body: '9:00am - Breakfast\n10:00am - Opening ceremony\n10:30am - Hacking begins\n12:00pm - Lunch\n1:00pm - Workshops\n6:00pm - Dinner\n7:00pm - Workshops\n12:00am - Midnight snack'
						},
						{
							header: 'Sunday',
							body: '9:00am - Breakfast\n10:00am - Workshops\n12:00pm - Lunch\n3:00pm - Hacking ends\n3:30pm - Demos begin\n5:00pm - Closing ceremony\n6:00pm - Event ends'
						}
					],
					after: 'After the event'
				}
			}
		}
	] as EventLocation[];
	return events;
};

export const eventList = getEvents();

export const getEvent = async (slug: string): Promise<EventLocation> => {
	const events = await eventList;
	const event = events.find((loc) => loc.slug === slug);
	if (!event) {
		throw new Error('Event not found');
	}
	return event;
};
