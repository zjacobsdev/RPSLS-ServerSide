document.querySelector('#rock').addEventListener('click', makeReq1())
document.querySelector('#paper').addEventListener('click', makeReq2())
document.querySelector('#scissors').addEventListener('click', makeReq3())
document.querySelector('#lizard').addEventListener('click', makeReq4())
document.querySelector('#spock').addEventListener('click', makeReq5())

function makeReq1(){  //rock
  fetch(`/api1`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("usr-weapon").src = data.img[0]

    });

}
function makeReq2(){ // paper
  fetch(`/api2`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("usr-weapon").src = data.img[1]

});
}
function makeReq3(){ // scissors
  fetch(`/api3`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("usr-weapon").src = data.img[2]

});
}
function makeReq4(){ //lizard
  fetch(`/api4`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("usr-weapon").src = data.img[3]

});
}

function makeReq5(){ // spock 

  fetch(`/api5`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("usr-weapon").src = data.img[4]

});

}
                        

