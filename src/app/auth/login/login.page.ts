import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RequestLogin } from '../model/request-login.interface';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  requestingLogin: boolean = false;
  requestPassword: boolean = false;
  requestOtp: boolean = false;
  disableResend: boolean = true;
  showPasswordError: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    otp: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    
  }

  requestLogin(): void {

    this.requestingLogin = true;

    this.authService.requestLogin(this.loginForm.value).subscribe((response: RequestLogin) => {

      if (response.loggedIn) {

        localStorage.setItem('accessToken', response.token);
        this.router.navigate(['/home']);
      } else {

        if (response.method === 'password') {
          this.requestingLogin = false;
          this.requestPassword = true;

          if (response.status === 'failed') {
            this.showPasswordError = true;
          }

        } else {
          this.presentToast('bottom', 'Te hemos enviado un email de confirmación', 'success');
          this.requestingLogin = false;
          this.requestOtp = true;

        }

        setTimeout(() => {
          this.disableResend = false;
        }, 5000);

      }
    });

  }

  resetPassword() {

    this.authService.reset(this.loginForm.value).subscribe(() => {
      this.requestingLogin = false;
      this.requestPassword = false;
      this.presentToast('top', 'La password se ha reestablecido correctamente', 'success');
    }, error => {
      this.requestingLogin = false;
      this.presentToast('top', 'Ha ocurrido un error', 'danger');
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string, color: 'danger' | 'success' | 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      position: position,
      color: color
    });

    await toast.present();
  }

}
