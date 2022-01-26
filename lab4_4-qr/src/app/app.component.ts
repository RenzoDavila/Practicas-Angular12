import { Component } from '@angular/core';
import UsersJson from '../assets/users.json';
interface USERS {
  id: Number;
  name: String;
  dni: String;
  fec1: String;
  fec2: String;
  tipo: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-demo_lab4_4';
  Users: USERS[] = UsersJson;
  UsersToString = JSON.stringify(this.Users[0]);

  data = [
    {
      name: 'Renzo Davila',
      profile: 'Software Developer',
      email: 'rdavilac@emeal.nttdata.com',
      hobby: 'sleeping',
    },
  ];
  dataToString = JSON.stringify(this.data);
  public qrCodeVal: string;
  public level: 'L' | 'M' | 'Q' | 'H';
  public width: number;

  constructor() {
    this.level = 'L';
    this.qrCodeVal = 'QR code string value';
    this.width = 200;
  }
  updateLevel(newValue: 'L' | 'M' | 'Q' | 'H') {
    this.level = newValue;
  }
  updateQrInfo(newValue: string) {
    this.qrCodeVal = newValue;
  }
  updateWidth(newValue: number) {
    this.width = newValue;
  }

  public textocambiado: any = this.Users[0].name;

  cambiar(newValue: Number) {
    this.UsersToString = JSON.stringify(
      this.Users.find((x) => x.id == newValue)
    );
    this.textocambiado = this.Users.find((x) => x.id == newValue)?.name;
  }
}
