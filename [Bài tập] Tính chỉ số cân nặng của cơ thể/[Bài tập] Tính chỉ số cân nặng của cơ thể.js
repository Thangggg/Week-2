let canNang = prompt("Nhập vào cân nặng của bạn")
let chieuCao = prompt("Nhập vào chiều cao của bạn")
    let bmi = canNang/(chieuCao**2)
if( bmi < 18.5 ){
    document.write("Gầy");
}else if( bmi < 25){
    document.write("Bình thường");
}else if ( bmi < 30){
    document.write(" Thừa cân rồi ");
}else {
    document.write(" Béo phì ");
}

