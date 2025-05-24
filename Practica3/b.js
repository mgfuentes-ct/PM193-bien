function verificarUsuario(usuario){
    //Retornar la promesa aqui
    return new Promise((resolve, reject) => {
        if(usuario === "admin"){
            resolve("Acceso concedido");
        } else{
            reject("Acceso denegado");
        }
    });
}

verificarUsuario("admin")
    .then((res => console.log(res))) //acceder
    .catch((err) => console.log(err)); //denegar

verificarUsuario("Ivan")
    .then((res => console.log(res)))
    .catch((err) => console.log(err));