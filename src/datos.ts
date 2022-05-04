let dato = document.getElementById("datos");
let rotulo = document.getElementById("rotulo");
let btnEnv = document.getElementById("btnEnviar");
rotulo.innerHTML = "Indique la altura de la persona:";
btnEnv.addEventListener("click", () => {
  console.log("la altura es:", dato.value);
});
