let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("datos");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Indique la altura de la persona:";
btnEnv.addEventListener("click", () => {
  console.log("la altura es:", dato.value);
});
