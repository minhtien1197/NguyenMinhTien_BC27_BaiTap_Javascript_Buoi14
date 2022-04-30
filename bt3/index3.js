function handling3() {
    var soThuNhatEl =+document.getElementById("soThuNhat").value
    var soThuHaiEl =+document.getElementById("soThuHai").value
    var soThuBaEl =+document.getElementById("soThuBa").value
    var ketQuaEl = document.getElementById ("bt3-result")
    ketQuaEl.style.display= "block";
    if (soThuNhatEl%2===0 && soThuHaiEl%2===0 && soThuBaEl%2===0) {
        ketQuaEl.innerHTML= "3 số chẵn"
    }
    else if (soThuNhatEl%2!=0 && soThuHaiEl%2===0 && soThuBaEl%2===0){
        ketQuaEl.innerHTML= "2 số chẵn và 1 số lẻ"
    }
    else if(soThuNhatEl%2===0 && soThuHaiEl%2===0 && soThuBaEl%2!=0) {
        ketQuaEl.innerHTML= "2 số chẵn và 1 số lẻ"
    }
    else if (soThuNhatEl%2===0 && soThuHaiEl%2!=0 && soThuBaEl%2===0) {
        ketQuaEl.innerHTML= "2 số chẵn và 1 số lẻ"
    }
    else if (soThuNhatEl%2!=0 && soThuHaiEl%2!=0 && soThuBaEl%2===0){
        ketQuaEl.innerHTML= "1 số chẵn và 2 số lẻ"
    }
    else if (soThuNhatEl%2!=0 && soThuHaiEl%2===0 && soThuBaEl%2!=0) {
        ketQuaEl.innerHTML= "1 số chẵn và 2 số lẻ"
    }
    else if (soThuNhatEl%2===0 && soThuHaiEl%2!=0 && soThuBaEl%2!=0) {
        ketQuaEl.innerHTML= "1 số chẵn và 2 số lẻ"
    }
    else {
        ketQuaEl.innerHTML= "3 số lẻ"
    }

}