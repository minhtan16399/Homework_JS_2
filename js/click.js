
function clickFuntion1() {

    document.getElementById('ques1').style.display = 'block';
    document.getElementById('ques2').style.display = 'none';
    document.getElementById('ques3').style.display = 'none';
    document.getElementById('ques4').style.display = 'none';
    document.getElementById('ques5').style.display = 'none';
};
function clickFuntion2() {

    document.getElementById('ques1').style.display = 'none';
    document.getElementById('ques2').style.display = 'block';
    document.getElementById('ques3').style.display = 'none';
    document.getElementById('ques4').style.display = 'none';
    document.getElementById('ques5').style.display = 'none';
};
function clickFuntion3() {

    document.getElementById('ques1').style.display = 'none';
    document.getElementById('ques2').style.display = 'none';
    document.getElementById('ques3').style.display = 'block';
    document.getElementById('ques4').style.display = 'none';
    document.getElementById('ques5').style.display = 'none';
};
function clickFuntion4() {

    document.getElementById('ques1').style.display = 'none';
    document.getElementById('ques2').style.display = 'none';
    document.getElementById('ques3').style.display = 'none';
    document.getElementById('ques4').style.display = 'block';
    document.getElementById('ques5').style.display = 'none';
};
function clickFuntion5() {

    document.getElementById('ques1').style.display = 'none';
    document.getElementById('ques2').style.display = 'none';
    document.getElementById('ques3').style.display = 'none';
    document.getElementById('ques4').style.display = 'none';
    document.getElementById('ques5').style.display = 'block';
};

function clickHide() {
    var choose = document.getElementById('loaiKH').value;
    if (choose == 'Hộ gia đình') {
        document.getElementById('formKetNoi').style.display = 'none'
    } else if (choose == 'Doanh nghiệp') {
        document.getElementById('formKetNoi').style.display = 'block'
    }
}