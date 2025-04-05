async function consultaNumeroAleatorio(params) {
    
    let url = 'https://api-repaso.onrender.com/api/v1/random-number/';

    try {
        // Se envia la peticion con el fetch
        let response = await fetch(url);
        
        // Se verifica si la respuesta es correcta
        // Si no es correcta se lanza un error
        if (!response.ok) {
            throw new Error('Error en la peticion');
        }

        // Si la peticion es correcta, se convierte a JSON la respuesta y se imprime
        let data = await response.json();
        console.log(data);

        // Aqui deberas agregar el codigo para mostrar los numeros aleatorios en la pagina de html

    } catch (error) {
        alert('Error en la peticion, no se pudieron generar los numeros aleatorios');
        console.log(error);
    }
}

consultaNumeroAleatorio();