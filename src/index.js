module.exports = function reverse (n) {
  n = n < 0 ? -n : n;
  return +String(n).split('').reverse().join('');
}
