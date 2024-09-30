import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {
    this.loginFormGroup = this.fb.group({
      email: ['email', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  submit() {
    this.route.navigate(['/dashboard']);
  }
}
