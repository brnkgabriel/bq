
export default {
  numberForm: function (idx, number) {
    if (isNaN(parseInt(number))) { return -1000000 } else {
      if (idx === -1) return parseInt(number) * (-1)
      else return parseInt(number)
    }
  },
  text2No: function (date) {
    var splitted = date.split(' ')
    var suffixIdx = date.toLowerCase().indexOf('ad')
    if (splitted.length === 3) return this.numberForm(suffixIdx, splitted[1])
    else return this.numberForm(suffixIdx, splitted[0])
  }
}
