import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import UbicJson from '../assets/ubicacion.json';
import Swal from 'sweetalert2/dist/sweetalert2.js';
interface UBICACIONS {
  id: Number;
  name: String;
  latitud: Number;
  longitud: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Ubicacions: UBICACIONS[] = UbicJson;
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  //@ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow
  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow>;

  markers = [] as any;
  infoContent = '';
  title = 'Como usar el Componente Google Maps de Angular';

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(
        'position: ' +
          position.coords.latitude +
          ' ' +
          position.coords.longitude
      );
      setTimeout(() => {
        this.addMarker();
        this.marcarUbicaciones();
      }, 1000);
    });
  }

  // Configuración de Google Maps
  center: google.maps.LatLngLiteral;
  zoom = 15;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.MapMouseEvent) {
    console.log(event);
    this.logCenter();
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Etiqueta ' + (this.markers.length + 1),
      },
      title: 'Titulo ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    });
    Swal.fire('Agregamos el Titulo ' + (this.markers.length + 1));
    console.log('marcador colocado ' + this.markers);
  }

  marcarUbicaciones2() {
    this.Ubicacions.forEach((value) => {
      this.markers.push({
        position: {
          lat: value.latitud,
          lng: value.longitud,
        },
        label: {
          color: 'red',
          text: 'Etiqueta ' + (this.markers.length + 1),
        },
        title: 'Titulo ' + (this.markers.length + 1),
        options: { animation: google.maps.Animation.BOUNCE },
      });
      console.log('marcador colocado ' + this.markers);
    });
  }

  marcarUbicaciones() {
    console.log(this.Ubicacions);

    this.Ubicacions.forEach((value) => {
      this.markers.push({
        position: {
          lat: value.latitud,
          lng: value.longitud,
        },
        label: {
          color: 'red',
          text: value.name,
        },
        title: value.name,
        options: { animation: google.maps.Animation.BOUNCE },
      });
      console.log('marcador colocado ' + this.markers);
    });
    console.log(this.markers);
  }

  logCenter() {
    console.log('Centro: ' + JSON.stringify(this.map.getCenter()));
  }

  openInfo(marker: MapMarker, windowIndex: number) {
    /// stores the current index in forEach
    let curIdx = 0;
    this.infoWindowsView.forEach((window: MapInfoWindow) => {
      if (windowIndex === curIdx) {
        window.open(marker);
        curIdx++;
      } else {
        curIdx++;
      }
    });
  }
}
