import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserInfo } from './models/user-info.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoginClick(): void {
    let body = this.getBody(this.loginForm.value);
    this.userService.userLogin(body).subscribe(
      res => {
        this.storeUser(res);
        this.router.navigate(['/todos']);
      },
      err => console.log(err)
    );
  }

  getBody(info: UserInfo): UserInfo {
    let { username, password } = info;
    username = username.trim();
    return ({ username, password });
  }

  storeUser(user: { [key: string]: string}): void {
    sessionStorage.setItem('TOKEN', user.token);
    delete user.token;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  redirectRegisterPage(): void {
    this.router.navigate(['/register']);
  }

}
