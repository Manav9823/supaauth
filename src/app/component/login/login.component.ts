import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupaService } from 'src/app/service/supa.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private auth:SupaService){
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control('',
       [
        Validators.required, 
        Validators.email, 
        Validators.minLength(5)
      ]),
      password: formBuilder.control('', 
      [
        Validators.required, 
        Validators.minLength(7)
      ])
    });

  }

  public onSubmit(){
    this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  public onGoogleSubmit(){
    console.log('In google Submit')
    this.auth.signWithGoogle()
  }

  public onGithubSubmit(){
    console.log('In google Submit')
    this.auth.signWithGithub()
  }
}
