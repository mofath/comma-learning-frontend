import React, { useState } from "react";
import CourseContentHeader from "../ContentHeader/ContentHeader";
import InputEditor from "@/components/InputEditor/InputEditor";
import { User } from "@/store/slices/auth.slice";
import QuestionDetail from "../QuestionsList/QuestionDetail/QuestionDetail";
import QuestionList from "../QuestionsList/QuestionsList";
import { Question } from "@/types/Question";
import {
	useAddQuestionMutation,
	useGetQuestionsQuery,
	useDeleteQuestionMutation,
	useUpdateQuestionMutation,
} from "@/services/questions.service";
import styles from "./CourseQuestions.module.css";

interface CourseQuestionsProps {
	courseId: string;
	user: User | null;
}

const CourseQuestions: React.FC<CourseQuestionsProps> = ({
	courseId,
	user,
}) => {
	const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
		null
	);

	const [newQuestionText, setNewQuestionText] = useState<string>("");
	const { data: questionsData, refetch } = useGetQuestionsQuery({ courseId });
	const [addQuestion, { isLoading: isAdding }] = useAddQuestionMutation();
	const [deleteQuestion] = useDeleteQuestionMutation();
	const [updateQuestion] = useUpdateQuestionMutation();

	const handleQuestionClick = (id: number) => {
		setSelectedQuestionId(id);
	};

	const handleSubmitQuestion = async (newQuestionText: string) => {
		if (!user) {
			alert("You must be logged in to ask a question.");
			return;
		}

		try {
			await addQuestion({
				question: { text: newQuestionText },
				userId: user.id,
				courseId: parseInt(courseId),
			}).unwrap();
			setNewQuestionText("");
			refetch(); // Refresh questions list
		} catch (error) {
			console.error("Failed to add question:", error);
		}
	};

	return (
		<div className={styles["course-content"]}>
			{!selectedQuestionId ? (
				<>
					<CourseContentHeader title="All questions in this course" />
					<div>
						<InputEditor
							onSubmit={handleSubmitQuestion}
							isLoading={false}
							placeholder="Write your question here..."
						/>
					</div>
					<div className={styles["course-questions__content"]}>
						<QuestionList
							onQuestionClick={handleQuestionClick}
							questions={questionsData?.data || []}
						/>
						{/* <p className={styles["course-subtitle"]}>Other trainees Questions</p>
							<Button variant="transparent" size="full" className="load-more-btn">
								See More Questions
							</Button> */}
					</div>
				</>
			) : (
				<>
					<div className={styles["back-to-questions-btn-container"]}>
						<button onClick={() => setSelectedQuestionId(null)}>
							Back to All Questions
						</button>
					</div>
					<QuestionDetail
						question={
							questionsData?.data?.find(
								(q: any) => q.id === selectedQuestionId
							) as Question
						}
						userId={user?.id}
						questionId={selectedQuestionId}
						showReplies={true}
					/>
				</>
			)}
		</div>
	);
};

export default CourseQuestions;
