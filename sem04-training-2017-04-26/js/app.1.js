$(document).ready(function() {
  // Dokument fertig geladen, auf DOM kann zugegriffen werden
  
  $('#john .send').click(function() {
    send($('#john'), $('#jane'));
  });

  $('#jane .send').click(function() {
    send($('#jane'), $('#john'));
  });
});

function send($from, $to) {
  // Text auslesen, String.trim() schneidet Leerzeichen weg
  var text = $from.find('.text').val().trim(); 
  // Text leeren
  $from.find('.text').val('');

  // 0 ist falsey -> wenn Text "keine length" hat, wird returned
  // Verhindert Senden von leeren Nachrichten
  if (!text.length) return;

  // Message-Element erstellen
  var messageElement = $('<p class="message">' + text + '</p>');
  // Message bei Chatpartner einfügen
  $to.find('.messages').append(messageElement);
}