import React from "react";
import NoteList from "../Components/NoteList/NoteList";
import Banner from "../Components/BannerSection/Banner";

function HomePage() {
	return (
		<div>
			<div style={{ display: "flex" }}>
				<NoteList />
				<Banner />
			</div>
		</div>
	);
}

export default HomePage;
