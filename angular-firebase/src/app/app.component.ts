import { Component, OnInit } from '@angular/core';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-firebase';
  constructor(private servicio: DatosService) {}
  ngOnInit(): void {}
  mostrarTodos() {
    this.servicio.getDatosTodos();
    window.alert('Se muestran todos los datos en consola!');
  }
  mostrarUnDato() {
    this.servicio.getDato();
    window.alert('Se muestran un solo dato!');
  }
  mostrarDatoCondicion() {
    this.servicio.getDato();
    window.alert('Se muestran datos con condicion!');
  }
}
