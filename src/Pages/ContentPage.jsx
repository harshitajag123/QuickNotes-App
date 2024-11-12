import React from "react";
import NoteList from "../Components/NoteList/NoteList";
import ContentBar from "../Components/Content/ContentSection/ContentBar";
import styles from "../Styles/contentPage.module.css";
function ContentPage() {
	return (
		<div style={{ display: "flex" }}>
			<div className={styles.noteslistcomponent}>
				{" "}
				<NoteList />
			</div>
			<ContentBar />
		</div>
	);
}

export default ContentPage;
