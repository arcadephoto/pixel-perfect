
const buttonAction = document.querySelectorAll('.boxButton');
//const menuAction = document.querySelectorAll('.leftMenu');
//const socialAction = document.querySelectorAll('.social');
// buttonAction.addEventListener('mouseenter', hoverOn);


//functions for hover action over the orange "continue reading" buttons
buttonAction.forEach(function(e){
  e.addEventListener('mouseenter', hoverOn);
});
buttonAction.forEach(function(e){
  e.addEventListener('mouseleave', hoverOff);
});

function hoverOn(event){
  this.style.color = "white";
  this.style.backgroundColor = "#CA5D3D";
}
function hoverOff(event){
  this.style.color = "#CA5D3D";
  this.style.backgroundColor = "white";
}


//hover action over menu items in top left nav bar
// menuAction.forEach(function(e) {
//   e.addEventListener('mouseenter', menuItemHover);
// });
//
// menuAction.forEach(function(e) {
//   e.addEventListener('mouseleave', menuItemHoverOff);
// });
//
// function menuItemHover(event){
//   this.style.fontSize = "x-large";
// }
//
// function menuItemHoverOff(event){
//   this.style.fontSize = "11px";
// }


//hover action for social media icons
// socialAction.forEach(function(e) {
//   e.addEventListener('mouseenter', socialHover);
// });
//
// socialAction.forEach(function(e) {
//   e.addEventListener('mouseleave', socialHoverOff);
// });
//
// function socialHover(event){
//   this.style.color = "#CA5D3D";
// }
//
// function socialHoverOff(event){
//   this.style.color = "#A9A9A9";
// }







// function clickLogo() {
//   if (broken == false) {
//     moveText.src = "./assets/brokenlink.jpg";
//     broken = true;
//   }
//   else {
//     moveText.src = "./assets/hoob.jpg";
//     broken = false;
//   }
//   return;
// }
