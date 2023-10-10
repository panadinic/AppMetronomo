import { Component, OnInit } from '@angular/core';
import { ClienteService  } from '../perfil.service';

@Component({
  selector: 'app-perfil-act',
  templateUrl: './perfil-act.page.html',
})
export class PerfilActPage {

  id = "5"  
  registro = {
    usuario: "macarena1",
      correo: "harrys@ciudal.cl",
      clave: "macarena",
      fechanacimiento: "10/10/1999"
  }


  // Observe que en el constructor injectamos el ClienteService
  // Le asignamos un nombre el cual utilizaremos más adelante
  constructor(private cliServ:ClienteService) { }

  grabar() { 
      // Invocamos al método creado en el servicio
      // Le pasamos como parámetro el ID y la variable registro
      // registro, contiene todos los campos enlazados del Html
      this.cliServ.actualizarServicio(this.id,this.registro)
  }


}