import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pipes';
  name = 'Renzo Davila';
  myArray = [1, 2, 3, 4, 5, 6, 7, 8];
  nombres = [
    'Maria',
    'Jose',
    'Jesus',
    'Renzo',
    'Andres',
    'Victor',
    'Hugo',
    'Pedro',
    'Carmen',
  ];
  PI = Math.PI;
  varNum = 1234567890;
  myNum = 0.589;
  salario = 3500.5;
  novato = {
    name: 'Elena Soto',
    alias: 'prima',
    song: 'Hurt So Good',
    skills: ['divertida y graciosa', 'Come mucha pizza'],
    youtubeChannel: 'Riete con Elena',
    address: {
      street: 'Av Universitaria',
      number: 3567,
      city: 'Lima',
    },
  };
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('dato X se muestra!');
    }, 3000);
    17;
  });
  myDate = new Date();
  video = 'lbE7WsuK9rI';
  password = 'mySuperSecretPassword123';
  enable = true;

  videoNew = '';
  video1() {
    this.videoNew = 'TlQMt-fSWPY';
  }
  video2() {
    this.videoNew = '-ZMIZlH5zXw';
  }
}
