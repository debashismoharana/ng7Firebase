import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor() {
    firebase.initializeApp(environment.firebase);
   }

  ngOnInit() {
  }

  register() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
      console.log(res);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      
      // ...
    });
  }
  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
      console.log(res);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
  }

}
