function val_1() {
    var a = document.getElementById('val-1').value
    if (a == '333') {
        return true
    } else {
        alert('No tiene pinta de ser la combinación adecuada.')
        return false
    }
}