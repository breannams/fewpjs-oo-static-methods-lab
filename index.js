class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'\. -]+/g, '');
  }


  static titleize(string) {
    const forbidden = ['a','an','the','but','of','and','for','at','by','from']

    let newString = []

    string.split(" ").forEach(word => {
      if (forbidden.includes(word) === false) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }
      else {
        word
      }
      newString.push(word)
    })
    let joinString = newString.join(' ')
    return joinString.charAt(0).toUpperCase() + joinString.slice(1)
  }
}