const sexo = document.getElementById("sexo")
const resultado = document.getElementById("resultado")
const imagem = document.getElementById("imagem")
const btn = document.getElementById("btn")

btn.addEventListener("click", function (event) {
    event.preventDefault()
    const imc = peso.value / (altura.value * altura.value)
    resultado.innerHTML ="Seu IMC é " + imc.toFixed(2)
    if (sexo.value == "Masculino") {
        if (imc < 18.5) {
            imagem.innerHTML = '<img src="assets/homen_Abaixo-do-peso.png">'
        }
        else if (imc > 18.5 && imc <= 24.9) {
            imagem.innerHTML = '<img src="assets/homen_Peso-normal.png">'
        }
        else if (imc > 24.9 && imc <= 29.9) {
            imagem.innerHTML = '<img src="assets/homen_Sobrepeso.png">'
        }
        else if (imc > 29.9 && imc <= 39.9) {
            imagem.innerHTML = '<img src="assets/homen_Obesidade.png">'
        }
        else if (imc >= 40) {
            imagem.innerHTML = '<img src="assets/homen_Obesidadee-Grave.png">'
        }
    }

    if (sexo.value == "Feminino") {
        if (imc < 18.5) {
            imagem.innerHTML = '<img src="assets/mulher_Abaixo-do-peso.png">'
        }
        else if (imc > 18.5 && imc <= 24.9) {
            imagem.innerHTML = '<img src="assets/milher_Peso-normal.png">'
        }
        else if (imc > 24.9 && imc <= 29.9) {
            imagem.innerHTML = '<img src="assets/mulher_Sobrepeso.png">'
        }
        else if (imc > 29.9 && imc <= 34.9) {
            imagem.innerHTML = '<img src="assets/mulher_Obesidade I.png">'
        }
        else if (imc > 34.9 && imc <= 39.9) {
            imagem.innerHTML = '<img src="assets/mulher_Obesidade II.png">'
        }
        else if (imc >= 40) {
            imagem.innerHTML = '<img src="assets/mulher_Obesidade III.png">'
        }
    }
})