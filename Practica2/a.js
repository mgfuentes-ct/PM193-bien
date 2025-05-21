const personas = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "Mx",
    }
};

//aplicacion de destructuracion
const { nombre, edad, direccion: { ciudad, pais } } = personas;
console.log("Me llamo " + nombre + ", tengo " + edad + " años, vivo en " + ciudad + ", " + pais);