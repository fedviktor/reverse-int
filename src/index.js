module.exports = function reverse (n) {
  if (n>0){let rev=n.toString().split('').reverse().join('')
  return rev}
  else{
      rev=n.toString().split('').filter(el=>el!=='-').reverse().join('')
      return rev
  }
//   n.split('')
}
