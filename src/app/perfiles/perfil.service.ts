import { ClPerfil } from './model/ClPerfil';
import { Injectable } from '@angular/core';

// Injectable permite utilizar la misma instancia en varias páginas
// Se pasa como parámetro en el constructor (Injección) 
@Injectable({
    // providedIn: 'root', No Es necesario incluirlos en las librerías
    providedIn: 'root'
})
export class PerfilService {
    // Creamos un Arreglo del tipo IRegistro
    private registros: ClPerfil[] =
        [{ id: "122", usuario: "Juan Gabriel", correo: "picapiedrax@harrys.cl", clave: "1134" , fechanacimiento: "12/12/1999" }
         ]

    constructor() {
        // Revisar CUANDO y CUANTAS veces se inicia el servicio 
        console.log("Inicio Servicio****************}")
    }
    // Método que retorna la dirección del arreglo
    getRegistroMetodo(): ClPerfil[] {
        return this.registros
    }
    // Nadien toca la variable, a no ser que sea por métodos 
    // que se crearán más adelante
    // por lo cual retorno una copia
    get getRegistros(): ClPerfil[] {
        return [...this.registros]
    }

    // Accesador que retorna el contenido(Copia)
    get getRegistrosCopia(): ClPerfil[] {
        // 3 punto retorna una copia
        return [...this.registros]
    }
    // Accesador que retorna la dirección del arreglo
    get getRegistrosReferencia(): ClPerfil[] {
        return this.registros
    }

    agregarServicio(reg:ClPerfil){
        this.registros.push(reg)    
        console.log("Registro Agregars:",this.registros)
    }
    actualizarServicio(id:string,reg:ClPerfil){
        console.log("buscando")
        // Buscamos el Objeto por medio del id
        // Recuerde que found apunta al objeto
        let found = this.registros.find((element) => element.id == id);
        // Si existe realizo los cambios
        if (found){
            // Found contiene la dirección 
            found!.clave=reg.clave
            found!.correo=reg.correo
            console.log("found",found)
            console.log("Registro Actualizar:",this.registros)
        }
    }
     eliminarServicio(id:string){
        console.log("Registro Eliminar:",this.registros)
        // Observe que parte del final
        // Pregunte al Profesor( El Magnifico :)  )
        // Pista los registros cuando se elimina uno los demás se corren un espacio
        for (let i = this.registros.length-1; i >= 0; i--) {
            console.log("busco",i,id,this.registros[i].id)
            if (this.registros[i].id === id) {
                let spliced = this.registros.splice(i, 1);
                console.log(" Eliminado: " , this.registros,[i]);
                // Si solo existe una vez, debiera realizar un return
            }
        }
        console.log("Registro Eliminar:",this.registros)
     }

     // Recibimos el ID a buscar
     // Devuelve una estructura del tipo IRegistro
     leerServicio(id:string):ClPerfil{
        for (let i = 0; i < this.registros.length; i++) {
            if (this.registros[i].id === id) {
                // Si lo encuentro realizo un return
                // devulevo la direccion, no el contenido
                return this.registros[i]
            }
        }        

        // En caso  de que no exista, devuelve una estructura vacia
        return {id:"",usuario:"",correo:"",clave:"", fechanacimiento:""}
     }

}