import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    if ((this.username === 'admin' && this.password === '123456') || 
        (this.username === 'prueba' && this.password === 'prueba') ||
        (this.username === 'paolo' && this.password === '123456')) {
      this.router.navigate(['/hub-alumno'], { queryParams: { username: this.username } });
    } else {
      const alert = await this.alertController.create({
        header: 'Fallo al iniciar sesión',
        message: 'Nombre de usuario inválido o contraseña inválida',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
