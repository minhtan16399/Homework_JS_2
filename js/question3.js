// input 
var soTienChiuThue = 0;
var soTien60m = 5 / 100;
var soTien120m = 10 / 100;
var soTien210m = 15 / 100;
var soTien384m = 20 / 100;
var soTien624m = 25 / 100;
var soTien960m = 30 / 100;
var soTien961m = 35 / 100;
// output 
var tongThue = 0;
document.getElementById('btnTinhThueThuNhap').onclick = function (event) {
    event.preventDefault();
    var soNguoi = +document.getElementById('soNguoi').value;
    var tongThuNhap = +document.getElementById('thuNhap').value / 1000000;
    soTienChiuThue = tongThuNhap - 4 - soNguoi * 1.6;
    tongThue = tinhThueCaNhan(soTienChiuThue, soTien60m, soTien120m, soTien210m, soTien384m, soTien624m, soTien960m, soTien961m) * 1000000;
    document.getElementById('tienThue').innerHTML = 'Thuế phải đóng: ' + new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tongThue)
}
