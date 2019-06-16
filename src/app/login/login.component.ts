import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { environment } from '../../environments/environment';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private _router: Router) {
    if (firebase.apps.length <= 0) {
      firebase.initializeApp(environment.firebase);
    } else {
      firebase.app();
    }
   }

  ngOnInit() {
  }

  register() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
      console.log(res);
    })
    .catch(function(error) {
      console.log(error.code, error.message);
    });
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
      console.log(res);
      if (res.user) {
        this._router.navigate(['/profile']);
        console.log('profile loaded');
      }
      localStorage.setItem('refreshToken', res.user.refreshToken);
    })
    .catch(function(error) {
      console.log(error.code, error.message);
    });
  }
}
