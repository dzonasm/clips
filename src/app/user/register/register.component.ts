import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TOAST_TYPE } from '../../shared/enums/toas-type.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  passwordValidator: RegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(this.passwordValidator),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(12),
  ]);

  showAlert = false;
  alertMessage = 'Please wait, your account is being created';
  alertColor = TOAST_TYPE.ALERT;

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    age: this.age,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  });

  register(): void {
    this.showAlert = true;
    this.alertMessage = 'Please wait, your account is being created';
    this.alertColor = TOAST_TYPE.ALERT;
  }
}
