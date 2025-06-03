/**
 * Función para calcular el área o perímetro de una figura geométrica
 * según los datos ingresados en el formulario.
 * Esta función valida los datos ingresados,
 * envía una solicitud al servidor y muestra el resultado.
 * @param {string} figura Ejemplo: 'rectangulo', 'triangulo', 'circulo'
 * @param {string} operacion Ejemplo: 'area', 'perimetro'
 * @returns {Promise<void>} Esta función no retorna un valor, pero actualiza el DOM con el resultado.
 * @throws {Error} Si hay un error en la solicitud o en los datos ingresados.
 */
async function calcular(figura, operacion) {
    let datos = {};
    let error = false;
    
    if (figura === 'rectangulo') {
        const base = document.getElementById('base-rectangulo').value;
        const altura = document.getElementById('altura-rectangulo').value;
        
        if (!base || !altura || base <= 0 || altura <= 0) {
            document.getElementById('result-rectangulo').innerHTML = '<p class="error">Por favor ingrese valores válidos (mayores a 0)</p>';
            error = true;
        } else {
            datos = { figura, operacion, base, altura };
        }
    } else if (figura === 'triangulo') {
        const base = document.getElementById('base-triangulo').value;
        const altura = document.getElementById('altura-triangulo').value;
        
        if (!base || !altura || base <= 0 || altura <= 0) {
            document.getElementById('result-triangulo').innerHTML = '<p class="error">Por favor ingrese valores válidos (mayores a 0)</p>';
            error = true;
        } else {
            datos = { figura, operacion, base, altura };
        }
    } else if (figura === 'circulo') {
        const radio = document.getElementById('radio-circulo').value;
        
        if (!radio || radio <= 0) {
            document.getElementById('result-circulo').innerHTML = '<p class="error">Por favor ingrese un radio válido (mayor a 0)</p>';
            error = true;
        } else {
            datos = { figura, operacion, radio };
        }
    }
    
    if (!error) {
        try {
            const response = await fetch('/calcular', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
            
            const result = await response.json();
            document.getElementById(`result-${figura}`).innerHTML = `
                <p class="success">${operacion === 'area' ? 'Área' : 'Perímetro'}: ${result.resultado}</p>
            `;
        } catch (error) {
            document.getElementById(`result-${figura}`).innerHTML = `
                <p class="error">Error: ${error.message}</p>
            `;
        }
    }
}

/**
 * Función para limpiar el formulario y los resultados.
 * Esta función resetea los campos de entrada y los resultados mostrados.
 * @returns {void} Esta función no retorna un valor, pero actualiza el DOM.
 */
function limpiarFormulario() {
    // Limpiar inputs
    document.getElementById('base-rectangulo').value = '';
    document.getElementById('altura-rectangulo').value = '';
    document.getElementById('base-triangulo').value = '';
    document.getElementById('altura-triangulo').value = '';
    document.getElementById('radio-circulo').value = '';
    
    // Limpiar resultados
    document.getElementById('result-rectangulo').innerHTML = '';
    document.getElementById('result-triangulo').innerHTML = '';
    document.getElementById('result-circulo').innerHTML = '';
}