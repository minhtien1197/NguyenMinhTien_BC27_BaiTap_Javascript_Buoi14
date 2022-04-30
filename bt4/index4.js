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