function verificar(){
    var numero = document.getElementById('finicio')
    var numerotwo = document.getElementById('ffim')
    var res = document.getElementById('res')
    n = Number(numero.value)
    n2 = Number(numerotwo.value)
    if (numero.value.length == 0 ) {
        window.alert('[ERROR] Verifique seus dados..')
    }
    else {
        res.innerHTML = ''
        for(c = 1; c <=n2; c++) {
            Resultado = n * c 
            res.innerHTML += `${n} x ${c} = ${Resultado} <br>`
        }
    }
    
}