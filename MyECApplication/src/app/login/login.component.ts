import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { appPath } from '../app-path.const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  path = appPath;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  login(name: string, password: string): void {
    if (name === 'justin' && password === '1234') {
      console.log('login success');
      this.router.navigate(['/home']);
    } else {
      alert('username or password wrong');
      this.router.navigate([this.path.login]);
    }

  }

}
