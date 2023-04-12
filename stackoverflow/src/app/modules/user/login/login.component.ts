import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginData } from 'src/app/models/login-data';
import { ApiService } from 'src/app/shared/services/api.service';
import {ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toast: ToastrService,
    private router:Router
  ) {}

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  logindata: any;
  login(username: string, password: string) {
    this.logindata = this.loginForm.getRawValue();
    this.api.userLogin(this.logindata).subscribe({
      next: (res) => {
        if (res) {
          const users = res as unknown as any[];
          const user = users.find(
            (u) => u.username === username && u.password === password
          );
          if (user) {
            localStorage.setItem('username', user.username);
            localStorage.setItem('token', '123355');
            this.toast.success("Login sucessfull!!");
            this.router.navigate(['home'])
          } else {
            console.log('user not finded');
            this.toast.error("Login failure!!")
          }
        } else {
          this.toast.error('No resopnce found');
        }
      },
      error: (err) => {
        this.toast.error('error');

      }
    });
  }
}

