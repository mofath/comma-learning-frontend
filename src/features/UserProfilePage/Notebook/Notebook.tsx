import React from "react";
import styles from "./Notebook.module.css";
import NotesList from "./NotesList/NotesList";
import { userNotesData } from "@/__mocks__/data/user";

const Notebook = () => {
	return (
		<div className={styles["my-courses"]}>
			<div className={styles["my-courses__header"]}>
				<h2>Notebook</h2>
				<p>Check the most important points in your learning journey!</p>
			</div>
			<div className={styles["my-courses__content"]}>
				{userNotesData.map((userNotes, index) => {
					return <NotesList key={index} notesList={userNotes} />;
				})}
			</div>
		</div>
	);
};

export default Notebook;
