import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/password.validator';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private fb:FormBuilder, private api:ApiService,private toast:ToastrService){}

  signupForm=this.fb.group({
    username:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,passwordValidator()]]
  })

  data:any
  signup(){
    this.data=this.signupForm.getRawValue()
    this.api.userSignup(this.data).subscribe({
      next:res=>{
        if(res){
          this.toast.success("signup done successfully")
        }
        else{
          this.toast.error("error")
        }
      },
      error:err=>{
        this.toast.error("error")
      }
    })
  }
}
