export default {
  getUnknownWords (allWords, knownWords) {
    let result = []
    let knowWords = []
    for (let i = 0; i < allWords.length; i++) {
      let isKnown = false
      for (let t = 0; t < knownWords.length; t++) {
        if (allWords[i] === knownWords[t].Word_value) {
          knowWords.push(knownWords[t])
          isKnown = true
          break
        }
      }
      if (!isKnown) {
        result.push(allWords[i])
      }
    }
    return result
  }
}
