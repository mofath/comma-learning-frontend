export interface Instructor {
	id: string;
	name: string;
	level: string;
	jobTitle: string;
	organization: string;
	avatarUrl?: string;
}

export interface Chapter {
	id: number;
	title: string;
	description: string;
	videoUrl: string;
}

export interface Course {
	id: number;
	isFavorite: boolean;
	title: string;
	price: number;
	discountPrice: number;
	rating: number;
	reviewsCount: number;
	posterUrl: string;
	progress?: string | number;
	location?: string;
	time?: string;
	instructor: Instructor;
	categories?: string[];
	type?: string;
	skillLevel: string;
	students: number;
	languages: string;
	captions: string;
	lectures: number;
	video: string;
	features: string[];
	description: string[];
	shortDesc: string;
	starRatings: {
		star1: number;
		star2: number;
		star3: number;
		star4: number;
		star5: number;
	};
}

export interface CourseListItem {
	caption: number;
	description: string;
	discountPrice: number;
	id: number;
	posterUrl: string;
	instructor: {
		name: string;
		id: number;
	};
	price: number;
	rating: number;
	reviewCount: number;
	slug: string;
	title: string;
	totalRating: number;
	updatedAt: string;
	status: boolean;
	enrolled: boolean;

	// id: number;
	// categories: string[];
	// description: string;
	// type: string;
	// isFavorite: boolean;
	// title: string;
	// instructor: Instructor;
	// price: number;
	// discountPrice: number;
	// rating: number;
	// time: string;
	// location: string;
	// reviewsCount: number;
	// posterUrl: string;
	// progress?: string | number;
}
