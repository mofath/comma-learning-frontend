export interface User {
	id: string;
	fullName: string;
	avatarUrl?: string;
	jobTitle?: string;
	organization?: string;
}

export interface CourseReview {
	id: string;
	text: string;
	rating: number;
	courseId: number;
	user: User;
}

export interface ReviewSummary {
    totalReviews: number;
    oneStarCount: number;
    twoStarCount: number;
    threeStarCount: number;
    fourStarCount: number;
    fiveStarCount: number;
    overallRating: string;
}

export interface CreateCourseReviewDto {
	text: string;
	rating: number;
	userId: number;
}