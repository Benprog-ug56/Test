  
//resistor colors
const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

  //colors to be used
  const black1 = document.getElementById('black1');
const brown1 = document.getElementById('brown1');
const red1 = document.getElementById('red1');
const orange1 = document.getElementById('orange1');
const yellow1 = document.getElementById('yellow1');
const green1 = document.getElementById('green1');
const blue1 = document.getElementById('blue1');
const violet1 = document.getElementById('violet1');
const grey1 = document.getElementById('grey1');
const white1 = document.getElementById('white1');

    const black2 = document.getElementById('black2');
const brown2 = document.getElementById('brown2');
const red2 = document.getElementById('red2');
const orange2 = document.getElementById('orange2');
const yellow2 = document.getElementById('yellow2');
const green2 = document.getElementById('green2');
const blue2 = document.getElementById('blue2');
const violet2 = document.getElementById('violet2');
const grey2 = document.getElementById('grey2');
const white2 = document.getElementById('white2');

    const black3 = document.getElementById('black3');
const brown3 = document.getElementById('brown3');
const red3 = document.getElementById('red3');
const orange3 = document.getElementById('orange3');
const yellow3 = document.getElementById('yellow3');
const green3 = document.getElementById('green3');
const blue3 = document.getElementById('blue3');
const violet3 = document.getElementById('violet3');
const grey3 = document.getElementById('grey3');
const white3 = document.getElementById('white3');

  //enter btn
  const getResult = document.getElementById('getResult');

  //screen to display results
  const screen = document.getElementById('resistance');

  //algorithim to calculate resistance
  
  function calculateResistance(a, b, c){
getResult.addEventListener("click", () => {

  screen.classList.add("show");

setTimeout(() => {
    screen.classList.remove("show");
}, 300);
  
  let serial = "0".repeat(Number(currentData3));

  screen.textContent =
    `The resistance is approximately: ${currentData1}${currentData2}${serial}ohms`;
});
  }
  calculateResistance();
  
  

  //formulae for calculating resistance is (color1color2*0(color3))
let currentData1 = '';
let currentData2 = '';
let currentData3 = '';

//black only
black1.addEventListener("click", () => {
    box1.style.background = 'black';
  currentData1 = '0';
  });
black2.addEventListener("click", () => {
    box2.style.background = 'black';
  currentData2 = '0';
  });
black3.addEventListener("click", () => {
    box3.style.background = 'black';
  currentData3 = '0';
  });

//brown only
brown1.addEventListener("click", () => {
    box1.style.background = 'brown';
  currentData1 = '1';
  });
brown2.addEventListener("click", () => {
    box2.style.background = 'brown';
  currentData2 = '1';
  });
brown3.addEventListener("click", () => {
    box3.style.background = 'brown';
  currentData3 = '1';
  });

//red only
red1.addEventListener("click", () => {
    box1.style.background = 'red';
  currentData1 = '2';
  });
red2.addEventListener("click", () => {
    box2.style.background = 'red';
  currentData2 = '2';
  });
red3.addEventListener("click", () => {
    box3.style.background = 'red';
  currentData3 = '2';
  });

//orange only
orange1.addEventListener("click", () => {
    box1.style.background = 'orange';
  currentData1 = '3';
  });
orange2.addEventListener("click", () => {
    box2.style.background = 'orange';
  currentData2 = '3';
  });
orange3.addEventListener("click", () => {
    box3.style.background = 'orange';
  currentData3 = '3';
  });

//yellow only
yellow1.addEventListener("click", () => {
    box1.style.background = 'yellow';
  currentData1 = '4';
  });
yellow2.addEventListener("click", () => {
    box2.style.background = 'yellow';
  currentData2 = '4';
  });
yellow3.addEventListener("click", () => {
    box3.style.background = 'yellow';
  currentData3 = '4';
  });

//green only
green1.addEventListener("click", () => {
    box1.style.background = 'green';
  currentData1 = '5';
  });
green2.addEventListener("click", () => {
    box2.style.background = 'green';
  currentData2 = '5';
  });
green3.addEventListener("click", () => {
    box3.style.background = 'green';
  currentData3 = '5';
  });

//blue only
blue1.addEventListener("click", () => {
    box1.style.background = 'blue';
  currentData1 = '6';
  });
blue2.addEventListener("click", () => {
    box2.style.background = 'blue';
  currentData2 = '6';
  });
blue3.addEventListener("click", () => {
    box3.style.background = 'blue';
  currentData3 = '6';
  });

//violet only
violet1.addEventListener("click", () => {
    box1.style.background = 'violet';
  currentData1 = '6';
  });
violet2.addEventListener("click", () => {
    box2.style.background = 'violet';
  currentData2 = '6';
  });
violet3.addEventListener("click", () => {
    box3.style.background = 'violet';
  currentData3 = '6';
  });

//grey only
grey1.addEventListener("click", () => {
    box1.style.background = 'grey';
  currentData1 = '6';
  });
grey2.addEventListener("click", () => {
    box2.style.background = 'grey';
  currentData2 = '6';
  });
grey3.addEventListener("click", () => {
    box3.style.background = 'grey';
  currentData3 = '6';
  });

//white only
white1.addEventListener("click", () => {
    box1.style.background = 'white';
  currentData1 = '6';
  });
white2.addEventListener("click", () => {
    box2.style.background = 'white';
  currentData2 = '6';
  });
white3.addEventListener("click", () => {
    box3.style.background = 'white';
  currentData3 = '6';
  });

let serial = '';

for (let i = 0; i < currentData3; i++) {
  serial += "0";
}
