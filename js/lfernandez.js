//index
function val_1() {
    var a = document.getElementById('val-1').value
    if (a == '333') {
        return true
    } else {
        alert('No tiene pinta de ser la combinación adecuada.')
        return false
    }
}
//pagina2
function val_2() {
    var a = document.getElementById('val-2').value
    if (a == 'Caronte') {
        return true
    } else {
        alert('El cráneo no parece inmutarse.')
        return false
    }
}

//pagina3

function val_3() {
    var a = document.getElementById('val-3').value
    if (a == '639') {
        return true
    } else {
        alert('No parece ser la combinación correcta.')
        return false
    }
}