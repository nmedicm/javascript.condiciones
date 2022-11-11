const passwordUno = document.querySelector("#passwordUno")
const passwordDos = document.querySelector("#passwordDos")
const passwordTres = document.querySelector("#passwordTres")
const ingresar = document.querySelector("#ingresar")
const resultado = document.querySelector("#resultado")

console.log(ingresar)
console.log(passwordTres.value)

console.log(resultado)

ingresar.addEventListener("click", () => {
    console.log("me diste click")
    console.log(passwordUno.value + passwordDos.value + passwordTres.value)

    if(passwordUno.value + passwordDos.value + passwordTres.value == 911){
    resultado.innerHTML = "password 1 correcto";
    }

    else{
        if(passwordUno.value + passwordDos.value + passwordTres.value == 714){
            resultado.innerHTML = "password 2 correcto";
        }
        else{
            resultado.innerHTML = "password incorrecto";
        }
    }

})