function tabuada() {
    var num = document.getElementById('onum')
    var tab = document.getElementById('setab')
if (num.value.length==0){
    window.alert("por favor, digite um numero!")

} else{
    var n = Number(num.valueAsNumber)
    var c = 1 
    tab.innerHTML = ''
    while(c <= 10) {
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
    c++
    }
}

}
   