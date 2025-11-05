/** 
 * Funcion 1: Devuelta un valor
 * Calcula la puntucion final al multiplicador el total de aciertos por el valor de
 * @param {number} aciertos - El numero de respuestas correctas. 
 * @param {number} valor_acierto - El valor de cada acierto
 * @returns {number} La puntacion total.
 */
function calcularPuntuacion(acierto, valor_acierto) {
    let puntacion_final = aciertos * valor_acierto;
    return puntacion_final;
}

/**
 * funcion 2: realiza una accion ( no devuelve un valor)
 * muestra un mensaje en el documento HTML.
 * @param {string} nombre_usuario - el nombre de la persona a saludar.
 */
function mostrarSaludo(nombre_usuario) {
    // busca un elemento en el documento HTML con el id "resultado_saludo"
    const elemento_saludo = document.getElementById("resultado_salud")
    // cambia el contenido de ese elemento
    elemento_saludo.textContent = "¡hola," + nombre_usuario+ "! es un placer tenerlos aqui"

}

