import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { ClPerfil } from '../model/ClPerfil';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.page.html',
  // styleUrls: ['./perfil-list.page.scss'],
})
export class PerfilListPage {



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
      , fechanacimiento: ''
  }

  constructor(private perServ:PerfilService) { }


  leer() { 
    // El servicio retorna la dirección del objeto
    // Se actualiza de inmediato el HTML, ya que utilizas NGModel
    this.registro=this.perServ.leerServicio(this.id)
    this.registro.usuario= "jajajajajajaj"
}
eliminar() { }
grabar() { }
actualizar() { }
grabarActualizarAutomatico() { }
// myBackButton() {this.location.back();}

  ngOnInit() {
  }

}
