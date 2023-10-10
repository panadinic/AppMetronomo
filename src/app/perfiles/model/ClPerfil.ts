// Definimos la Estructura de nuestro registro
// Todos los campos son obligatorios 
// al menos que se declare como opcional con signo de pregunta
export interface ClPerfil{
    // si no Inicializo los valores, da Error
    // Por eso es el constructor por obligación

    id?:String
    fechanacimiento:String
    //Signo pregunta, permite que el campo sea opcional}
    usuario:String
    correo:String  
    clave:String
}