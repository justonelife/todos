import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public registerForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required ,this.matchPassword.bind(this)]]
    });
  }

  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    const password: string = this.registerForm
      ? this.registerForm.value.password
      : undefined;
    const confirmPassword: string = control.value;
    if (password === confirmPassword) return null;
    return ({
      notMatch: true
    });
  }

  onRegisterClick(): void {
    if (this.registerForm.valid) {
      let data = this.getBody(this.registerForm.value);
      this.userService.userRegister(data).subscribe(console.log);
    }
  }

  getBody(formValue: {[key: string]: any}): { username: string, password: string} {
    let { username, password } = formValue;
    return ({username, password});
  }

  isDisableRegisterButton(): Boolean {
    return !this.registerForm.valid;
  }

}
