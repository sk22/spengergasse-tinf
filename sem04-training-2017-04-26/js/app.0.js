$(document).ready(function() {
  // Dokument fertig geladen, auf DOM kann zugegriffen werden
  
  $('#john .send').click(function() {
    // Text auslesen, String.trim() schneidet Leerzeichen weg
    var text = $('#john .text').val().trim(); 
    // Text leeren
    $('#john .text').val('');

    // 0 ist falsey -> wenn Text "keine length" hat, wird returned
    // Verhindert Senden von leeren Nachrichten
    if (!text.length) return;

    // Message-Element erstellen
    var messageElement = $('<p class="message">' + text + '</p>');
    // Message bei Chatpartner einfügen
    $('#jane .messages').append(messageElement);
  });

  $('#jane .send').click(function() {
    // Text auslesen, String.trim() schneidet Leerzeichen weg
    var text = $('#jane .text').val().trim(); 
    // Text leeren
    $('#jane .text').val('');

    // 0 ist falsey -> wenn Text "keine length" hat, wird returned
    // Verhindert Senden von leeren Nachrichten
    if (!text.length) return;

    // Message-Element erstellen
    var messageElement = $('<p class="message">' + text + '</p>');
    // Message bei Chatpartner einfügen
    $('#john .messages').append(messageElement);
  });
});
