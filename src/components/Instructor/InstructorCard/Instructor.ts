export default interface Instructor {
	name: string;
	sessionsCount: number;
	reviewsCount: number;
	position: string;
	organization: string;
	image: string;
	isTopRated?: boolean;
}
export interface InstructorListItem {
	id: number;
	name: string;
	avatarUrl: string;
	reviewsCount: number;
	coursesCount: number;
	organization: string;
	jobTitle: string;
}
