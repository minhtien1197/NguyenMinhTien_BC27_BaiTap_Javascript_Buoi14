// function handling() {
//     var firstNumberEl = +document.getElementById ("firstNumber").value;
//     var secondNumberEl = +document.getElementById ("secondNumber").value
//     var thirdNumberEl = +document.getElementById ("thirdNumber").value
//     var resultEl = document.getElementById ("bt1-result")
//     resultEl.style.display= "block";

// if (firstNumberEl > secondNumberEl && firstNumberEl > thirdNumberEl && secondNumberEl >thirdNumberEl) {
//     resultEl.innerHTML = thirdNumberEl + "=>"+ secondNumberEl +"=>" +firstNumberEl
// }
// else if (firstNumberEl > secondNumberEl && firstNumberEl > thirdNumberEl && thirdNumberEl >secondNumberEl){
//     resultEl.innerHTML = secondNumberEl + "=>"+ thirdNumberEl+"=>" +firstNumberEl
// }
// else if(firstNumberEl < secondNumberEl && firstNumberEl > thirdNumberEl && thirdNumberEl <secondNumberEl){
//     resultEl.innerHTML = thirdNumberEl + "=>"+ firstNumberEl+"=>" +secondNumberEl
// }
// else if(firstNumberEl < secondNumberEl && firstNumberEl < thirdNumberEl && thirdNumberEl <secondNumberEl){
//     resultEl.innerHTML =  firstNumberEl+ "=>"+ thirdNumberEl+"=>" +secondNumberEl
// }
// else if(firstNumberEl < secondNumberEl && firstNumberEl < thirdNumberEl && thirdNumberEl >secondNumberEl){
//     resultEl.innerHTML =  firstNumberEl+ "=>"+ secondNumberEl+"=>" +thirdNumberEl
// }
// else {
//     resultEl.innerHTML =  secondNumberEl+ "=>"+ firstNumberEl+"=>" +thirdNumberEl
// }
// }
// function handling2() {
//     var optionEl = document.getElementById ("option").value
//     var loiChaoEl = document.getElementById("loiChao")
    
//     loiChaoEl.style.display = "block";
    
//     if ( optionEl==="sister") {
//         loiChaoEl.innerHTML = "xin chào em gái"
        
//     }
//     else if (optionEl==="brother") {
//         loiChaoEl.innerHTML = "xin chào anh trai"
        
//     }
//     else if (optionEl==="mother"){
//         loiChaoEl.innerHTML = "xin chào mẹ"
        
//     }
//     else if(optionEl==="father"){
//         loiChaoEl.innerHTML = "xin chào bố"
        
//     }
//     else {
//         loiChaoEl.innerHTML ="";
//     }
// }
// function handling3() {
//     var soThuNhatEl =+document.getElementById("soThuNhat").value
//     var soThuHaiEl =+document.getElementById("soThuHai").value
//     var soThuBaEl =+document.getElementById("soThuBa").value
//     var ketQuaEl = document.getElementById ("bt3-result")
//     ketQuaEl.style.display= "block";
//     if (soThuNhatEl%2===0 && soThuHaiEl%2===0 && soThuBaEl%2===0) {
//         ketQuaEl.innerHTML= "3 số chẵn"
//     }
//     else if (soThuNhatEl%2!=0 && soThuHaiEl%2===0 && soThuBaEl%2===0){
//         ketQuaEl.innerHTML= "2 số chẵn và 1 số lẻ"
//     }
//     else if(soThuNhatEl%2===0 && soThuHaiEl%2===0 && soThuBaEl%2!=0) {
//         ketQuaEl.innerHTML= "2 số chẵn và 1 số lẻ"
//     }
//     else if (soThuNhatEl%2===0 && soThuHaiEl%2!=0 && soThuBaEl%2===0) {
//         ketQuaEl.innerHTML= "2 số chẵn và 1 số lẻ"
//     }
//     else if (soThuNhatEl%2!=0 && soThuHaiEl%2!=0 && soThuBaEl%2===0){
//         ketQuaEl.innerHTML= "1 số chẵn và 2 số lẻ"
//     }
//     else if (soThuNhatEl%2!=0 && soThuHaiEl%2===0 && soThuBaEl%2!=0) {
//         ketQuaEl.innerHTML= "1 số chẵn và 2 số lẻ"
//     }
//     else if (soThuNhatEl%2===0 && soThuHaiEl%2!=0 && soThuBaEl%2!=0) {
//         ketQuaEl.innerHTML= "1 số chẵn và 2 số lẻ"
//     }
//     else {
//         ketQuaEl.innerHTML= "3 số lẻ"
//     }

// }
// function handling4() {
//     var canhThuNhatEl =+ document.getElementById ("canhThuNhat").value
//     var canhThuHaiEl =+ document.getElementById ("canhThuHai").value
//     var canhThuBaEl =+ document.getElementById ("canhThuBa").value
//     var result4El= document.getElementById ("bt4-result")
//     result4El.style.display= "block";
//     if (canhThuNhatEl===canhThuHaiEl && canhThuNhatEl===canhThuBaEl && canhThuHaiEl===canhThuBaEl) {
//         result4El.innerHTML="tam giác đều"
//     }
//     else if (canhThuNhatEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl) {
//         result4El.innerHTML="tam giác cân"
//     }
//     else if (canhThuNhatEl===canhThuBaEl && canhThuNhatEl!=canhThuHaiEl) {
//         result4El.innerHTML="tam giác cân"
//     }
//     else if (canhThuBaEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl) {
//         result4El.innerHTML="tam giác cân"
//     }
//     else if (canhThuNhatEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl && canhThuNhatEl*canhThuNhatEl +canhThuHaiEl*canhThuHaiEl===canhThuBaEl*canhThuBaEl) {
//         result4El.innerHTML="tam giác vuông cân"
//     }
//     else if (canhThuNhatEl===canhThuBaEl && canhThuNhatEl!=canhThuHaiEl &&canhThuNhatEl*canhThuNhatEl +canhThuBaEl*canhThuBaEl===canhThuHaiEl*canhThuHaiEl) {
//         result4El.innerHTML="tam giác vuông cân"
//     }
//     else if (canhThuBaEl===canhThuHaiEl && canhThuNhatEl!=canhThuBaEl &&canhThuNhatEl*canhThuNhatEl ===canhThuHaiEl*canhThuHaiEl +canhThuBaEl*canhThuBaEl) {
//         result4El.innerHTML="tam giác vuông cân"
//     }
//     else if (canhThuNhatEl*canhThuNhatEl +canhThuHaiEl*canhThuHaiEl===canhThuBaEl*canhThuBaEl) {
//         result4El.innerHTML="tam giác vuông"
//     }
//     else if (canhThuNhatEl*canhThuNhatEl +canhThuBaEl*canhThuBaEl===canhThuHaiEl*canhThuHaiEl) {
//         result4El.innerHTML="tam giác vuông"
//     }
//     else if (canhThuNhatEl*canhThuNhatEl ===canhThuHaiEl*canhThuHaiEl +canhThuBaEl*canhThuBaEl) {
//         result4El.innerHTML="tam giác vuông"
//     }
//     else {
//         result4El.innerHTML="tam giác thường"
//     }


// }
