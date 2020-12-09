import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;
  formLogin : FormGroup;
  submitted = false;
  constructor(private authService: AuthService,private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['',[ Validators.required,Validators.email]],
      password: ['',[ Validators.required,Validators.minLength(6)]]
    })
  }
 
  get f(){
    return this.formLogin.controls
  }
  onSubmit(){
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
    //traitement
    this.authService.login(this.email,this.password).subscribe(data => {
      console.log(data)
    },err => console.log(err))
  }


}
