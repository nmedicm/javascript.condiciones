const inputStickerUno = document.querySelector("#inputStickerUno");
const inputStickerDos = document.querySelector("#inputStickerDos");
const inputStickerTres = document.querySelector("#inputStickerTres");
const resultado = document.querySelector("#resultado");
const verificar = document.querySelector("#verificar");


verificar.addEventListener("click", () => {
    if(Number(inputStickerUno.value) + Number(inputStickerDos.value) + Number(inputStickerTres.value) > 10) {
        resultado.innerHTML = "Llevas demasiados stickers";
    } 
    
    else{
        if(Number(inputStickerUno.value) + Number(inputStickerDos.value) + Number(inputStickerTres.value) <= 10) {
            resultado.innerHTML = `Llevas ${Number(inputStickerUno.value) + Number(inputStickerDos.value) + Number(inputStickerTres.value)} stickers`
        }
    }
})
