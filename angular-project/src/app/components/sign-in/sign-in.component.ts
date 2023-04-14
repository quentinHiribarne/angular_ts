import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  // [(ngModel)] est equivalent a
  // [ngModel] = "loginModel.login" + (ngModelChange) = "loginModel.login = $event"
  loginResult = {
    success: false,
    message: '',
  };

  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    public authenticationService: FirebaseAuthService,
    private router: Router
  ) {}

  loginControl = this.fb.nonNullable.control<string>('', [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = this.fb.nonNullable.control('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    ),
    Validators.minLength(8),
  ]);

  loginForm = this.fb.group({
    login: this.loginControl,
    password: this.passwordControl,
  });

  login(): void {
    this.loginResult = this.authenticationService.signIn(
      this.loginForm.getRawValue().login,
      this.loginForm.getRawValue().password
    );

    // if account created, redirect to login page
    if (this.loginResult.success) {
      this.router.navigate(['']).catch((err) => {
        console.error(err);
      });
    }
  }
}
