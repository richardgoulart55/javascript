function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Coé cuzão, tá tirando?')
        res.innerHTML = 'Dá não menó'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p < 0) {
            window.alert('não rola')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F974}`
            }
        } else {
            //contagem regressiva
            for(var c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F9D0}`
    }
}