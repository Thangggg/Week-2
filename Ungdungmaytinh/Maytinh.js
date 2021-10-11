function checkFormAdd() {
    let number = document.getElementById('t1').value;
    let number2= document.getElementById('t2').value;
    let result = parseInt(number) + parseInt(number2);
    document.getElementById('t3').value = result;
}
function checkFormSub() {
    let number = document.getElementById('t1').value;
    let number2= document.getElementById('t2').value;
    let result = parseInt(number) - parseInt(number2);
    document.getElementById('t3').value = result;
}
function checkFormMul() {
    let number = document.getElementById('t1').value;
    let number2= document.getElementById('t2').value;
    let result = parseInt(number) * parseInt(number2);
    document.getElementById('t3').value = result;
}
function checkFormDiv() {
    let number = document.getElementById('t1').value;
    let number2= document.getElementById('t2').value;
    let result = parseInt(number) / parseInt(number2);
    document.getElementById('t3').value = result;

}