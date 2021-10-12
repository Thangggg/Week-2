let year;
year = parseInt(prompt("Nhập số năm"));
    if (year % 4 == 0){
        if (year % 100 == 0){
            if (year % 400== 0){
                alert(year+ " Là năm nhuận ")
            }else {
                alert(year+ " Không phải năm nhuận ");
            }
        }else {
            alert(year + "Là Năm Nhuận")
        }
    }else {
        alert(year+ " Không phải năm Nhuận ")
    }
