function tinhTienDien(soKW, tien50KW, tien100KW, tien200KW, tien350KW, tien351KW) {
    var tongTienDien = 0;
    if (soKW <= 50) {
        tongTienDien = soKW * tien50KW;
    } else if (soKW > 50 && soKW <= 100) {
        tongTienDien = (soKW - 50) * tien100KW + 50 * tien50KW;
    } else if (soKW > 100 && soKW <= 200) {
        tongTienDien = (soKW - 100) * tien200KW + 50 * tien100KW + 50 * tien50KW;
    } else if (soKW > 200 && soKW <= 350) {
        tongTienDien = (soKW - 200) * tien350KW + 100 * tien200KW + 50 * tien100KW + 50 * tien50KW;
    } else if (soKW > 350) {
        tongTienDien = (soKW - 350) * tien351KW + 150 * tien350KW + 100 * tien200KW + 50 * tien100KW + 50 * tien50KW;
    }


    return tongTienDien;
}

function tinhThueCaNhan(soTienChiuThue, soTien60m, soTien120m, soTien210m, soTien384m, soTien624m, soTien960m, soTien961m) {
    var tongThue = 0;
    if (soTienChiuThue <= 60) {
        tongThue = soTienChiuThue * soTien60m;
    } else if (soTienChiuThue > 60 && soTienChiuThue <= 120) {
        tongThue = soTienChiuThue * soTien120m;
    } else if (soTienChiuThue > 120 && soTienChiuThue <= 210) {
        tongThue = soTienChiuThue * soTien210m;
    } else if (soTienChiuThue > 210 && soTienChiuThue <= 384) {
        tongThue = soTienChiuThue * soTien384m;
    } else if (soTienChiuThue > 384 && soTienChiuThue <= 624) {
        tongThue = soTienChiuThue * soTien624m;
    } else if (soTienChiuThue > 624 && soTienChiuThue <= 960) {
        tongThue = soTienChiuThue * soTien960m;
    } else if (soTienChiuThue > 960) {
        tongThue = soTienChiuThue * soTien961m;
    }

    return tongThue;
};

