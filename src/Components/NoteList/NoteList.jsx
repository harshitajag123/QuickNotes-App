import React from "react";
import styles from "../../Styles/noteList.module.css";
import { useState } from "react";
import List from "./List";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
	content: {
		overflowY: "hidden",
		minWidth: "260px",
		maxWidth: "39vw",
		minHeight: "10vh",
		maxHeight: "35vh",
		margin: "10vw auto ",
		paddingTop: "10px",
	},
};
function NoteList() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [err, setErr] = useState(false);
	const [grpName, setGrpName] = useState("");
	const [selectedColor, setSelectedColor] = useState(null);
	const [group, setGroup] = useState([]);
	const [currGrp, setCurrGrp] = useState(null);

	if (!localStorage.getItem("GroupList")) {
		const initialGrpList = [];
		localStorage.setItem("GroupList", JSON.stringify(initialGrpList));
	}

	const handleColorClick = (color) => {
		setSelectedColor(color);
	};
	const grpList = JSON.parse(localStorage.getItem("GroupList"));

	const handleCreateGroup = () => {
		setErr("");
		if (grpName && selectedColor) {
			const existingGrps = JSON.parse(localStorage.getItem("GroupList"));
			const isGrpExists = existingGrps.some(
				(group) => group.name.toLowerCase() === grpName.toLowerCase()
			);
			if (isGrpExists) {
				setErr("Group already exists");
				setGrpName("");
				return;
			}
			const newGrp = {
				id: uuidv4(),
				name: grpName,
				color: selectedColor,
				content: [],
			};

			const updatedGrpList = [...existingGrps, newGrp];
			localStorage.setItem("GroupList", JSON.stringify(updatedGrpList));
			setGrpName("");
			setGroup(updatedGrpList);
			setIsModalOpen(false);
		}
		setErr("⚠️Some Fields are missing");
	};

	return (
		<div
			style={{
				maxWidth: "30vw",
				width: "100%",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
			}}>
			<p className={styles.title}>QuickNotes</p>
			<div className={styles.listContainer}>
				{grpList.map((item) => (
					<List
						key={item.id}
						grpName={item.name}
						grpColor={item.color}
						selectedGroup={currGrp}
						setSelectedGroup={setCurrGrp}
					/>
				))}
			</div>
			<Modal
				style={customStyles}
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				ariaHideApp={false}>
				<p className={styles.Modaltitle}>Create a New Group</p>
				<div style={{ display: "flex" }}>
					<p className={styles.inputlabel}>Group Name</p>
					<input
						type="text"
						value={grpName}
						spellCheck="false"
						className={styles.grpInput}
						placeholder="Enter Group Name"
						onChange={(e) => setGrpName(e.target.value)}
					/>
				</div>

				<div style={{ display: "flex" }}>
					<p className={styles.inputlabel}> Choose Colour</p>
					<div className={styles.colorOptions}>
						{[
							"#B38BFA",
							"#FF79F2",
							"#43E6FC",
							"#F19576",
							"#0047FF",
							"#6691FF",
						].map((color) => (
							<span
								key={color}
								className={`${styles.colorOption} ${
									selectedColor === color ? styles.activeColor : ""
								}`}
								style={{ backgroundColor: color }}
								onClick={() => handleColorClick(color)}></span>
						))}
					</div>
				</div>
				<p className={styles.error}>{err}</p>
				<button
					className={styles.createBtn}
					onClick={() => handleCreateGroup()}>
					Create
				</button>
			</Modal>
			<button
				className={styles.addBtn}
				onClick={() => {
					setErr("");
					setSelectedColor(null);
					setGrpName("");
					setIsModalOpen(true);
				}}>
				+
			</button>
		</div>
	);
}

export default NoteList;
