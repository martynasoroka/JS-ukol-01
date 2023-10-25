const name = prompt("Zadej krestni jmeno").toLowerCase()
const surname = prompt("Zadej prijemni").toLowerCase()

let noBlanksName = name.trim()
let noBlanksSurname = surname.trim()

let partName = noBlanksName.slice(0,3)
let partSurname = noBlanksSurname.slice(0,5)



document.body.innerHTML += `Tvoja mailova adresa: ${partSurname}${partName}@fit.cvut.cz`