// warten, bis DOM geladen
$(document).ready(function () {
  // wird ausgeführt, wenn ready
  
  // Verhindert Sachen, die man nicht machen sollte.
  // Einfach am Anfang der ready-fuction schreiben
  'use strict';

  // click events hinzufügen

  // im #john-div das .text-input
  /*
   * <div class="chat" id="john">
   *   <input class="text" type="text">
   *   <input class="send" type="submit">
   *   <div class="messages"></div>
   * </div>
   */

  // Abstand zwischen #john und .send! (.send IN #john)
  // Sonst (#john.send) würde er nach einem Element,
  // das ID john und class send hat
  // (wie <div class="send" id="john">)
  // Also wir suchen mit "#john .send" nach .send in #john
  // Ok? Ok.

  $('#john .send').click(function () {
    // John-Send geklickt

    // Value aus Text-Input auslesen
    var text = $('#john .text').val();
    // Text leeren
    $('#john .text').val(null);
    
    // Element mit dem Text erstellen
    var element = $('<p class="message">' + text + '</p>');

    // Element zu Messages von Jane hinzufügen
    $('#jane .messages').append(element);
  });

  // Dasselbe für die andere Seite
  $('#jane .send').click(function () {
    $('#john .messages').append(
      $('<p class="message">' + $('#jane .text').val() + '</p>')
    );
    $('#jane .text').val(null);
  });
});
