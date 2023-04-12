import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { addQuestion } from 'src/app/models/add-question';
import { ApiService } from 'src/app/shared/services/api.service';



@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent {


  constructor(private fb:FormBuilder,private toast:ToastrService, private api:ApiService){}

  // addQusetionFrom!:FormGroup

  ngOnInit(){}
    addQusetionFrom = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
      ]),
      question: new FormControl(null, [
        Validators.required,
      ]),
      tags: new FormControl(null, [
        Validators.required,
      ]),
    });

    data:any
  add(){
    this.data=this.addQusetionFrom.getRawValue();


    this.data['username']=localStorage.getItem('username');
    let tagString =this.data.tags;
    let tagsArray = tagString.split(',');
    this.data['tags']=tagsArray;
    this.data['answer']="no ans yet"
    this.api.addQuestion(this.data).subscribe({
      next: (res) => {
        if (res){
          console.log("add question responce",res);
          this.toast.success("question asked successfully")
          this.addQusetionFrom.reset()
        }
        else{
          this.toast.error("error in getting responce")
        }


      },
      error: (err) => {
        this.toast.error('error');

      }
    })
  }
}
