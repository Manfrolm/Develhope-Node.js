const crypto = require('crypto');

// funzione che genera un ID random con crypto.randomBytes (toString viene utilizzato per trasformare il buffer in stringa)
const randomId = (length) => {
  return crypto.randomBytes(length).toString('hex');
}

// Genera un ID random di 10 caratteri
const res = randomId(10);
console.log(res)