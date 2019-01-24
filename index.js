function getFirstSelector(selector) {

var booBoo = document.querySelector(selector)

return booBoo

}

function nestedTarget() {
  
  
  const platter = document.querySelector('.target')
  
  return platter
  
  ///const main = document.getElementsByTagName('#nested')
  
  ///const p = main.getElementsByClassName('.target')
  
  ///return p
  
}

function increaseRankBy(n) {
  var zip = document.querySelectorAll(".ranked-list").length
  
  for (var i = 0 ; i < zip ; i++) {
    var zoom = document.querySelectorAll(".ranked-list")[i]
    var zeem = zoom.querySelectorAll("li").length
  
    for (var b = 0 ; b < zeem ; b++) {
      var breeze = zoom.querySelectorAll("li")[b]
      breeze.innerHTML = parseInt(breeze.innerHTML) + n
    }
  }
}






function deepestChild() {
  var bingo = document.querySelector('#grand-node div div div div');
  return bingo
}
  
  ///var bingo = document.querySelector("#grand-node")
  ///var bango = bingo.querySelectorAll("div")
  
  ////for (v = 0 ; v < bango.length ; v++) {
    ///if (bango[v].textContent === "boo!") {
      ///return bango[v]
  
  
  

  ///const nuna = document.querySelectorAll()
  
  
  ///deepestChild(array, criteriaFn)
  ///let current = array 
  ///let next = []
  
  ///while (current) {
    ///if (criteriaFn(current)) {
      ///return current
    ///}
    
    ///if (Array.isArray(current)) {
      ///for (let i = 0; i < current.length; i++) {
        ///next.push(current[i])
      ///}
    ///}
    ///current = next.shift()
  
  ///return null
///}
  
  
  
  
  ///const main = document.getElementsByTagName('main')[0]
  
  ///const roy = main.children
  
  
  
  
  ///const judy = document.getElementsByTagName('#grand-node')
  ///const roy = judy.length
  
  ///const liza = judy[roy]
  
  ///return liza

