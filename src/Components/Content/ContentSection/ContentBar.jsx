import React, { useEffect, useState } from "react";
import InputBox from "../../InputBox/InputBox";
import GetInitials from "../../../Utils/getInitials";
import styles from "../../../Styles/content.module.css";
import GuiNotes from "../SideGui Notes/GuiNotes";
import { useNavigate, useParams } from "react-router-dom";

function ContentBar() {
	const navigate = useNavigate();
	const list = JSON.parse(localStorage.getItem("GroupList"));
	const { grpName } = useParams();
	const grpId = decodeURIComponent(grpName);
	const [selectedGroup, setSelectedGroup] = useState(null);
	useEffect(() => {
		const Group = list.find((item) => item.name === grpId);
		setSelectedGroup(Group);
	}, [grpId]);
	if (!selectedGroup) return <div>Error: Group not Exists.</div>;

	const IconText = GetInitials(selectedGroup.name);
	const handleUpdateNotes = (updatedGroups) => {
		const updatedGroup = updatedGroups.find((group) => group.name === grpId);
		setSelectedGroup(updatedGroup);
	};

	return (
		<div className={styles.Content}>
			<div className={styles.grpTitle}>
				<div className={styles.backtohome} onClick={() => navigate("/")}></div>
				<div
					className={styles.grpIcon}
					style={{ background: selectedGroup.color }}>
					{IconText}
				</div>
				<div className={styles.grpTitleText}>{selectedGroup.name}</div>
			</div>
			<div className={styles.notesContent}>
				{selectedGroup.content.map((item) => (
					<GuiNotes
						key={item.id}
						text={item.text}
						time={item.time}
						date={item.date}
					/>
				))}
			</div>
			<div className={styles.Inputbox}>
				<InputBox groupID={grpId} onUpdate={handleUpdateNotes} />
			</div>
		</div>
	);
}

export default ContentBar;
