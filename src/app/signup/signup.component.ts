import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SingupRequest } from './singup-request';
import { AuthService } from '../auth/shared/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  signupRequest: SingupRequest;

  constructor(private authService:AuthService, private router: Router, private toastr: ToastrService) {
    this.signupRequest = {
      username:'',
      email:'',
      password:''
    };
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required])
    });
  }

  signup() {
    this.signupRequest.username = this.signupForm.get('username')?.value;
    this.signupRequest.email = this.signupForm.get('email')?.value;
    this.signupRequest.password = this.signupForm.get('password')?.value;

    this.authService.signup(this.signupRequest)
    .subscribe(() => {
      this.router.navigate(['/login'], {queryParams:{registered:'true'}});
    }, () => {
      this.toastr.error('Registration Failed! Please try again');
    });
  }
  

}
