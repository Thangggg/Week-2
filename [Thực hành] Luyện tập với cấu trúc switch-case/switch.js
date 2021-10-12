let browser = prompt("Nhập vào trình duyệt bạn đang dùng")
switch (browser){
    case "Edge":
        alert("Bạn đang dùng Edge")
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('OK vẫn hỗ trợ');
        break;
    default:
        alert('No Hope');

}