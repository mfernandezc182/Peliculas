import { Component } from '@angular/core';
import { SeguridadService } from './seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  logueado: boolean = false

  constructor(private seguridadService: SeguridadService){
    this.logueado = this.seguridadService.estarLogeado()
    this.seguridadService.onCambioEstado.subscribe(
      (estado: boolean) => this.logueado = estado
    )
  }
  salir(){
    this.seguridadService.logout()
  }
}
