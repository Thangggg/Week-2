function check() {
    let a = document.getElementById('t1').value;
    //     if (a==1){
    //         document.getElementById('t2').value = " Tháng 1 có 31 ngày "
    //     }else if (a == 2){
    //         document.getElementById('t2').value= "Tháng 2 có 28 hoặc 29 ngày"
    //     }else {
    //         document.getElementById('t2').value= "Không phải tháng 1 hoặc 2"
    //     }
    // }
switch (a) {
    case  "1":
        document.getElementById('t2').value = " Tháng 1 có 31 ngày "
        break;
    case  "2":
        document.getElementById('t2').value = " Tháng 2 có 28 hoặc 29 ngày"
        break;
    case  "3":
        document.getElementById('t2').value = " Tháng 3 có 31 ngày"
        break;
    case  "4":
        document.getElementById('t2').value = " Tháng 4 có 30 ngày "
        break;
    case  "5":
        document.getElementById('t2').value = " Tháng 5 có 31 ngày"
        break;
    case  "6":
        document.getElementById('t2').value = " Tháng 6 có 30 ngày"
        break;
    case  "7":
        document.getElementById('t2').value = " Tháng 7 có 31 ngày "
        break;
    case  "8":
        document.getElementById('t2').value = " Tháng 8 có 31 ngày"
        break;
    case  "9":
        document.getElementById('t2').value = " Tháng 9 có 30 ngày"
        break;
    case  "10":
        document.getElementById('t2').value = " Tháng 10 có 31 ngày "
        break;
    case  "11":
        document.getElementById('t2').value = " Tháng 11 có 30 ngày"
        break;
    case  "12":
        document.getElementById('t2').value = " Tháng 12 có 31 ngày"
        break;
}
}

