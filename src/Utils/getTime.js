export default function GetTime() {
	var date = new Date();
	var hrs = date.getHours();
	var min = date.getMinutes();
	var timing = hrs >= 12 ? "PM" : "AM";
	hrs = hrs % 12;
	hrs = hrs ? hrs : 12;
	min = min < 10 ? "0" + min : min;
	var formatedTime = hrs + ":" + min + " " + timing;
	return formatedTime;
}
