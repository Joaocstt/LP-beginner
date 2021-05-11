function verificar() {                   // Função
    var data = new Date()                   // Função para chamar a data atual (ano)
    var ano_atual = data.getFullYear()          // Chama a função para receber na variavel
    var ano_nascimento = document.getElementById('fano').value  // Variavel recebe o que é enviado para o formulario HTML.
    var img = document.getElementById('foto')     // Variavel recebe a imagem do HTML
    var res = document.getElementById('res')      // Variavel recebe o conteudo da div
    if (ano_nascimento == 0 || Number(ano_nascimento) > ano_atual) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')                  // Verifica se o usuario digitou no formulario ou se o ano de nascimento é maior que o ano atual
    } else {
        var sexo = document.getElementsByName('radsex')                                     // Caso o usuario tenha digitado algo, ele ira entrar em outra condição, recebendo os var
        var idade = ano_atual - ano_nascimento                                            // idade vai receber o ano atual - ano de nascimento
        var genero = ''                                                                  // genero não recebe nada por enquanto
        if(sexo[0].checked) {                                                           // verifica se o usuario marcou a primeira caixa (M)[0] ou (F) [1]
            genero = 'Homem'                                                           // Faz as verificações das idades caso ela seja naquela condição recebera uma nova img
            if (idade >= 0 && idade < 14) {
                img.src = '../img/crianca.png'
            } else if (idade < 18) {
                img.src = '../img/adolecente.png'
            } else if (idade >= 18 && idade <= 60) {
                img.src = '../img/homem.png'
            } else  {
                img.src = '../img/idoso.png'
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                img.src = '../img/criancafem.png'
               
            } else if (idade < 18) {
                img.src = '../img/adolecenteF.png'
            } else if (idade >= 18 && idade <= 60) {
                img.src = '../img/mulher.png'
            } else  {
                img.src = '../img/idoso.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}


