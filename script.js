function addvalue(number){
    let resultbox = document.getElementById('display')
    resultbox.value += number

}
function clearvalue(){
    document.getElementById('display').value=' '
}
function calculate(){
    let eqn = document.getElementById('display').value
    let display=eval(eqn)
    document.getElementById('display').value=display
}
