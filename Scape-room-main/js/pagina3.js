function val_1() {
    var a = document.getElementById('val-1').value
    if (a == '639') {
        return true
    } else {
        alert('No parece ser la combinación correcta.')
        return false
    }
}