(function(){
	"use strict";

	var Sonarify = function(){};

	Sonarify.prototype = {
		"getSonars": function(){
			return this.sonars = document.querySelectorAll(".sonar-button");
		},
		"applySonarEvents": function(){
			for(var i=0; i < this.sonars.length; i++){
				var curSonar = this.sonars[i],
					sonarClass = "sonar",
					expandClass = "sonar-expand";

				curSonar.addEventListener("click", function(e){

					var sonarExists = curSonar.querySelector("span");
					if(sonarExists){
						curSonar.removeChild(sonarExists);
					}

					var eX = e.pageX,
						eY = e.pageY,
						eTop = curSonar.offsetTop,
						eLeft = curSonar.offsetLeft,
						eWidth = curSonar.offsetWidth,
						eHeight = curSonar.offsetHeight,
						sonarEl = document.createElement("span"),
						circleEl = document.createElement("span");

					sonarEl.classList.add(sonarClass);
					sonarEl.style.top = eY - eTop - 10 +"px";
					sonarEl.style.left = eX - eLeft - 10 +"px";

					curSonar.appendChild(sonarEl);

					var newSonar = curSonar.querySelector("span");
					setTimeout(function(){
						newSonar.classList.add(expandClass);
					},10);
					
				});
			}
		},
		"init": function(){
			console.log("Initiating Sonar...");
			this.getSonars();
			this.applySonarEvents();
		}
	}

	var sonarify = new Sonarify;
	sonarify.init();


})();