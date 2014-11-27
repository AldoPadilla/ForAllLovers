function toggleInfo(){
	$("#info-overlay").toggleClass("show");
	$("#info-btn").toggleClass("show");
}

function init() {
	
	$("#info-btn").click(toggleInfo);
 	$("#bigheart").click(toggleInfo);

}

$(window).load(init);