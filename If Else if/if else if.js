let value = prompt("Nhập Tên");
    if (value=="Admin") {
        let pass = prompt("Nhập mật khẩu");
        if (pass == 'TheMaster') {
            alert('Welcome!');
        } else if (pass == null) {
            alert('Canceled.');
        } else {
            alert('Wrong password');
        }
    } else if ( value == null){
        alert('Canceled');
    } else {
        alert('Tôi không biết bạn');
    }
