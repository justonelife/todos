import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
    this.userService.userLogin(this.loginForm.value).subscribe(
      res => this.storeUser(res),
      err => console.log(err)
    );
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
