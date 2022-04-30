/**INPUT: CHO 3 SỐ NGUYÊN
 * PROCESS : 
 *           1. LẤY ĐƯỢC VALUE firstNumber , VALUE secondNumber , VALUE thirdNumber
 *           2. TẠO BIẾN VAR resultEl
 *           3. SO SÁNH GIÁ TRỊ CỦA  VALUE firstNumber , VALUE secondNumber , VALUE thirdNumber
 *           4. HIỂN THỊ KẾT QUẢ SẮP XẾP THEO THỨ TỰ TĂNG DẦU
 * OUTPUT : SẮP XẾP THEO THỨ TỰ TĂNG DẦU
 */          





function handling() {
    var firstNumberEl = +document.getElementById ("firstNumber").value;
    var secondNumberEl = +document.getElementById ("secondNumber").value
    var thirdNumberEl = +document.getElementById ("thirdNumber").value
    var resultEl = document.getElementById ("bt1-result")
    resultEl.style.display= "block";

if (firstNumberEl > secondNumberEl && firstNumberEl > thirdNumberEl && secondNumberEl >thirdNumberEl) {
    resultEl.innerHTML = thirdNumberEl + "=>"+ secondNumberEl +"=>" +firstNumberEl
}
else if (firstNumberEl > secondNumberEl && firstNumberEl > thirdNumberEl && thirdNumberEl >secondNumberEl){
    resultEl.innerHTML = secondNumberEl + "=>"+ thirdNumberEl+"=>" +firstNumberEl
}
else if(firstNumberEl < secondNumberEl && firstNumberEl > thirdNumberEl && thirdNumberEl <secondNumberEl){
    resultEl.innerHTML = thirdNumberEl + "=>"+ firstNumberEl+"=>" +secondNumberEl
}
else if(firstNumberEl < secondNumberEl && firstNumberEl < thirdNumberEl && thirdNumberEl <secondNumberEl){
    resultEl.innerHTML =  firstNumberEl+ "=>"+ thirdNumberEl+"=>" +secondNumberEl
}
else if(firstNumberEl < secondNumberEl && firstNumberEl < thirdNumberEl && thirdNumberEl >secondNumberEl){
    resultEl.innerHTML =  firstNumberEl+ "=>"+ secondNumberEl+"=>" +thirdNumberEl
}
else {
    resultEl.innerHTML =  secondNumberEl+ "=>"+ firstNumberEl+"=>" +thirdNumberEl
}
}