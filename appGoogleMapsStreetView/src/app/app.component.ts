import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appGoogleMapsStreetView';
  mapOptions: google.maps.MapOptions = {
    center: { lat: -12.0448403, lng: -77.0319752 },
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };
  marker = {
    position: { lat: -12.0448403, lng: -77.0319752 },
  };

  marker1 = { position: { lat: -12.0526789, lng: -77.0275729 } };
  marker2 = { position: { lat: -12.0458476, lng: -77.0360521 } };
  marker3 = { position: { lat: -12.0516596, lng: -77.0346048 } };
  marker4 = { position: { lat: -12.0467646, lng: -77.0297023 } };
  markers: any[] = [this.marker1, this.marker2, this.marker3, this.marker4];
  @ViewChild(GoogleMap) map!: GoogleMap;
  ngAfterViewInit() {
    const streetView = this.map.getStreetView();
    streetView.setOptions({
      position: { lat: -12.0448403, lng: -77.0319752 },
      pov: { heading: 70, pitch: -10 },
    });
    streetView.setVisible(true);
  }
  // ngAfterViewInit() {
  //   const bounds = this.getBounds(this.markers);
  //   this.map.fitBounds(bounds);
  // }
  getBounds(markers: any[]) {
    let north;
    let south;
    let east;
    let west;
    for (const marker of markers) {
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates
      north =
        north !== undefined
          ? Math.max(north, marker.position.lat)
          : marker.position.lat;
      south =
        south !== undefined
          ? Math.min(south, marker.position.lat)
          : marker.position.lat;
      east =
        east !== undefined
          ? Math.max(east, marker.position.lng)
          : marker.position.lng;
      west =
        west !== undefined
          ? Math.min(west, marker.position.lng)
          : marker.position.lng;
    }
    const bounds = { north, south, east, west };
    return bounds;
  }

  //integracion del sweetAlert
  ngOnInit(): void {
    console.log('Ciclo de vida con respuesta espontanea.');
  }
  tinyAlert() {
    Swal.fire('Las calles se ven bien!');
  }
  successNotification() {
    Swal.fire('hey', 'la ciudad se ve bien!', 'success');
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
        Swal.fire('Eliminado!', 'Producto eliminado correctado.', 'success');
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
