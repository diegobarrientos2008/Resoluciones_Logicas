document.addEventListener("DOMContentLoaded",()=> {
  //Selecciona el form por su ID

  const formulario = document. getElementById("formularioDescuento");
  const resultado = document. getElementById("resultado");
  formulario.addEventListener ("submit", (evento) => {
    evento.preventDefault();
    const edad = parseInt(document.getElementById("edad").value);
    const esEstudiante = document.getElementById("esEstudiante").checked;
    resultado.textContent = "";
    resultado.style.color = "black";
    if(edad < 18 && esEstudiante) {
      resultado.textContent = "felicitaciones, obtiene un descuento de 10 %" ;
      resultado.style.color = "green";
    } else if (edad>=65){

      resultado.textContent = "felicitaciones, obtiene un descuento de 10 %" ;
      resultado.style.color = "green";

    } else {
       resultado.textContent = "lo siento, no aplicas para un descuento" ;
       resultado.style.color = "red";
    }

  });
  

});