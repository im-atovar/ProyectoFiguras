async function calcular(figura, operacion) {
    let datos = {};
    let error = false;
    
    // Validar los datos ingresados según la figura seleccionada
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
    
    // Si no hay errores, enviar los datos al servidor
    if (!error) {
        // Manejo de bloque try-catch para capturar errores de red o del servidor
        try {
            // Enviar los datos al servidor usando fetch
            const response = await fetch('/calcular', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Convertir los datos a JSON
                body: JSON.stringify(datos)
            });
            
            const result = await response.json();
            document.getElementById(`result-${figura}`).innerHTML = `
                <p class="success">${operacion === 'area' ? 'Área' : 'Perímetro'}: ${result.resultado}</p>
            `;
        } catch (error) {
            // Mostrar error en el resultado
            document.getElementById(`result-${figura}`).innerHTML = `
                <p class="error">Error: ${error.message}</p>
            `;
        }
    }
}

// Función para limpiar el formulario y los resultados
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