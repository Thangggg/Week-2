function checkForm() {
    let number = document.getElementById('t1').value;
    let select = document.getElementById('t2').value;
    let select2= document.getElementById('t3').value;
        if ( select==select2){
            document.getElementById('t4').value = number;
        }
        if ( select =='a' && select2=='b'){
            document.getElementById('t4').value = number/23000;
        }
        if ( select =='b' && select2=='a'){
            document.getElementById('t4').value = number*23000;
        }

    
}