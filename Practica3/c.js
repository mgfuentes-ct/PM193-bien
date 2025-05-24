function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    }
    );
}

async function obtenerDatos(){
    //usa await para esperar la promesa de simularPeticionAPI
    //imprime el resultado
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

//usa la funcion async  
obtenerDatos();