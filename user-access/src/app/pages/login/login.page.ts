import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email;
  senha;

  constructor(private nav: NavController) { }//Controlador de navecvao

  ngOnInit() {
  }
  login() {
    if (this.email === 'maria@g.com' && this.senha === "12345678") {
      console.log("Login Realizado com Sucesso")
      this.nav.navigateForward('home')
      // Redirecionar usuario a tela Home
    } else {
      console.log("Usuario ou senha incorretos")
    }
  }

  esqueci() {
    this.nav.navigateForward('forgot')
  }

}
