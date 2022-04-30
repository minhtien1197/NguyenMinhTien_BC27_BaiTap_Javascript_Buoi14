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