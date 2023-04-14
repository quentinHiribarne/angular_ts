import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private angularFireAuth: Auth = inject(Auth);

  constructor() {}

  /**
   * Sign up with email/password service and return a json object with error message or all good message
   * @param email
   * @param password
   */
  signUp(email: string, password: string) {
    const message = {
      success: false,
      message: '',
    };

    createUserWithEmailAndPassword(this.angularFireAuth, email, password)
      .then((res: any) => {
        // console.log('You are Successfully signed up!', res);
        message.success = true;
        message.message = 'You are Successfully signed up!';
      })
      .catch((error: any) => {
        // console.log('Something is wrong:', error.message);
        message.success = false;
        message.message = error.message;
      });

    return message;
  }

  /**
   * Sign in with email/password service
   * @param email
   * @param password
   */
  signIn(email: string, password: string) {
    const message = {
      success: false,
      message: '',
    };

    signInWithEmailAndPassword(this.angularFireAuth, email, password)
      .then((res: any) => {
        // console.log('You are Successfully logged in!');
        message.success = true;
        message.message = 'You are Successfully logged in!';
      })
      .catch((err: any) => {
        // console.log('Something is wrong:', err.message);
        message.success = false;
        message.message = err.message;
      });

    return message;
  }

  /**
   * Sign out service
   */
  signOut() {
    this.angularFireAuth.signOut();
  }
}
