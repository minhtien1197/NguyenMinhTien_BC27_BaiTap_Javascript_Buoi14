/**INPUT: CHO 3 CẠNH CỦA MÔT TAM GIÁC
 * PROCESS : 
 *           1. LẤY ĐƯỢC VALUE canhThuNhatEl , VALUE canhThuHaiEl , VALUE canhThuBaEl
 *           2. TẠO BIẾN VAR result4El
 *           3. LẤY VALUE canhThuNhatEl , VALUE canhThuHaiEl , VALUE canhThuBaEl 
 *              SO SÁNH VS NHAU VÀ THỰC HIÊN PHÉP TÍNH THEO ĐỊNH LÝ PYTAGO
 *              NẾU 2 CẠNH BẰNG NHAU LÀ TAM GIÁC CÂN
 *              NẾU 3 CẠNH BẰNG NHAU LÀ TAM GIÁC ĐỀU
 *              NẾU 2 CẠNH BẰNG NHAU LÀ TAM GIÁC CÂN VÀ
 *              THỰC HIÊN PHÉP TÍNH THEO ĐỊNH LÝ PYTAGO LÀ ĐÚNG LÀ TÂM GIÁC VUÔNG CÂN
 *             NẾU THỰC HIÊN PHÉP TÍNH THEO ĐỊNH LÝ PYTAGO LÀ ĐÚNG LÀ TÂM GIÁC VUÔNG
 *             VÀ NẾU KHÔNG ĐÚNG VỚI NHƯNG TRƯỜNG HỢP TRÊN LÀ TAM GIÁC THƯỜNG
 *           4. HIỂN THỊ KẾT QUẢ ĐÓ LÀ TAM GIÁC GÌ
 * OUTPUT : DỰA TRÊN 3 CẠNH CỦA TAM GIÁC XÁC ĐỊNH ĐÓ LÀ TAM GIÁC GÌ
 */








function handling4() {
    var canhThuNhatEl =+ document.getElementById ("canhThuNhat").value
    var canhThuHaiEl =+ document.getElementById ("canhThuHai").value
    var canhThuBaEl =+ document.getElementById ("canhThuBa").value
    var result4El= document.getElementById ("bt4-result")
    result4El.style.display= "block";
    if (canhThuNhatEl===canhThuHaiEl && canhThuNhatEl===canhThuBaEl && canhThuHaiEl===canhThuBaEl) {
        result4El.innerHTML="tam giác đều"
    }
    else if (canhThuNhatEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl) {
        result4El.innerHTML="tam giác cân"
    }
    else if (canhThuNhatEl===canhThuBaEl && canhThuNhatEl!=canhThuHaiEl) {
        result4El.innerHTML="tam giác cân"
    }
    else if (canhThuBaEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl) {
        result4El.innerHTML="tam giác cân"
    }
    else if (canhThuNhatEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl && canhThuNhatEl*canhThuNhatEl +canhThuHaiEl*canhThuHaiEl===canhThuBaEl*canhThuBaEl) {
        result4El.innerHTML="tam giác vuông cân"
    }
    else if (canhThuNhatEl===canhThuBaEl && canhThuNhatEl!=canhThuHaiEl &&canhThuNhatEl*canhThuNhatEl +canhThuBaEl*canhThuBaEl===canhThuHaiEl*canhThuHaiEl) {
        result4El.innerHTML="tam giác vuông cân"
    }
    else if (canhThuBaEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl &&canhThuNhatEl*canhThuNhatEl ===canhThuHaiEl*canhThuHaiEl +canhThuBaEl*canhThuBaEl) {
        result4El.innerHTML="tam giác vuông cân"
    }
    else if (canhThuNhatEl*canhThuNhatEl +canhThuHaiEl*canhThuHaiEl===canhThuBaEl*canhThuBaEl) {
        result4El.innerHTML="tam giác vuông"
    }
    else if (canhThuNhatEl*canhThuNhatEl +canhThuBaEl*canhThuBaEl===canhThuHaiEl*canhThuHaiEl) {
        result4El.innerHTML="tam giác vuông"
    }
    else if (canhThuNhatEl*canhThuNhatEl ===canhThuHaiEl*canhThuHaiEl +canhThuBaEl*canhThuBaEl) {
        result4El.innerHTML="tam giác vuông"
    }
    else {
        result4El.innerHTML="tam giác thường"
    }


}