$('#grayButton').click(switchGray);

// document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('pizza').onclick = pizzatime;


function switchGray() {
  document.body.style.backgroundColor = '#66ff66';
document.body.style.color = 'peachpuff';
document.getElementById('pizza').style.color = 'peachpuff';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'pink';
  document.getElementById('pizza').style.color = 'pink';

}

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
  document.getElementById('pizza').style.color = 'white';
}

function pizzatime() {
document.getElementById('pizza').style.color = 'red';
}