function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  for (var i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// 1 ist keine Primzahl
// Schleife von 2 bis zur Zahl.
// Ob eine Zahl teilbar ist oder nicht, kann mit Modulo (%) berechnet werden.
