function handling2() {
    var optionEl = document.getElementById ("option").value
    var loiChaoEl = document.getElementById("loiChao")
    
    loiChaoEl.style.display = "block";
    
    if ( optionEl==="sister") {
        loiChaoEl.innerHTML = "xin chào em gái"
        
    }
    else if (optionEl==="brother") {
        loiChaoEl.innerHTML = "xin chào anh trai"
        
    }
    else if (optionEl==="mother"){
        loiChaoEl.innerHTML = "xin chào mẹ"
        
    }
    else if(optionEl==="father"){
        loiChaoEl.innerHTML = "xin chào bố"
        
    }
    else {
        loiChaoEl.innerHTML ="";
    }
}