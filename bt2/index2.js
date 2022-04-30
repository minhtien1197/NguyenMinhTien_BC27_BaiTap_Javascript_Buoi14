/**INPUT: CHO 1 GIA ĐÌNH CÓ 4 THÀNH VIÊN LÀ BA - MẸ - CON TRAI - CON GÁI
 * PROCESS : 
 *           1. LẤY ĐƯỢC VALUE BA - MẸ - CON TRAI - CON GÁI
 *           2. TẠO BIẾN VAR  optionEl CÓ GIÁ TRỊ LÀ 1 TRONG 4 OPTION (BA - MẸ - CON TRAI - CON GÁI)
 *           3. TẠO BIẾN VAR loiChaoEl 
 *           4. XUẤT RA GIÁ TRỊ loiChaoEl TƯƠNG THÍCH VỚI MÕI GIÁ TRI CỦA optionEl
 * OUTPUT : CHÀO NGƯỜI ĐANG SỬ DỤNG MÁY TÍNH LÀ 1 TRONG 4 THÀNH VIÊN TRONG GIA ĐÌNH
 */          





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