import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-sweetalert-demo';
  ngOnInit(): void {
    console.log('Ciclo de vida con respuesta espontanea.');
  }
  tinyAlert() {
    Swal.fire('Sigamos!');
  }
  successNotification() {
    Swal.fire('Que tal', 'Han sido informados!', 'success');
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Este proceso es irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, adelante.',
      cancelButtonText: 'No, Lo pensare',
    }).then((result: { value: any; dismiss: any }) => {
      if (result.value) {
        Swal.fire('Eliminado!', 'Producto eliminado correctamnte.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Producto aún en nuestra base de datos.)',
          'error'
        );
      }
    });
  }
}
