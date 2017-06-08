var calculation = {
  fahrt: function(data) {
    return data.km * 0.21;
  },
  montage: function(data) {
    var stundensatz = function(stunden) {
      return stunden <= 50 ? 1.30 : 2.60;
    }

    var max = 26.4;
    var stunden = data.stunden - (data.mittagspause ? .5 : 0);
    var wert = stunden * stundensatz(data.km);
    var aboveZero = wert > 0 ? wert : 0;
    return wert < max ? aboveZero : max;
  },
  sonstiges: function(data) {
    return Number(data.parken);
  },
  gesamt: function(data) {
    return calculation.fahrt(data)
      + calculation.montage(data)
      + calculation.sonstiges(data);
  }
}

function calc() {
  error(''); // reset error

  var data = {
    km: Number(document.getElementById('km').value),
    stunden: Number(document.getElementById('stunden').value),
    parken: Number(document.getElementById('parken').value),
    mittagspause: document.getElementById('mittagspause').checked
  };

  if (validate(data)) return;

  document.getElementById('fahrt').value =
    calculation.fahrt(data).toFixed(2) + ' €';
  document.getElementById('montage').value =
    calculation.montage(data).toFixed(2) + ' €';
  document.getElementById('sonstiges').value =
    calculation.sonstiges(data).toFixed(2) + ' €';
  document.getElementById('gesamt').value =
    calculation.gesamt(data).toFixed(2) + ' €';
}

function validate(data) {
  if (isNaN(data.km) || data.km < 0) {
    return error('Kilometerzahl muss eine gültige, positive Zahl sein!');
  }
  if (isNaN(data.stunden) || data.stunden < 0) {
    return error('Stundenzahl muss eine gültige, positive Zahl sein!');
  }
  if (isNaN(data.parken) || data.parken < 0) {
    return error('Parkkosten müssen eine gültige, positive Zahl sein!');
  }
}

function error(message) {
  document.getElementById('error').innerText = message;
  return message;
}
