document.getElementById('btnTinhTienCap').onclick = function (event) {
    event.preventDefault();
    var billFee = 0;
    var serviceFee = 0;
    var channelFee = 0;
    var portNumber = 0;
    var channelNumber = 0;
    var userCode = document.getElementById('maKhachHang').value;
    var userType = document.getElementById('loaiKH').value;
    portNumber = +document.getElementById('soKetNoi').value;
    channelNumber = +document.getElementById('soKenhCaoCap').value;
    var total = 0;
    if (userType == 'Hộ gia đình') {
        billFee = 4.5;
        serviceFee = 20.5;
        channelFee = 7.5;
    } else if (userType == 'Doanh nghiệp') {
        billFee = 15;
        serviceFee = 75;
        channelFee = 50;
    };
    if (portNumber <= 10) {
        total = billFee + serviceFee + channelFee * channelNumber;
    } else if (portNumber > 10) {
        total = billFee + serviceFee * 10 + (portNumber - 10) * 5 + channelFee * channelNumber;
    }
    document.getElementById('tienCap').innerHTML = '$ ' + new Intl.NumberFormat().format(total);
}