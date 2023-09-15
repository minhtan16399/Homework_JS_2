// input 
var soKW = 0;
var tien50KW = 500;
var tien100KW = 650;
var tien200KW = 850;
var tien350KW = 1100;
var tien351KW = 1300;
// output 
var tongTienDien = 0;
document.getElementById('btnTienDien').onclick = function (event) {
    event.preventDefault();
    var name_User = document.getElementById('tenChuHo').value;
    var soKW = +document.getElementById('soDienDung').value;
    tongTienDien = tinhTienDien(soKW, tien50KW, tien100KW, tien200KW, tien350KW, tien351KW);
    document.getElementById('tienDien').innerHTML = name_User + ' - ' + new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tongTienDien);
}