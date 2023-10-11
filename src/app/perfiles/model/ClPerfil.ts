// Definimos la Estructura de nuestro registro
// Todos los campos son obligatorios 
// al menos que se declare como opcional con signo de pregunta



export class ClPerfil {
    // si no Inicializo los valores, da Error
    // Por eso es el constructor por obligación
    id: number;
    fechanacimiento: String;
    usuario: String;
    correo: String;
    clave: String;
      //Signo pregunta, permite que el campo sea opcional
  
    // si no Inicializo los valores, da Error
      constructor(obj: any){
          this.id = obj && obj.id || null
          this.fechanacimiento = obj && obj.fechanacimiento || null
          this.usuario = obj && obj.usuario || null
          this.correo = obj && obj.correo || null
          this.clave = obj && obj.clave || null
         
          
      }
  }


  ClPerfil