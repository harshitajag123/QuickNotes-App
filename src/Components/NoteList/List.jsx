import React from "react";
import styles from "../../Styles/list.module.css";
import GetInitials from "../../Utils/getInitials";
import { useNavigate } from "react-router-dom";

function List({ grpName, grpColor, selectedGroup, setSelectedGroup }) {
	const navigate = useNavigate();
	const InitialsOfGrpName = GetInitials(grpName);

	return (
		<div
			className={`${styles.list} ${
				selectedGroup === grpName ? styles.selected : ""
			}`}
			onClick={() => {
				setSelectedGroup(grpName);
				navigate(`/content/${encodeURIComponent(grpName)}`);
			}}>
			<div className={styles.grpicon} style={{ background: grpColor }}>
				{InitialsOfGrpName}
			</div>
			<div className={styles.listgrpname}>{grpName}</div>
		</div>
	);
}

export default List;
