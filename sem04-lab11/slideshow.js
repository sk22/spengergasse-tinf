"use strict";


var imgPath = "img";
var thumbnails = ["01_thumb.jpg", "02_thumb.jpg", "03_thumb.jpg", "04_thumb.jpg"];
var images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
var imgElements = [];   // Speichert die DOM Elemente der vorgeladenen (großen) Bilder.
var currentImage = 0;   // Das aktuell anzuzeigende Bild
var imageElements;
var thumbnailElements;

/**
 * Lädt die in images Angegebenen Bilder und zeigt die Vorschauleiste mit Bildern aus dem 
 * thumbnails Array an.
 */
function onLoad(previewContainer, imgContainer) {
  var previewContainerElem = document.getElementById(previewContainer);
  var imgContainerElem = document.getElementById(imgContainer);

  imageElements = images.map(function (image) {
    var element = document.createElement('img');
    element.setAttribute('src', imgPath + '/' + image);
    return element;
  });

  thumbnailElements = thumbnails.map(function (thumbnail, i) {
    var element = document.createElement('img');
    element.setAttribute('src', imgPath + '/' + thumbnail);
    element.addEventListener('click', function thumbnailClick() {
      displayImage(previewContainerElem, i);
    });
    return element;
  });

  thumbnailElements.forEach(function addElement(element) {
    previewContainerElem.appendChild(element);
  });
}

/**
 * Zeigt ein bestimmtes Bild groß an.
 * @param {string} imgContainerElem Der Containers des großen Bildes.
 * @param {number} imgNr Die Position im images Array, die angezeigt wird.
 */

function displayImage(imgContainerElem, imgNr) {
  imgContainerElem.removeChild(imgContainerElem.firstChild);
  imgContainerElem.appendChild(imageElements[imgNr]);
}

/**
 * Springt im Array eine bestimmte Anzahl an Bildern vor oder zurück.
 * @param {string} imgContainer Die ID des Containers des großen Bildes.
 * @param {number} offset Die Schrittweite. 1 ist ein Bild vor, -1 ist ein Bild zurück.
 */
function moveImage(imgContainer, offset) {

}