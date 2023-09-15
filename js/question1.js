document.getElementById('btnKetQua').onclick = function (event) {
    event.preventDefault();
    // input 
    var score0 = +document.getElementById('diemChuan').value;
    var score1 = +document.getElementById('diemMon1').value;
    var score2 = +document.getElementById('diemMon2').value;
    var score3 = +document.getElementById('diemMon3').value;
    var area = document.getElementById('khuVuc').value;
    var object = +document.getElementById('doiTuong').value;
    // output 
    var scoreArea = 0;
    var scoreObject = 0;
    var totalScore = 0;
    var result = '';
    // process 
    switch (area) {
        case 'A': {
            scoreArea = 2;
        }; break;
        case 'B': {
            scoreArea = 1;
        }; break;
        case 'C': {
            scoreArea = 0.5;
        }; break;
        case 'X': {
            scoreArea = 0;
        }
    };
    switch (object) {
        case '1': {
            scoreObject = 2.5;
        }; break;
        case '2': {
            scoreObject = 1.5;
        }; break;
        case '3': {
            scoreObject = 1;
        }; break;
        case '0': {
            scoreObject = 0;
        }
    };
    totalScore = score1 + score2 + score3 + scoreArea + scoreObject;
    if (totalScore >= score0 && score1 > 0 && score2 > 0 && score3 > 0) {
        result = 'Trúng tuyển'
    } else {
        result = 'Không trúng tuyển'
    };
    document.getElementById('ketQua').innerHTML = 'Tổng điểm: ' + totalScore + ' - ' + result;
}