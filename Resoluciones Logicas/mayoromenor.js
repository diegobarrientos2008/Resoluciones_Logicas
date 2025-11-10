const numero1 = parseInt(prompt("Ingresa el primer numero: "));
const numero2 = parseInt(prompt("Ingresa el segundo numero: "));

    if (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor, ingrese valores numéricos válidos.");
} else {
  
  if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
  } else if (numero2 > numero1) {
    alert(numero2 + " es mayor que " + numero1);
  } else {
    alert("Los números son iguales");
  }
} 

