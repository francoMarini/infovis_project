var data= readFileJson().config

// Considero 3 step: 0,1,2
var step=0
var maxValue=0

for (let index = 0; index < 10; index++) 
   maxValue= Math.max(maxValue, data[index].x, data[index].y, data[index].z)

console.log(maxValue)
var scaleY= d3.scaleLinear()
scaleY.domain([0,maxValue])
scaleY.range([35,window.innerHeight-200])

var scaleX= d3.scaleLinear()
scaleX.domain([0,9])
scaleX.range([50,window.innerWidth-150])

var delayInMilliseconds = 1000;  //1 secondo


disegnaBalene();

var flag=0

// L'utente preme il tasto "r"
let worldArea = document.getElementById('world-area');
worldArea.addEventListener('keydown',(e) => {
  if (e.key==='r')
   flag=1
  })

// L'utente rilascia il tasto "r"
  worldArea.addEventListener('keyup',(e) => {
    if (e.key==='r')
     flag=0
    })


//Permette alle balene di tornare in superficie
function respira(i, posX){
  d3.select("#balena" + i).transition().duration(1000).attr("transform","translate(" + posX + "," + scaleY(0) + ")")
}


//Cambia la posizione delle balene
function spostamento() {
  if (step==2)
    step=0;
  else
    step+=1;

  if (flag==1){
    for (let index = 0; index < 10; index++){
      respira(index, scaleX(index))
    }
    setTimeout(function() {
      for (let indice = 0; indice < 10; indice++)
          d3.select("#balena" + indice).transition().duration(1000).attr("transform", "translate(" + scaleX(indice) + "," + scaleY(setPosition(indice)) + ")")
    }, delayInMilliseconds)

} else{
    for (let indice = 0; indice < 10; indice++) {
        d3.select("#balena" + indice).transition().duration(1000).attr("transform", "translate(" + scaleX(indice) + "," + scaleY(setPosition(indice)) + ")")
    }
  }
}


//Disegna la prima configurazione delle balene
function disegnaBalene(){
    var svg= d3.select("svg")
    for (let i = 0; i < 10; i++) {
        svg.append("svg:image")
        .attr("xlink:href", "img/balena.png")
        .attr("id", "balena"+i)
        .attr("locked", 0)
		    .attr("width", 100)
	     	.attr("height", 100)
        .attr("focusable", false)
	    	.attr("orientation", 0)
        .attr("transform", "translate(" + scaleX(i) + "," + scaleY(setPosition(i)) + ")")
        .on("click", function(){spostamento()})
        }
}



function readFileJson(){
    return $.ajax({
    type: 'GET',
    url: '/data/dataset.json',
    async: false,
    dataType: 'json',
    data: { action : 'getList' },
    done: function(results) {
        // Uhm, maybe I don't even need this?
        JSON.parse(results);
        return results;
    },
    fail: function( jqXHR, textStatus, errorThrown ) {
        console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
    }
   }).responseJSON;
}


function setPosition(i) {
var ordinate = data[i]
if (step==0)
    return eval(ordinate.x);
if (step==1)
    return eval(ordinate.y);
if (step==2)
    return eval(ordinate.z);
}
