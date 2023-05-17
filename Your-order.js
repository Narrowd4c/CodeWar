//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
  let ary = words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/))
  return ary.join(' ')
}