function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};


function expe() {
	

		document.getElementById("sendExpFleet").click();
		console.log("2")
window.location.href="https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=fleetdispatch&mission=15&position=16&type=1&galaxy=1&system=154&type=1";
};


function main(){
	const rand = randomIntFromInterval(1,1);
	console.log(rand);
	if (rand == 1) {
		expe();
	};
	if (rand == 2) {
		expe();
	};
	if (rand == 3) {
		expe();
	};
	if (rand == 4) {
		expe();
	};
	if (rand == 5) {
		expe();
	};
	if (rand == 6) {
		expe();
	};



};

setInterval(main,30000);
	