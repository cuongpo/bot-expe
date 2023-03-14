function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};


function improve_click() {
	const upgrade = document.getElementsByClassName("tooltip");
	for (let i=1;i<100;i++) {
    	if (upgrade[i].innerHTML=="Improve") {
        	upgrade[i].click();
    	};
	};
}


function auto() {
	var check = 0;
	const metal = document.getElementsByClassName("icon sprite sprite_medium medium metalMine");
	console.log(metal);
	const crystal = document.getElementsByClassName("icon sprite sprite_medium medium crystalMine");
	const energy = document.getElementsByClassName("icon sprite sprite_medium medium solarPlant");
	const energy_amount = document.getElementById("resources_energy");
	const metal_amount = document.getElementById("resources_metal");
	const crystal_amount = document.getElementById("resources_crystal");
	const dete_amount = document.getElementById("resources_deuterium");
	const metal_storage = document.getElementsByClassName("icon sprite sprite_small small metalStorage");
	const crystal_storage = document.getElementsByClassName("icon sprite sprite_small small crystalStorage");
	const dete_storage = document.getElementsByClassName("icon sprite sprite_small small deuteriumStorage");

	// check storerage
	if ((metal_amount.getAttribute("class")=="overmark")&&(check==0)) {
		metal_storage[0].click();
		setTimeout(improve_click,3000);
		check = 1;
		console.log("upgrade metal storage");
	};
	if ((crystal_amount.getAttribute("class")=="overmark")&&(check==0)) {
		check = 1;
		crystal_storage[0].click();
		setTimeout(improve_click,3000);
		console.log("upgrade crystal storage");
	};
	if ((dete_amount.getAttribute("class")=="overmark")&&(check==0)) {
		check = 1;
		dete_storage[0].click();
		setTimeout(improve_click,3000);
		console.log("upgrade dete storage");
	};

	// check energy
	if ((energy_amount.innerHTML < 0)&(check==0)) {
		check = 1;
		energy[0].click();
		setTimeout(improve_click,3000);
	}


	// Upgrade metal
	if (check == 0) {
		metal[0].click();
		setTimeout(improve_click,3000);
		console.log("upgrade metal");
	};

	if (check == 0) {
		crystal[0].click();
		setTimeout(improve_click,3000);
		console.log("upgrade crystal");
	};
};

function expe() {
	console.log("here");
	
	/*
	// Nhap so luong trasport ~ 73
	
		const x = document.getElementsByName("transporterLarge");
		console.log(x[0]);
		x[0].click();
		x[0].value = 73;
	
	// Continue
	setTimeout(function(){
		const y = document.getElementById("continueToFleet2");
		y.click();
	},5000);

	// Send fleet
	setTimeout(function(){
		const z = document.getElementById("sendFleet");
		z.click();
	},10000);
	https://s186-en.ogame.gameforge.com/game/index.php?page=ingame&component=supplies
	*/
};

function planet1() {
	auto();
	setTimeout(function(){
		window.location.href="https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies";
	},5000);
};

function planet2() {
	auto();
	setTimeout(function(){
		window.location.href="https://s174-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33620814";
	},5000);
};

function planet3() {
	auto();
	setTimeout(function(){
		window.location.href="https://s174-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33621159";
	},5000);
};

function planet4() {
	auto();
	setTimeout(function(){
		window.location.href="https://s174-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33621788";
	},5000);
};
function planet5() {
	auto();
	setTimeout(function(){
		window.location.href="https://s174-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33621941";
	},5000);
};
function planet6() {
	auto();
	setTimeout(function(){
		window.location.href="https://s174-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33622542";
	},5000);
};



function main(){
	const rand = randomIntFromInterval(1,1);
	console.log(rand);
	if (rand == 1) {
		planet1();
	};
	if (rand == 2) {
		planet2();
	};
	if (rand == 3) {
		planet3();
	};
	if (rand == 4) {
		planet4();
	};
	if (rand == 5) {
		planet5();
	};
	if (rand == 6) {
		planet6();
	};



};

setInterval(main,30000);
	