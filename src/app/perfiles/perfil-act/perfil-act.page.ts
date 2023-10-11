import { Component, OnInit } from '@angular/core';
import { PerfilServiceService } from '../perfil.service.service';

@Component({
    selector: 'app-actualizar',
    templateUrl: './perfil-act.page.html',
    //styleUrls: ['./cliente.actualizar.page.scss'],
})
export class ClienteActualizarPage {
    id = "5"
    registro = {
        nombres: "",
        apellidos: "",
        correo: "",
        clave: "",
    }


    // Observe que en el constructor injectamos el ClienteService
    // Le asignamos un nombre el cual utilizaremos más adelante
    constructor(private cliServ:PerfilServiceService) { }

    grabar() { 
        // Invocamos al método creado en el servicio
        // Le pasamos como parámetro el ID y la variable registro
        // registro, contiene todos los campos enlazados del Html
        this.cliServ.updatePerfil(this.id ,this.registro)
    }


}