const personas =[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

// mi codigo


//1
const personabuscar = personas.find(persona => persona.nombre === "Luis");
console.log("Persona: ",personabuscar);


//2
personas.forEach(persona => {
    console.log("Nombre: ",persona.nombre, "Edad: ",persona.edad);
    }
);

//3
const totalEdad = personas.reduce((suma, persona) => suma + persona.edad, 0);
console.log("Total de edad: ",totalEdad);