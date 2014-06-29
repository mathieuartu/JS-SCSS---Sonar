(function(){
	'use strict';

    var Sonarify = function(){};

	Sonarify.prototype = {
		'getSonars': function(){
			this.sonars = document.querySelectorAll('.sonar-button');
		},
		'applySonarEvents': function(){

			var gThis = this;
			
            //Event
            function sonarClick(e){

                var curSonar = this,
                    sonarClass = 'sonar',
                    expandClass = 'sonar-expand';

                var sonarExists = curSonar.querySelector('span');
                if(sonarExists){
                    curSonar.removeChild(sonarExists);
                }

                var eX = e.pageX,
                    eY = e.pageY,
                    eTop = curSonar.offsetTop,
                    eLeft = curSonar.offsetLeft,
                    sonarEl = document.createElement('span');

                sonarEl.classList.add(sonarClass);
                sonarEl.style.top = eY - eTop - 10 +'px';
                sonarEl.style.left = eX - eLeft - 10 +'px';

                curSonar.appendChild(sonarEl);

                var newSonar = curSonar.querySelector('span');
                gThis.expand(newSonar, expandClass);

            }

            //Apply event
			for(var i=0; i < this.sonars.length; i++){
				this.sonars[i].addEventListener('click', sonarClick);
			}
		},
        'expand' : function(newSonar, expandClass){
			console.log(newSonar, expandClass);
            setTimeout(function(){
                newSonar.classList.add(expandClass);
            },10);
        },
		'init': function(){
			console.log('Initiating Sonar...');
			this.getSonars();
			this.applySonarEvents();
		}
	};

	var sonarify = new Sonarify();
	sonarify.init();

})();
