function validar() {
    var ban = true;
    var x;
    
    var texto = document.getElementById("apefrm").value;
    x = document.getElementById("err1");
    if (texto === null || texto.length === 0 || /^\s+$/.test(texto)) {
        x.className = "error";
        ban = false;
    } else {
        x.className = "oculto";
    }

    texto = document.getElementById("nomfrm").value;
    x = document.getElementById("err2");
    if (texto === null || texto.length === 0 || /^\s+$/.test(texto)) {
        x.className = "error";
        ban = false;
    } else {
        x.className = "oculto";
    }
    
   
    texto = document.getElementById("edadfrm").value;
    x = document.getElementById("err3");
    if (texto === null || texto.length === 0 || /^\s+$/.test(texto)) {
        x.className = "error";
        ban = false;
    } else {
        x.className = "oculto";
    }
    x = document.getElementById("err4");
    if (isNaN(texto)) {
        x.className = "error";
        ban = false;
    } else {
        x.className = "oculto";
    }
    x = document.getElementById("err5");
    if (texto < 0 || texto > 120) {
        x.className = "error";
        ban = false;
    } else {
        x.className = "oculto";
    }

    texto = document.getElementById("provfrm");
    x = document.getElementById("err6");
    if (texto.selectedIndex === 0) {
        x.className = "error";
        ban = false;
    } else {
        x.className = "oculto";
    }

     texto = document.getElementById("textofrm").value;
    x = document.getElementById("err7");
    if (texto === null || texto.length === 0 || /^\s+$/.test(texto)) {
        x.className = "error";
        ban = false;
    } else {
        x.className = "oculto";
    }

    return ban;

}


    
function limita(maximoCaracteres) {
    var elemento = document.getElementById("textofrm");
    if (elemento.value.length >= maximoCaracteres) {
        return false;
    }
    else {
        return true;
    }
    
    
}
