import { PerfilService } from './../perfil.service';
import { ClPerfil } from './../model/ClPerfil';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil-read',
  templateUrl: './perfil-read.page.html',
})
export class PerfilReadPage {

  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  public id: string = '';
  registro:ClPerfil = {
      usuario: ''
      , correo: ''
      , clave: ''
      ,fechanacimiento:""

    }

   // Observe que en el constructor injectamos el ClienteService
  // Le asignamos un nombre el cual utilizaremos más adelante
  constructor(private cliServ:PerfilService) { }

  leer() { 
      // El servicio retorna la dirección del objeto
      // Se actualiza de inmediato el HTML, ya que utilizas NGModel
      this.registro=this.cliServ.leerServicio(this.id)
      this.registro.usuario= "jajajajajajaj"
  }
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
  // myBackButton() {this.location.back();}

}
