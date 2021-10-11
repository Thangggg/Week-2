function abc() {
    let EnterStart = document.getElementById("start").value;
    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    if( select1 == select2) {
        document.getElementById("finish").innerHTML = EnterStart;
    }
        if (select1 == "a" && select2 == "b" ) {
            document.getElementById("finish").innerHTML = EnterStart / 23000;
        }else
            if(select1 == 'b'&& select2 == 'a'){
            document.getElementById('finish').innerHTML = EnterStart * 23000;
    }
            else {
                document.getElementById("finish").innerHTML = EnterStart;
            }
        }









