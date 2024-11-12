import React from "react";
import bannerBg from "../../assets/banner.png";
function Banner() {
	return (
		<div
			className="banner"
			style={{
				background: "#DAE5F5",
				width: "72vw",
				height: "100vh",
				marginTop: "2px",
				cursor: "default",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					paddingTop: "170px",
				}}>
				<img
					style={{ width: "40vw", height: "30vh" }}
					src={bannerBg}
					alt="banner image"
				/>
				<p
					style={{
						fontFamily: "var(--roboto)",
						fontSize: "40px",
						fontWeight: "bold",
						marginTop: "-15px",
					}}>
					QuickNotes
				</p>
				<p
					style={{
						fontSize: "16px",
						fontFamily: "var(--roboto)",
						fontWeight: "500",
						textAlign: "center",
						marginTop: "20px",
						letterSpacing: "0.02em",
					}}>
					Send and receive messages without keeping your phone online. <br />
					Use QuickNotes as Pocket Notes on up to 4 linked devices and 1 mobile
					phone
				</p>
			</div>
			<div
				style={{
					marginLeft: "-2vw",
					marginTop: "26vh",
					fontFamily: "var(--roboto)",
					fontSize: "17px",
					fontWeight: "400",
				}}>
				🔒End-to-end encrypted
			</div>
		</div>
	);
}

export default Banner;
