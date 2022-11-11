const imagenPrincipal = document.querySelector("#imagenPrincipal")

console.log(imagenPrincipal) 

imagenPrincipal.addEventListener("click", () => {
    console.log("me diste click");

    if(imagenPrincipal.style.borderColor !== "red") {
        imagenPrincipal.style.borderColor = "red";
        imagenPrincipal.style.borderWidth = "2px";
        imagenPrincipal.style.borderStyle = "solid";
    }

    else {
        if(imagenPrincipal.style.borderColor = "red") {
            imagenPrincipal.style.borderColor = "";
            imagenPrincipal.style.borderWidth = "";
            imagenPrincipal.style.borderStyle = "";
        }
    }
})