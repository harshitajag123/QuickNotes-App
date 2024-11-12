import React, { useState } from "react";
import styles from "../../Styles/inputBox.module.css";
import GetTime from "../../Utils/getTime";
import GetDate from "../../Utils/getData";
import { v4 as uuidv4 } from "uuid";
import { IoMdSend } from "react-icons/io";

function InputBox({ groupID, onUpdate }) {
	const [isClicked, setIsClicked] = useState(false);
	const [newData, setNewData] = useState("");

	const handleTextAreaChange = (e) => {
		e.preventDefault();
		const inputValue = e.target.value;
		setNewData(inputValue);
		setIsClicked(Boolean(inputValue));
	};

	const handleSubmit = () => {
		if (newData) {
			const existingGroup = JSON.parse(localStorage.getItem("GroupList"));
			const selectedGroup = existingGroup.find(
				(group) => group.name === groupID
			);
			selectedGroup.content.push({
				id: uuidv4(),
				text: newData,
				date: GetDate(),
				time: GetTime(),
			});
			localStorage.setItem("GroupList", JSON.stringify(existingGroup));
			onUpdate(existingGroup);
			setNewData("");
			setIsClicked(false);
		}
	};
	return (
		<div className={styles.inputbox}>
			<textarea
				name="NotesInput"
				value={newData}
				onChange={handleTextAreaChange}
				spellCheck="false"
				placeholder="Write your notes here"></textarea>
			{/* <img
				src={submitbutton}
				className={styles.submitBtn}
				style={{
					filter: isClicked
						? "brightness(0) saturate(100%) invert(11%) sepia(55%) saturate(5026%) hue-rotate(224deg) brightness(100%) contrast(113%)"
						: "none",
				}}
				alt=""
				onClick={handleSubmit}
			/> */}
			<IoMdSend
				className={styles.submitBtn}
				size={18}
				style={{
					filter: isClicked
						? "brightness(0) saturate(100%) invert(11%) sepia(55%) saturate(5026%) hue-rotate(224deg) brightness(100%) contrast(113%)"
						: "none",
				}}
				alt=""
				onClick={handleSubmit}
			/>
		</div>
	);
}

export default InputBox;

//<IoMdSend />
