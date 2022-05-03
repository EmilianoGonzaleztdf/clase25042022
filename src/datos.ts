let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("datos");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "ingrese un dato:";
btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es", dato.value);
});
