function strip(str) {
  function isWhite(c) {
    return c === ' ' || c === '\t' || c === '\n'
  }

  let i = 0
  let j = str.length - 1

  for (; i < str.length; i++) {
    if (!isWhite(str[i])) {
      break
    }
  }

  for (; j >= 0; j--) {
    if (!isWhite(str[j])) {
      break
    }
  }

  return str.substring(i, j + 1)
}