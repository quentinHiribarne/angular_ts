import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  // [(ngModel)] est equivalent a
  // [ngModel] = "registerModel.login" + (ngModelChange) = "registerModel.login = $event"
  registerResult = {
    success: false,
    message: '',
  };

  /**
   * Constructor
   * @param fb - FormBuilder
   * @param authenticationService - FirebaseAuthService
   */
  constructor(
    private fb: FormBuilder,
    private authenticationService: FirebaseAuthService,
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

  registerForm = this.fb.group({
    login: this.loginControl,
    password: this.passwordControl,
  });

  /**
   * Register a new user with email and password in Firebase
   */
  register(): void {
    this.registerResult = this.authenticationService.signUp(
      this.registerForm.getRawValue().login,
      this.registerForm.getRawValue().password
    );

    // if account created, redirect to login page
    if (this.registerResult.success) {
      this.router.navigate(['/', 'login']).catch((err) => {
        console.error(err);
      });
    }
  }
}
