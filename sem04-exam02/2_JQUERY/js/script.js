/* für fade Effekt bitte den Wert 2000ms verwenden */

function fadeOut() {
  $('#figure').fadeOut(2000);
}

function fadeInText() {
  $('#caption').fadeIn(2000, fadeOut);
}

function slideInImage() {
  $('#photo').animate({ left: 0 }, 1000, fadeInText);
}

$(function() {
  setTimeout(slideInImage, 200);
});
