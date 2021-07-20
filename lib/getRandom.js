const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function random(min, max, { decimals = 0 } = {}) {
  const number = Math.random() * (max - min) + min;

  return parseFloat(number.toFixed(decimals));
}

function getRandomId(length) {
  let result = "";

  for (let i = 0; i <= length; i++) {
    result += characters.charAt(random(0, characters.length));
  }

  return result;
}

exports.random = random;
exports.getRandomId = getRandomId;
